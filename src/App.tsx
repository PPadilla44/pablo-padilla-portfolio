import Hero from "./views/Hero";
import Nav from "./components/Nav";
import Skills from "./views/Skills";
import Section from "./components/Section";
import Projects from "./views/Projects";
import ProjectBlock from "./components/ProjectBlock";
import { ExperienceData } from "./data/ExperienceData";


function App() {


  return (
    <>
      <Nav />
      <Hero />

      <main className="bg-white flex flex-col">
        <Projects />
        <Skills />


        <Section className="bg-gradient-to-b from-secondary to-white py-20">
          <h2 className='text-7xl text-left font-semibold text-black'>Experience</h2>

          {
            ExperienceData.map((p, i) => (
              <ProjectBlock key={`proect-${i}`} {...p} />
            ))
          }


        </Section>

      </main>

    </>
  );
}

export default App;
