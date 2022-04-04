import Hero from "./views/Hero";
import Nav from "./components/Nav";
import Skills from "./views/Skills";
import Section from "./components/Section";
import Projects from "./views/Projects";


function App() {


  return (
    <>
      <Nav />
      <Hero />

      <main className="bg-white flex flex-col">
        <Skills />
        
        <Projects />

        <Section>
          <div className="h-96 w-full text-center">
            CONTEXT
          </div>
          <div className="h-96 w-full text-center">
            CONTEXT
          </div>
          <div className="h-96 w-full text-center">
            CONTEXT
          </div>


        </Section>

      </main>

    </>
  );
}

export default App;
