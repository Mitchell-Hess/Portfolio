import Navbar from "./components/Navbar";
import ThemeDebug from "./components/ThemeDebug";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="top" className="w-screen min-h-screen bg-gray-50">
      <Navbar />
      <ThemeDebug />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
