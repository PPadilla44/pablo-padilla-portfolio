import { motion } from "framer-motion";
import React from "react";

export interface ExperienceBlockProps {
  title: string;
  subTitle: string;
  description: string;
  location: string;
  duration: string;
  image?: string;
  textAsImage?: string[];
  index?: number;
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({
  title,
  subTitle,
  description,
  location,
  duration,
  image,
  textAsImage,
  index = 0,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      data-testid={`experience-item-${index}`}
      className="group relative border-b-2 border-line cursor-default transition-colors duration-300 hover:bg-vivid"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-14 grid grid-cols-12 gap-6 items-center transition-colors duration-300 group-hover:text-black">
        {/* Index + dates */}
        <div className="col-span-12 md:col-span-3 flex flex-col gap-1">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted group-hover:text-black/60">
            [{String(index + 1).padStart(2, "0")}]
          </span>
          <span className="font-mono text-sm md:text-base">{duration}</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted group-hover:text-black/60">
            {location}
          </span>
        </div>

        {/* Title + subtitle + description */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-3">
          <h3 className="font-display font-black uppercase tracking-tighter text-3xl sm:text-4xl md:text-5xl leading-[0.95]">
            {title}
          </h3>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-primary group-hover:text-black">
            @ {subTitle}
          </p>
          <p className="text-sm md:text-base leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        {/* Logo box */}
        <div className="col-span-12 md:col-span-2 flex md:justify-end">
          <div
            data-testid="experience-company-logo"
            className="w-24 h-24 md:w-28 md:h-28 bg-[#F4F4F0] text-black border-2 border-line shadow-hard-sm flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:rotate-[6deg] group-hover:shadow-hard"
          >
            {textAsImage ? (
              <span className="font-display font-black text-xl leading-none text-center text-black p-2">
                {textAsImage[0]}
                <span className="block text-[10px] font-mono uppercase mt-1">
                  {textAsImage[1]}
                </span>
              </span>
            ) : (
              <img
                src={image}
                alt={subTitle}
                width="112"
                height="112"
                loading="lazy"
                decoding="async"
                className="max-w-[80%] max-h-[80%] object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ExperienceBlock;
