import { motion } from "framer-motion";
import EducationBlock from "../../components/EducationBlock";
import { EducationData } from "../../data/EducationData";

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      data-testid="education-section"
      className="relative bg-surface border-t-2 border-line"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <p className="section-label">{"// 04 — School of hard-won bugs"}</p>
        <motion.h2
          id="education-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-display font-black uppercase tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-16"
        >
          Where I <span className="text-primary">learned</span>.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {EducationData.map((data, i) => (
            <EducationBlock
              key={`edu-${data.title}`}
              index={i}
              {...data}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
