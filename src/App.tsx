import Nav from "./components/Nav";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./views/Hero";
import Experience from "./views/Experience";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Education from "./views/Education";

function App() {
  return (
    <>
      <a href="#main" className="skip-link" data-testid="skip-link">
        Skip to content
      </a>
      <ThemeToggle />
      <main id="main" className="bg-bg text-ink">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <footer
          className="border-t-2 border-line pt-10 pb-36 md:pb-40 text-center font-mono text-xs uppercase tracking-[0.3em] text-muted"
          data-testid="site-footer"
        >
          Built with React · TypeScript · Tailwind · Framer Motion
          <span className="mx-2 text-primary">{"//"}</span>
          © {new Date().getFullYear()} Pablo Padilla
        </footer>
      </main>
      <Nav />
    </>
  );
}

export default App;
