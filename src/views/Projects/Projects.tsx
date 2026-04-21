import ProjectBlock from "../../components/ProjectBlock";
import Section from "../../components/Section";
import { ProjectData } from "../../data/ProjectData";

const Projects = () => {
  return (
    <Section name="projects" className="flex py-20 bg-white">
      <h2 className="text-center md:text-left text-black mb-20">Projects</h2>
      <div className="flex gap-28 flex-col">
        {ProjectData.map((p, i) => (
          <ProjectBlock key={`project-${p.title}`} {...p} reversed={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
