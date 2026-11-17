import React, { useState, useEffect } from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import { PixelPetCursor } from "./components/PixelPetCursor";

const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved !== null ? saved === "dark" : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      isDark ? "bg-black text-zinc-100" : "bg-[#fcfcfd] text-zinc-900"
    }`}>
      {/* Interactive Pixel Pet Companion / Micro Tracker */}
      <PixelPetCursor />

      {/* Fixed Navigation with Theme Toggle */}
      <Navigation
        onOpenResume={() => setIsResumeOpen(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} isDark={isDark} />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;