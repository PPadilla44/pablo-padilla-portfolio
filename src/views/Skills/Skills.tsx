import { motion } from "framer-motion";
import Section from "../../components/Section";
import SkillBlock from "../../components/SkillBlock";
import { SkillsData } from "../../data/SkillsData";
import { fadeIn, inViewOnce } from "../../lib/motion";

const Skills = () => {
  return (
    <Section name="skills" className="pb-20 pt-10 bg-accent">
      <h2 className="text-center md:text-left text-white">Skills</h2>
      <p className="text-center md:text-left text-white mb-20">
        Ordered by proficiency
      </p>

      <motion.div
        variants={fadeIn}
        {...inViewOnce}
        className="flex w-full items-center justify-around xl:justify-between flex-wrap gap-2"
      >
        {SkillsData.map((data) => (
          <SkillBlock
            key={`skill-${data.title}`}
            icon={data.icon}
            skills={data.skills}
            title={data.title}
            smaller={data.smaller}
          />
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;
