import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";

type ImageProps = {
  path: string;
  name: string;
  className?: string;
  /** Object-fit behaviour. "cover" = landscape screenshot, "contain" = phone mockup, "brand" = logo poster. */
  fit?: "cover" | "contain" | "brand";
  /** Override aspect ratio of the image box. Defaults per fit mode. */
  aspect?: string;
  /** For fit="brand": alternate image to show in dark mode (theme-swap). */
  darkPath?: string;
};

export interface ProjectBlockProps {
  reversed?: boolean;
  description: string;
  title: string;
  links: string[];
  techs: string[];
  mainImage: ImageProps;
  secondaryImage?: ImageProps;
  brandLogo?: string;
  brandAccent?: string;
  tagline?: string;
  /** Short copy shown under the logo in fit="brand" mode. */
  brandLine?: string;
  index?: number;
}

type PhoneProps = { src: string; alt: string; compact?: boolean };

const PhoneMockup: React.FC<PhoneProps> = ({ src, alt, compact = false }) => (
  <div
    className={`relative bg-black border-2 border-line shadow-hard-lg ${
      compact ? "rounded-[1.4rem] p-1.5" : "rounded-[1.8rem] sm:rounded-[2.2rem] p-1.5 sm:p-2"
    }`}
  >
    <div
      className={`relative overflow-hidden bg-black ${
        compact ? "rounded-[1rem]" : "rounded-[1.4rem] sm:rounded-[1.7rem]"
      }`}
      style={{
        aspectRatio: "9/19.5",
        width: compact ? "min(26vw, 140px)" : "min(38vw, 220px)",
      }}
    >
      <img
        src={src}
        alt={alt}
        width="220"
        height="476"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <span
        aria-hidden="true"
        className={`absolute left-1/2 -translate-x-1/2 bg-black rounded-full ${
          compact ? "top-1 w-8 h-2.5" : "top-1.5 sm:top-2 w-12 sm:w-16 h-3 sm:h-4"
        }`}
      />
    </div>
    {!compact && (
      <>
        <span aria-hidden="true" className="absolute -left-[3px] top-10 sm:top-14 w-[3px] h-8 sm:h-10 bg-black rounded-l-sm" />
        <span aria-hidden="true" className="absolute -right-[3px] top-16 sm:top-20 w-[3px] h-10 sm:h-14 bg-black rounded-r-sm" />
      </>
    )}
  </div>
);

type LinkMeta = {
  url: string;
  label: string;
  icon: string;
  primary: boolean;
  ariaVerb: string;
};

const describeLink = (url: string): LinkMeta => {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (/github\.com$/.test(host))
      return { url, label: "Repo", icon: "fa6-brands:github", primary: false, ariaVerb: "View source on GitHub" };
    if (/apps\.apple\.com$/.test(host))
      return { url, label: "App Store", icon: "fa6-brands:app-store-ios", primary: true, ariaVerb: "Open on App Store" };
    if (/play\.google\.com$/.test(host))
      return { url, label: "Play Store", icon: "fa6-brands:google-play", primary: true, ariaVerb: "Open on Play Store" };
    return { url, label: host, icon: "ph:globe-bold", primary: true, ariaVerb: "Visit" };
  } catch {
    return { url, label: "Link", icon: "", primary: false, ariaVerb: "Open" };
  }
};

const ProjectBlock: React.FC<ProjectBlockProps> = ({
  reversed = false,
  mainImage,
  secondaryImage,
  description,
  links,
  techs,
  title,
  brandLogo,
  brandAccent,
  tagline,
  brandLine,
  index = 0,
}) => {
  const isPhone = mainImage.fit === "contain";
  const isBrand = mainImage.fit === "brand";
  const hasSecondaryPhone = isPhone && !!secondaryImage;

  const accentBgClass =
    index % 3 === 0 ? "bg-primary" : index % 3 === 1 ? "bg-vivid" : "bg-sec";
  const accentTint =
    index % 3 === 0 ? "bg-primary/10" : index % 3 === 1 ? "bg-vivid/10" : "bg-sec/10";

  const buttons = links.map(describeLink);
  const orderedButtons = [
    ...buttons.filter((b) => b.primary),
    ...buttons.filter((b) => !b.primary),
  ];

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
      <div className={`col-span-12 md:col-span-7 relative ${reversed ? "md:order-2" : ""}`}>
        {/* Accent backplate */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 translate-x-4 translate-y-4 border-2 border-line ${
            brandAccent ? "" : accentBgClass
          }`}
          style={brandAccent ? { backgroundColor: brandAccent } : undefined}
        />

        <div
          className={`relative border-2 border-line shadow-hard bg-surface overflow-hidden group-hover:shadow-hard-hover group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all duration-300 ${
            isPhone
              ? "aspect-[4/5] sm:aspect-[16/11] md:aspect-[16/10]"
              : isBrand
              ? "aspect-[4/5] sm:aspect-[16/11] md:aspect-[16/10]"
              : "aspect-[16/10]"
          }`}
          style={mainImage.aspect ? { aspectRatio: mainImage.aspect } : undefined}
        >
          {isBrand ? (
            // Brand poster treatment — centered logo on tinted backplate with stickers
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 overflow-hidden"
              style={
                brandAccent
                  ? { backgroundColor: `${brandAccent}1F` }
                  : undefined
              }
            >
              <div className="noise" aria-hidden="true" />
              <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />

              {/* Theme-aware logo (dark path visible in dark mode, default path in light) */}
              <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6 max-w-full">
                {mainImage.darkPath ? (
                  <>
                    <img
                      src={mainImage.path}
                      alt={mainImage.name}
                      width="500"
                      height="150"
                      loading="lazy"
                      decoding="async"
                      className="block dark:hidden max-w-[min(80%,_420px)] h-auto object-contain"
                    />
                    <img
                      src={mainImage.darkPath}
                      alt=""
                      aria-hidden="true"
                      width="500"
                      height="150"
                      loading="lazy"
                      decoding="async"
                      className="hidden dark:block max-w-[min(80%,_420px)] h-auto object-contain"
                    />
                  </>
                ) : (
                  <img
                    src={mainImage.path}
                    alt={mainImage.name}
                    width="500"
                    height="150"
                    loading="lazy"
                    decoding="async"
                    className="max-w-[min(80%,_420px)] h-auto object-contain"
                  />
                )}

                {brandLine && (
                  <p
                    className="text-center font-display italic text-lg sm:text-xl md:text-2xl leading-snug max-w-md"
                    style={brandAccent ? { color: brandAccent } : undefined}
                  >
                    {brandLine}
                  </p>
                )}
              </div>

              {/* Stickers */}
              <span
                aria-hidden="true"
                className="hidden sm:inline-flex absolute top-4 right-4 md:top-6 md:right-6 tag-mono rotate-[5deg] bg-ink text-bg border-line whitespace-nowrap"
              >
                {tagline ?? "Web · Live"}
              </span>
              <span
                aria-hidden="true"
                className="hidden sm:inline-flex absolute bottom-4 left-4 md:bottom-6 md:left-6 tag-mono rotate-[-5deg] bg-surface text-ink border-line whitespace-nowrap"
              >
                Shipping now
              </span>
            </div>
          ) : isPhone ? (
            <div
              className={`absolute inset-0 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-hidden ${
                brandAccent ? "" : accentTint
              }`}
              style={brandAccent ? { backgroundColor: `${brandAccent}1A` } : undefined}
            >
              <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />

              {brandLogo ? (
                <span
                  aria-hidden="true"
                  className="hidden sm:flex absolute top-3 left-3 md:top-6 md:left-6 w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-line shadow-hard-sm bg-surface items-center justify-center overflow-hidden rotate-[-6deg]"
                >
                  <img src={brandLogo} alt="" width="64" height="64" loading="lazy" className="w-full h-full object-contain" />
                </span>
              ) : (
                <span aria-hidden="true" className="hidden sm:inline-flex absolute top-3 left-3 md:top-6 md:left-6 tag-mono rotate-[-6deg] bg-ink text-bg border-line whitespace-nowrap">
                  iOS · React Native
                </span>
              )}

              <span aria-hidden="true" className="hidden sm:inline-flex absolute bottom-3 right-3 md:bottom-6 md:right-6 tag-mono rotate-[5deg] bg-primary text-primary-fg border-line whitespace-nowrap">
                {tagline ?? "Mobile · Native"}
              </span>

              <div className="relative flex items-center justify-center">
                {hasSecondaryPhone && secondaryImage && (
                  <div
                    className="absolute transition-transform duration-500 rotate-[10deg] translate-x-[65%] translate-y-[10%] group-hover:translate-x-[80%] group-hover:rotate-[14deg]"
                    style={{ zIndex: 1 }}
                  >
                    <PhoneMockup src={secondaryImage.path} alt={secondaryImage.name} compact />
                  </div>
                )}
                <div
                  className="relative transition-transform duration-500 -rotate-3 group-hover:rotate-0 group-hover:scale-[1.03]"
                  style={{ zIndex: 2 }}
                >
                  <PhoneMockup src={mainImage.path} alt={mainImage.name} />
                </div>
              </div>
            </div>
          ) : (
            <>
              <img
                src={mainImage.path}
                alt={mainImage.name}
                width="1000"
                height="625"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
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
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
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
            </>
          )}
        </div>
      </div>

      {/* Text block */}
      <div className={`col-span-12 md:col-span-5 flex flex-col gap-5 ${reversed ? "md:order-1 md:text-right md:items-end" : ""}`}>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
          [{String(index + 1).padStart(2, "0")} / {"{project}"}]
        </span>

        <div className={`flex items-center gap-3 ${reversed ? "md:flex-row-reverse" : ""}`}>
          {brandLogo && (
            <span
              aria-hidden="true"
              className="inline-flex w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-line shadow-hard-sm bg-surface items-center justify-center overflow-hidden shrink-0"
            >
              <img src={brandLogo} alt="" width="56" height="56" loading="lazy" className="w-full h-full object-contain" />
            </span>
          )}
          <h3 className="font-display font-black uppercase tracking-tighter text-4xl sm:text-5xl md:text-6xl leading-[0.9]">
            {title}
          </h3>
        </div>

        <p className="text-sm md:text-base leading-relaxed text-ink/90 max-w-prose">{description}</p>

        <ul className={`flex flex-wrap gap-1.5 ${reversed ? "md:justify-end" : ""}`} aria-label="Technologies used">
          {techs.map((t) => (
            <li key={`tech-${title}-${t}`}>
              <span className="tag-mono">
                <Icon icon={t} width={12} height={12} aria-hidden="true" />
                <span className="sr-only">{t}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className={`flex flex-wrap gap-3 items-center pt-2 ${reversed ? "md:justify-end" : ""}`}>
          {orderedButtons.map((b, i) => (
            <a
              key={`btn-${b.url}`}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${b.ariaVerb} — ${title} (opens in a new tab)`}
              data-testid={b.primary ? (i === 0 ? "project-link-live" : undefined) : "project-link-github"}
              className={`brutal-btn ${b.primary ? "brutal-btn-primary" : ""}`}
            >
              {b.icon && <Icon icon={b.icon} width={14} height={14} aria-hidden="true" />}
              {b.label}
              {b.primary && (
                <span className="text-xl leading-none" aria-hidden="true">↗</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectBlock;
