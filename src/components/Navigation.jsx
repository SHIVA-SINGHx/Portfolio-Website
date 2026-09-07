import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

const Navigation = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Writing", href: "#articles" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-black/85 backdrop-blur-md border-b border-zinc-900 py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#about"
          className="group flex items-center gap-2.5 text-zinc-200 hover:text-white transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-sm tracking-tight font-medium text-white group-hover:text-zinc-300 transition-colors">
            Shiva
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wide text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-zinc-200 bg-zinc-900 hover:bg-white hover:text-black border border-zinc-800 hover:border-white rounded-md transition-all duration-200"
          >
            <FileText className="w-3 h-3" />
            <span>Resume</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 text-xs font-mono text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-md"
          >
            Resume
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-zinc-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-900 bg-black/95 backdrop-blur-lg px-6 py-4">
          <div className="flex flex-col gap-3 text-sm font-mono text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-1 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;