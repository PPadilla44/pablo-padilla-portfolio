import Hero from "./components/Hero";
import Nav from "./components/Nav";


function App() {
  return (
    <div className="w-full h-full bg-60-light">

      <Hero />



      <main className="h-full w-full -mt-20">
        <Nav/>

        <section className="flex items-center justify-center mb-20">
          <div className="max-w-7xl w-full ">
            <div className="shadow-around w-80 h-80 ">

              <h1 className="text-8xl font-bold">MORE TEXT HERE</h1>
            </div>
          </div>

        </section>
        <section className="flex items-center justify-center mb-20">
          <div className="max-w-7xl w-full ">
            <div className="shadow-around w-80 h-80 ">

              <h1 className="text-8xl font-bold">MORE TEXT HERE</h1>
            </div>
          </div>

        </section>
        <section className="flex items-center justify-center">
          <div className="max-w-7xl w-full ">
            <div className="shadow-around w-80 h-80 ">

              <h1 className="text-8xl font-bold">MORE TEXT HERE</h1>
            </div>
          </div>

        </section>
      </main>

    </div>
  );
}

export default App;
