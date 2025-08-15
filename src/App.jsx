import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AboutSection from './components/AboutSection';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  useEffect(() => {
    // Refgister ScrollTrigger Plugin
    gsap.registerPlugin(ScrollTrigger);

    // Refresh ScrollTrigger when the page is fully loaded
    ScrollTrigger.refresh();

    // Clean up ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <CustomCursor />
      <AboutSection />
      <ProjectsSection />
    </>
  );
}
