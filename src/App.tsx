import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="top" className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
