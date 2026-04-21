import Nav from "./components/Nav";
import Hero from "./views/Hero";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Education from "./views/Education";
import Contact from "./views/Contact";

function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}

export default App;
