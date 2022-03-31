import Hero from "./views/Hero";
import Nav from "./components/Nav";
import Skills from "./views/Skills";


function App() {


  return (
    <>
      <Nav />
      <Hero />

      <main className="bg-white gap-9 flex flex-col">
        <Skills />



      </main>

    </>
  );
}

export default App;
