import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Sun, Moon } from "lucide-react";

const Navigation = ({ onOpenResume, isDark, toggleTheme }) => {
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 dark:bg-black/85 light:bg-white/90 backdrop-blur-md border-b border-zinc-800/80 dark:border-zinc-900 py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#about"
          className="group flex items-center gap-2.5 text-zinc-200 dark:text-zinc-200 hover:text-white transition-colors"
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
              className="hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-zinc-400 group-hover:w-full transition-all duration-200" />
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all active:scale-95"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-blue-400 hover:-rotate-12 transition-transform" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-zinc-200 bg-zinc-900 hover:bg-white hover:text-black border border-zinc-800 hover:border-white rounded-md transition-all duration-200"
          >
            <FileText className="w-3 h-3" />
            <span>Resume</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2.5 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light mode"
            className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
          >
            {isDark ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-blue-400" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 text-xs font-mono text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-md"
          >
            Resume
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer — animated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-zinc-900 bg-black/95 backdrop-blur-lg px-6 overflow-hidden"
          >
            <div className="flex flex-col gap-3 text-sm font-mono text-zinc-400 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="py-1 hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;