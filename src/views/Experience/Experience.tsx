import ExperienceBlock from "../../components/ExperienceBlock";
import Section from "../../components/Section";
import { ExperienceData } from "../../data/ExperienceData";

const Experience = () => {
  return (
    <Section name="experience" className="gap-44 flex py-20 bg-white">
      <h2 className="text-center md:text-left text-black mb-20">Experience</h2>
      <div className="flex gap-28 flex-col">
        {ExperienceData.map((data) => (
          <ExperienceBlock key={`exp-${data.title}-${data.subTitle}`} {...data} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
