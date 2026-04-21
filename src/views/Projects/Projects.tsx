import { motion } from "framer-motion";
import ProjectBlock from "../../components/ProjectBlock";
import { ProjectData } from "../../data/ProjectData";

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      data-testid="projects-section"
      className="relative bg-bg border-t-2 border-line"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <p className="section-label">{"// 03 — Things I've built"}</p>
        <motion.h2
          id="projects-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-display font-black uppercase tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-16"
        >
          Selected <span className="text-primary">work</span>.
        </motion.h2>

        <div className="flex flex-col gap-24 md:gap-32">
          {ProjectData.map((p, i) => (
            <ProjectBlock
              key={`project-${p.title}`}
              index={i}
              {...p}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
