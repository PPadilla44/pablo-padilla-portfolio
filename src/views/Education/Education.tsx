import EducationBlock from "../../components/EducationBlock";
import Section from "../../components/Section";
import { EducationData } from "../../data/EducationData";

const Education = () => {
  return (
    <Section name="education" className="gap-44 flex py-20 bg-blue-50">
      <h2 className="text-center md:text-left text-black mb-20">Education</h2>
      <div className="flex gap-28 flex-col h-full">
        {EducationData.map((data) => (
          <EducationBlock key={`edu-${data.title}`} {...data} />
        ))}
      </div>
    </Section>
  );
};

export default Education;
