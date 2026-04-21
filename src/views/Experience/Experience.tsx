import { motion } from "framer-motion";
import ExperienceBlock from "../../components/ExperienceBlock";
import { ExperienceData } from "../../data/ExperienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      data-testid="experience-section"
      className="relative border-t-2 border-line bg-bg"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-10">
        <p className="section-label">{"// 01 — Experience"}</p>
        <motion.h2
          id="experience-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-display font-black uppercase tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]"
        >
          Where I've <span className="text-primary">shipped</span>.
        </motion.h2>
      </div>

      <div className="border-t-2 border-line">
        {ExperienceData.map((data, i) => (
          <ExperienceBlock
            key={`exp-${data.title}-${data.subTitle}`}
            index={i}
            {...data}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
