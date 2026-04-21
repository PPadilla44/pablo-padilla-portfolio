import { motion } from "framer-motion";
import React from "react";

export interface EducationBlockProps {
  title: string;
  descriptions: string[];
  location: string;
  duration: string;
  image: string;
  index?: number;
}

// A simple "barcode" made of alternating thin/thick rules
const Barcode = () => (
  <div className="flex items-end gap-[2px] h-8" aria-hidden="true">
    {[2, 1, 3, 1, 2, 1, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 2, 1, 3, 1, 2, 1, 2].map((w, i) => (
      <span
        key={i}
        className="inline-block bg-ink"
        style={{ width: `${w}px`, height: "100%" }}
      />
    ))}
  </div>
);

const toTicketId = (title: string) =>
  `education-ticket-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

const EducationBlock: React.FC<EducationBlockProps> = ({
  title,
  descriptions,
  location,
  duration,
  image,
  index = 0,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ rotate: index % 2 === 0 ? -0.8 : 0.8, y: -4 }}
      data-testid={toTicketId(title)}
      className="ticket animate-float-y"
      style={{ animationDelay: `${index * 0.6}s` }}
    >
      {/* Perforation notches */}
      <span
        aria-hidden="true"
        className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-bg border-2 border-line rounded-full"
      />
      <span
        aria-hidden="true"
        className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-bg border-2 border-line rounded-full"
      />

      <div className="flex items-start justify-between gap-4 mb-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          Ticket No. {String(index + 1).padStart(4, "0")}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
          ★ admit one ★
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto] gap-5 items-start">
        <div className="min-w-0">
          <h3 className="font-display font-black uppercase tracking-tighter text-3xl md:text-4xl leading-[0.9] mb-3">
            {title}
          </h3>

          <dl className="flex flex-col gap-1.5 font-mono text-xs md:text-sm">
            {descriptions.map((d, i) => (
              <div key={`${title}-d-${i}`} className="flex gap-2">
                <dt className="text-muted shrink-0">[{String(i + 1).padStart(2, "0")}]</dt>
                <dd>{d}</dd>
              </div>
            ))}
            <div className="flex gap-2 mt-2">
              <dt className="text-muted shrink-0 uppercase tracking-[0.2em]">Location</dt>
              <dd>{location}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-muted shrink-0 uppercase tracking-[0.2em]">When</dt>
              <dd>{duration}</dd>
            </div>
          </dl>
        </div>

        <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-line bg-bg flex items-center justify-center p-2 shrink-0">
          <img
            src={image}
            alt={title}
            width="96"
            height="96"
            loading="lazy"
            decoding="async"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Dashed divider */}
      <div
        aria-hidden="true"
        className="mt-6 border-t-2 border-dashed border-line pt-4 flex items-end justify-between"
      >
        <Barcode />
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          Pablo Padilla · {new Date().getFullYear()}
        </span>
      </div>
    </motion.article>
  );
};

export default EducationBlock;
