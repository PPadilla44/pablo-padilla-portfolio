import React from "react";
import EducationBlock from "../../components/EducationBlock";
import Section from "../../components/Section";
import { EducationData } from "../../data/EducationData";

const Education = () => {
  return (
    <Section name="education" className="gap-44 flex py-20 bg-blue-50">
      <button className="cursor-default w-full">
        <h1 className="text-center md:text-left text-black mb-20">Education</h1>
      </button>
      <div className="flex gap-28 flex-col h-full ">
        {EducationData.map((data, i) => (
          <EducationBlock key={`Edu-${i}`} {...data} />
        ))}
      </div>
    </Section>
  );
};

export default Education;
