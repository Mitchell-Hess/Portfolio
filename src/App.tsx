import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import DynamicGradientBackground from "./components/DynamicGradientBackground";

function App() {
  return (
    <div id="top" className="w-full min-h-screen overflow-x-hidden cursor-none flex flex-col">
      <CustomCursor />
      <DynamicGradientBackground />
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Home />
          <About />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
