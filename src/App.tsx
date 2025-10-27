import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="top" className="w-screen min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
