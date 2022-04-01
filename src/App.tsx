import Hero from "./views/Hero";
import Nav from "./components/Nav";
import Skills from "./views/Skills";
import Section from "./components/Section";


function App() {


  return (
    <>
      <Nav />
      <Hero />

      <main className="bg-white flex flex-col">
        <Skills />
        <Section className="bg-burg">
          start
          <div className="h-96">
          </div>
          <div className="h-96">
          </div>
          <div className="h-96">
          </div>
          <div className="h-96">
          </div>
        
        </Section>
       
      </main>

    </>
  );
}

export default App;
