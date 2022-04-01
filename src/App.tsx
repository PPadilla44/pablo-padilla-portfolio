import Hero from "./views/Hero";
import Nav from "./components/Nav";
import Skills from "./views/Skills";
import Section from "./components/Section";


function App() {


  return (
    <>
      <Nav />
      <Hero />

      <main className="bg-white gap-9 flex flex-col">
        <Skills />
        <Section>
          <div className="h-96">
            ds
          </div>
        </Section>
      </main>

    </>
  );
}

export default App;
