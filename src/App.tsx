import { useRef, useState, useEffect } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";


function App() {

  const hiddenRef = useRef<HTMLLegendElement>(null);
  const [color, setColor] = useState(false);

  useEffect(() => {

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);

  }, []);

  const scrollHandler = () => {

    if (hiddenRef.current) {

      if (window.scrollY >= hiddenRef.current.offsetTop) {
        setColor(true)
      } else {
        setColor(false)
      }
    }

  }

  return (
    <div className="w-full h-full bg-60-light">
      <Nav color={color} />

      <Hero />

      <div ref={hiddenRef} className="bg-30-light p-20 gap-9 ">

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

      </div>

    </div>
  );
}

export default App;
