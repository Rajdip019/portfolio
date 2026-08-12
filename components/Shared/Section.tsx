import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  index: string;
  title: string;
  href?: string;
  linkLabel?: string;
  children: React.ReactNode;
}

/**
 * Editorial two-column section: the label stays pinned in the left rail while
 * its content scrolls past on the right. Stacks on mobile.
 */
const Section: React.FC<Props> = ({
  index,
  title,
  href,
  linkLabel = "View all",
  children,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid gap-8 border-t border-white/[0.06] py-16 md:grid-cols-[200px_1fr] md:gap-16 md:py-24"
    >
      <div className="md:sticky md:top-28 md:h-fit">
        <div className="flex items-baseline gap-3 md:flex-col md:gap-2">
          <span className="font-mono text-xs text-accent/70">{index}</span>
          <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            {title}
          </h2>
        </div>
        {href && (
          <Link
            href={href}
            className="group mt-3 hidden items-center gap-1.5 font-mono text-xs text-gray-600 transition-colors hover:text-accent md:inline-flex"
          >
            {linkLabel}
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        )}
      </div>

      <div className="min-w-0">
        {children}
        {href && (
          <Link
            href={href}
            className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-gray-600 transition-colors hover:text-accent md:hidden"
          >
            {linkLabel} <span>→</span>
          </Link>
        )}
      </div>
    </motion.section>
  );
};

export default Section;
