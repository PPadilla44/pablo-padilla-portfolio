import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";

type ImageProps = {
  path: string;
  name: string;
  className?: string;
  /** Object-fit behaviour. Defaults to "cover" (landscape shots). Use "contain" for phone/tall screenshots. */
  fit?: "cover" | "contain";
  /** Override aspect ratio of the image box. Defaults to "16/10". */
  aspect?: string;
};

export interface ProjectBlockProps {
  reversed?: boolean;
  description: string;
  title: string;
  links: string[];
  techs: string[];
  mainImage: ImageProps;
  secondaryImage?: ImageProps;
  index?: number;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  reversed = false,
  mainImage,
  secondaryImage,
  description,
  links,
  techs,
  title,
  index = 0,
}) => {
  const hasLive = links.length > 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.6 }}
      data-testid={`project-card-${index}`}
      className="group relative grid grid-cols-12 gap-6 md:gap-10 items-center"
    >
      {/* Image block */}
      <div
        className={`col-span-12 md:col-span-7 relative ${
          reversed ? "md:order-2" : ""
        }`}
      >
        {/* Accent backplate */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 translate-x-4 translate-y-4 ${
            index % 3 === 0
              ? "bg-primary"
              : index % 3 === 1
              ? "bg-vivid"
              : "bg-sec"
          } border-2 border-line`}
        />

        <div
          className={`relative border-2 border-line shadow-hard bg-surface overflow-hidden group-hover:shadow-hard-hover group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all duration-300 ${
            mainImage.fit === "contain"
              ? "aspect-[4/5] sm:aspect-[16/11] md:aspect-[16/10]"
              : "aspect-[16/10]"
          }`}
          style={mainImage.aspect ? { aspectRatio: mainImage.aspect } : undefined}
        >
          {mainImage.fit === "contain" ? (
            // Phone mockup treatment — bezel + dynamic island + decorative stickers
            <div
              className={`absolute inset-0 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-hidden ${
                index % 3 === 0
                  ? "bg-primary/10"
                  : index % 3 === 1
                  ? "bg-vivid/10"
                  : "bg-sec/10"
              }`}
            >
              {/* Decorative grid backdrop */}
              <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />

              {/* Sticker: platform — hidden on very small screens */}
              <span
                aria-hidden="true"
                className="hidden sm:inline-flex absolute top-3 left-3 md:top-6 md:left-6 tag-mono rotate-[-6deg] bg-ink text-bg border-line whitespace-nowrap"
              >
                iOS · React Native
              </span>

              {/* Sticker: emphasis — hidden on very small screens */}
              <span
                aria-hidden="true"
                className="hidden sm:inline-flex absolute bottom-3 right-3 md:bottom-6 md:right-6 tag-mono rotate-[5deg] bg-primary text-primary-fg border-line whitespace-nowrap"
              >
                Mobile · Native
              </span>

              {/* The phone */}
              <div className="relative transition-transform duration-500 -rotate-3 group-hover:rotate-0 group-hover:scale-[1.03]">
                <div className="relative bg-black rounded-[1.8rem] sm:rounded-[2.2rem] p-1.5 sm:p-2 border-2 border-line shadow-hard-lg">
                  <div
                    className="relative rounded-[1.4rem] sm:rounded-[1.7rem] overflow-hidden bg-black"
                    style={{ aspectRatio: "9/19.5", width: "min(38vw, 220px)" }}
                  >
                    <img
                      src={mainImage.path}
                      alt={mainImage.name}
                      width="220"
                      height="476"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    {/* Dynamic island */}
                    <span
                      aria-hidden="true"
                      className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-3 sm:h-4 bg-black rounded-full"
                    />
                  </div>
                </div>
                {/* Side buttons */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[3px] top-10 sm:top-14 w-[3px] h-8 sm:h-10 bg-black rounded-l-sm"
                />
                <span
                  aria-hidden="true"
                  className="absolute -right-[3px] top-16 sm:top-20 w-[3px] h-10 sm:h-14 bg-black rounded-r-sm"
                />
              </div>
            </div>
          ) : (
            <img
              src={mainImage.path}
              alt={mainImage.name}
              width="1000"
              height="625"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          )}
          {secondaryImage && (
            <img
              src={secondaryImage.path}
              alt={secondaryImage.name}
              width="120"
              height="120"
              loading="lazy"
              decoding="async"
              className={`absolute ${reversed ? "right-3" : "left-3"} bottom-3 w-20 md:w-24 border-2 border-line shadow-hard-sm bg-surface`}
            />
          )}

          {/* Diagonal marquee ribbon on hover */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center"
          >
            <div className="w-full bg-primary/95 text-primary-fg py-2 border-y-2 border-line overflow-hidden rotate-[-6deg]">
              <div className="flex gap-8 animate-marquee whitespace-nowrap font-display font-black uppercase tracking-tighter text-2xl">
                {[...Array(8)].map((_, k) => (
                  <span key={k} className="inline-flex items-center gap-3">
                    {title}
                    <span aria-hidden="true">★</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text block */}
      <div
        className={`col-span-12 md:col-span-5 flex flex-col gap-5 ${
          reversed ? "md:order-1 md:text-right md:items-end" : ""
        }`}
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          [{String(index + 1).padStart(2, "0")} / {"{project}"}]
        </span>

        <h3 className="font-display font-black uppercase tracking-tighter text-4xl sm:text-5xl md:text-6xl leading-[0.9]">
          {title}
        </h3>

        <p className="text-sm md:text-base leading-relaxed text-ink/90 max-w-prose">
          {description}
        </p>

        <ul
          className={`flex flex-wrap gap-1.5 ${reversed ? "md:justify-end" : ""}`}
          aria-label="Technologies used"
        >
          {techs.map((t) => (
            <li key={`tech-${title}-${t}`}>
              <span className="tag-mono">
                <Icon icon={t} width={12} height={12} aria-hidden="true" />
                <span className="sr-only">{t}</span>
              </span>
            </li>
          ))}
        </ul>

        <div
          className={`flex flex-wrap gap-3 items-center pt-2 ${
            reversed ? "md:justify-end" : ""
          }`}
        >
          <a
            href={links[0]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source on GitHub (opens in a new tab)`}
            data-testid="project-link-github"
            className="brutal-btn group/link"
          >
            <Icon icon="fa6-brands:github" width={14} height={14} aria-hidden="true" />
            Repo
          </a>
          {hasLive && (
            <a
              href={links[1]}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} live application (opens in a new tab)`}
              data-testid="project-link-live"
              className="brutal-btn brutal-btn-primary"
            >
              Live
              <span className="text-xl leading-none" aria-hidden="true">
                ↗
              </span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectBlock;
