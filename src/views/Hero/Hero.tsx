import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { useRef } from "react";
import HeroIcons from "../../components/HeroIcons";

const Hero = () => {
  const dragRef = useRef<HTMLDivElement>(null);

  return (
    <Element name="about">
      <section
        className="relative min-h-screen w-full bg-bg text-ink overflow-hidden pt-20 md:pt-28 pb-32"
        aria-labelledby="hero-title"
        data-testid="hero-section"
      >
        {/* Decorative background grid */}
        <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
        <div className="noise" aria-hidden="true" />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-12 gap-6 items-start">
          {/* Status row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="col-span-12 flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="tag-mono bg-primary text-primary-fg border-line">
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" aria-hidden="true" />
              Available for work
            </span>
            <span className="overline hidden sm:inline">
              {"// San Francisco Bay Area"}
            </span>
            <span className="overline ml-auto hidden md:inline">
              [v2026.01]
            </span>
          </motion.div>

          {/* Massive name */}
          <div className="col-span-12 lg:col-span-8 relative">
            <p
              className="section-label"
              data-testid="hero-label"
            >
              {"// Full-Stack Software Engineer"}
            </p>

            <motion.h1
              id="hero-title"
              data-testid="hero-title"
              className="font-display font-black uppercase leading-[0.85] tracking-tighter text-[20vw] md:text-[14vw] lg:text-[11vw] text-ink"
            >
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="block"
              >
                Pablo
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="block text-primary"
              >
                Padilla<span className="text-ink">.</span>
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 max-w-xl text-base md:text-lg text-muted leading-relaxed"
            >
              <span className="text-ink">I build full-stack web &amp; mobile apps</span>{" "}
              with React, TypeScript, Node, and Python, and ship them to the
              cloud so they stay up at 3am.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <HeroIcons />
              <span className="overline hidden sm:inline">
                {"<drag the cat →"}
              </span>
            </motion.div>
          </div>

          {/* Hero image + draggable cat */}
          <div
            ref={dragRef}
            className="col-span-12 lg:col-span-4 relative h-[320px] md:h-[420px] lg:h-[520px] mt-8 lg:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, rotate: -3, y: 30 }}
              animate={{ opacity: 1, rotate: -2, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute inset-4 border-2 border-line shadow-hard-lg bg-surface overflow-hidden"
              data-testid="hero-image"
            >
              <img
                src="/images/hero.png"
                alt="Pablo Padilla at his desk with a cat"
                width="640"
                height="800"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
              {/* Overlay tape corners */}
              <div
                aria-hidden="true"
                className="absolute -top-2 -left-2 w-14 h-5 bg-primary rotate-[-18deg] opacity-90"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-2 -right-2 w-16 h-5 bg-vivid rotate-[10deg] opacity-90"
              />
            </motion.div>

            {/* Draggable cat */}
            <motion.div
              drag
              dragConstraints={dragRef}
              dragElastic={0.3}
              whileDrag={{ scale: 1.1, cursor: "grabbing" }}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 260 }}
              className="absolute right-0 top-0 w-20 h-20 md:w-24 md:h-24 bg-vivid border-2 border-line shadow-hard flex items-center justify-center cursor-grab select-none z-10"
              aria-label="Draggable cat. Try me."
              data-testid="hero-cat-draggable"
              role="img"
            >
              <Icon
                icon="noto:black-cat"
                width={48}
                height={48}
                className="pointer-events-none"
                aria-hidden="true"
              />
            </motion.div>

            {/* Meta sticker */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: 1, rotate: 6 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-0 left-0 bg-surface border-2 border-line shadow-hard-sm px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em]"
              aria-hidden="true"
            >
              Working @ <span className="text-primary">Players Health</span>
            </motion.div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
