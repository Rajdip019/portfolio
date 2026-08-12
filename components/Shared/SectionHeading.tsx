import Link from "next/link";
import React from "react";

interface Props {
  /** Mono kicker above the title, e.g. "01" or "Archive" */
  index?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}

/** Page-level title: mono kicker, restrained heading, fading hairline. */
const SectionHeading: React.FC<Props> = ({
  index,
  title,
  description,
  href,
  linkLabel = "View all",
}) => {
  return (
    <div className="mb-10">
      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0">
          {index && (
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent/70">
              {index}
            </span>
          )}
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-50">
            {title}
          </h1>
        </div>
        {href && (
          <Link
            href={href}
            className="group flex shrink-0 items-center gap-1.5 font-mono text-xs text-gray-600 transition-colors hover:text-accent"
          >
            {linkLabel}
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        )}
      </div>

      {description && (
        <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">{description}</p>
      )}

      <div className="hairline mt-8" />
    </div>
  );
};

export default SectionHeading;
