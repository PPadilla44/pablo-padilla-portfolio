import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav transparent={true} />

      <main className="bg-60-light w-screen h-screen overflow-hidden">

        <section className="bg-red-300 w-full h-5/6 bg-hero bg-no-repeat bg-[length:125%] 2xl:bg-[length:110%] bg-left">
        </section>

      </main>
    </div>
  );
}

export default App;
