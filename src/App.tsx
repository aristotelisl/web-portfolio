import DotGrid from "./components/DotGrid";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import WorkExperience from "./sections/WorkExperience";
import "./styles/App.css";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10">
        <DotGrid
    dotSize={4}
    gap={20}
    baseColor="#271e37"
    activeColor="#00aaff"
    proximity={100}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
      </div>

      {/* Foreground content */}
      <Navbar />
      <Hero />
      <WorkExperience/>
      <Projects/>
    </div>
  );
}

export default App;
