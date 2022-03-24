import Hero from "./components/Hero";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="w-full h-full bg-60-light">

      <Hero />



      <main className="h-full w-full -mt-20">
        <Nav/>

        <div className="bg-red-300 h-screen">
          dsads
        </div>
        <div className="h-screen bg-white"></div>
      </main>

    </div>
  );
}

export default App;
