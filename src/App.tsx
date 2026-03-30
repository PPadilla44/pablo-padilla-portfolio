import Hero from "./views/Hero";
import Nav from "./components/Nav";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Education from "./views/Education";
import Experience from "./views/Experience";


function App() {


  return (
    <>
      <Nav />
      
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
    </>
  );
}

export default App;
