import React from "react";
import { ArrowUp, Github, Linkedin, Twitter, Mail, BookOpen } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-zinc-900 text-zinc-400">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          {/* Brand & Status */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-sm font-semibold text-white">shiva.dev</span>
            <span className="text-xs font-mono text-zinc-400">
              · Full Stack & Cloud/DevOps Engineer
            </span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-850 hover:border-zinc-700 hover:text-white text-xs font-mono transition-all active:scale-95"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © {currentYear} Shiva Singh
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SHIVA-SINGHx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              title="GitHub (@SHIVA-SINGHx)"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shiva-singh-b2104a373/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              title="LinkedIn (Shiva Singh)"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/Shivatwd1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              title="X (@Shivatwd1)"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://medium.com/@shivasingh.1dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              title="Medium Articles"
            >
              <BookOpen className="w-4 h-4" />
            </a>
            <a
              href="mailto:shivasingh.1dev@gmail.com"
              className="text-zinc-400 hover:text-white transition-colors"
              title="Email (shivasingh.1dev@gmail.com)"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
