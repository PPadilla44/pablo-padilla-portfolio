import Hero from "./components/Hero";
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";
import Section from "./components/Section";


function App() {

  return (
    <>
      <Nav />
      <NavMobile />

      <Hero />

      <main className="bg-60-light gap-9 flex flex-col">

        <Section>
          <h1>Elemenmt</h1>
        </Section>
        <Section>
          <h1>Elemenmt</h1>
        </Section>
        <Section>
          <h1>Elemenmt</h1>
        </Section>
        <Section>
          <h1>Elemenmt</h1>
        </Section>
        <Section>
          <h1>Elemenmt</h1>
        </Section>
        
      </main>

    </>
  );
}

export default App;
