import Hero from "./views/Hero";
import Nav from "./components/Nav";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Education from "./views/Education";
import Experience from "./views/Experience";
import Contact from "./views/Contact";


function App() {


  return (
    <>
      <Nav />
      
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Contact />

    </>
  );
}

export default App;
