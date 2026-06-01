import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DotGrid from "./components/DotGrid";
import Navbar from "./components/Navbar";
import Awards from "./sections/Awards";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Hero from "./sections/Hero";
import WorkExperience from "./sections/WorkExperience";
import "./styles/App.css";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = gsap.utils.toArray<Element>('.fade-in-section');
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
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

      {/* Content */}
      <Navbar />
      <Hero />
      <WorkExperience />
      <Education />
      <Awards />
      <Contact />
    </div>
  );
}

export default App;
