import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { constant } from "@/helpers/constants";

/**
 * Terminal-style boot sequence, played on every full page load.
 *
 * It renders on the server too, so it covers the page from the very first
 * paint instead of flashing the content first. Click or press any key to skip.
 */

const TYPING_SPEED = 16; // ms per character
const LINE_PAUSE = 170; // ms of "thinking" between lines
const HOLD_AFTER = 280; // ms the finished terminal stays on screen

type Line = { prompt: boolean; text: string };

const Loader = () => {
  const lines: Line[] = useMemo(
    () => [
      { prompt: true, text: "whoami" },
      {
        prompt: false,
        text: `${constant.personalDetails.firstName} ${constant.personalDetails.lastName} — Software Engineer`,
      },
      { prompt: true, text: "./launch --portfolio" },
    ],
    []
  );

  const totalChars = useMemo(
    () => lines.reduce((sum, line) => sum + line.text.length, 0),
    [lines]
  );

  const [typed, setTyped] = useState(0);
  const [finished, setFinished] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const wait = useCallback((ms: number) => {
    return new Promise<void>((resolve) => {
      timers.current.push(setTimeout(resolve, ms));
    });
  }, []);

  const skip = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setTyped(totalChars);
    setFinished(true);
  }, [totalChars]);

  useEffect(() => {
    document.body.classList.add("is-loading");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let cancelled = false;

    const run = async () => {
      if (reduceMotion) {
        setTyped(totalChars);
        await wait(400);
      } else {
        let count = 0;
        for (const line of lines) {
          for (let i = 0; i < line.text.length; i++) {
            if (cancelled) return;
            count += 1;
            setTyped(count);
            await wait(TYPING_SPEED);
          }
          await wait(LINE_PAUSE);
        }
        await wait(HOLD_AFTER);
      }
      if (cancelled) return;
      setFinished(true);
    };

    run();

    return () => {
      cancelled = true;
      timers.current.forEach(clearTimeout);
      timers.current = [];
      document.body.classList.remove("is-loading");
    };
  }, [lines, totalChars, wait]);

  // Any keypress skips the intro.
  useEffect(() => {
    if (finished) return;
    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, [finished, skip]);

  // How many characters of each line are visible right now.
  let remaining = typed;
  const revealed = lines.map((line) => {
    const shown = Math.max(0, Math.min(line.text.length, remaining));
    remaining -= line.text.length;
    return { ...line, shown };
  });

  const activeIndex = revealed.findIndex((line) => line.shown < line.text.length);
  const progress = totalChars === 0 ? 1 : typed / totalChars;

  const handleExit = () => {
    document.body.classList.remove("is-loading");
  };

  return (
    <AnimatePresence onExitComplete={handleExit}>
      {!finished && (
        <motion.div
          key="loader"
          id="boot-loader"
          onClick={skip}
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-[#08090b] px-6"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* faint grid so the void has some texture */}
          <div className="pointer-events-none absolute inset-0 bg-dot-blue-300/[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-[0_30px_80px_-40px_rgba(96,165,250,0.5)] backdrop-blur-sm"
          >
            {/* title bar */}
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-2 font-mono text-xs text-subtle">
                {constant.personalDetails.firstName.toLowerCase()}@portfolio — zsh
              </span>
            </div>

            {/* terminal body */}
            <div className="min-h-[120px] space-y-1.5 px-4 py-5 font-mono text-[13px] leading-relaxed sm:text-sm">
              {revealed.map((line, index) => {
                if (line.shown === 0 && index !== activeIndex) return null;
                return (
                  <div key={index} className="flex gap-2">
                    {line.prompt && (
                      <span className="shrink-0 text-accent">$</span>
                    )}
                    <span className={line.prompt ? "text-gray-200" : "text-gray-400"}>
                      {line.text.slice(0, line.shown)}
                      {index === activeIndex && (
                        <span className="ml-0.5 inline-block h-[1em] w-[7px] translate-y-[2px] animate-blink bg-accent" />
                      )}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* progress */}
            <div className="px-4 pb-4">
              <div className="h-px w-full overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent/40 via-accent to-accent-soft"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress }}
                  style={{ originX: 0 }}
                  transition={{ ease: "linear", duration: 0.2 }}
                />
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                <span>building</span>
                <span>{Math.round(progress * 100)}%</span>
              </div>
            </div>
          </motion.div>

          <p className="absolute bottom-8 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            press any key to skip
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
