import { motion } from "framer-motion";
import SkillBlock from "../../components/SkillBlock";
import { SkillsData } from "../../data/SkillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      data-testid="skills-section"
      className="relative bg-surface text-ink border-t-2 border-line"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="section-label">{"// 02 — Stack"}</p>
            <motion.h2
              id="skills-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="font-display font-black uppercase tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]"
            >
              Tools of the <span className="text-primary">trade</span>.
            </motion.h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted max-w-xs">
            {"// Ordered by proficiency. Hover a card for the full list."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
          {SkillsData.map((data, i) => {
            // Tetris-style span pattern
            const spanMap = [
              "lg:col-span-5 lg:row-span-2",
              "lg:col-span-4",
              "lg:col-span-3",
              "lg:col-span-4",
              "lg:col-span-4",
              "lg:col-span-8",
            ];
            return (
              <SkillBlock
                key={`skill-${data.title}`}
                index={i}
                className={spanMap[i % spanMap.length]}
                {...data}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
