import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Printer,
  Download,
  ExternalLink,
  FileText,
  Eye,
  Mail,
  MapPin,
  Briefcase,
  Award,
  Check,
} from "lucide-react";

const ResumeModal = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState("pdf"); // 'pdf' | 'text'
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shivasingh.1dev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl h-[92vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-200 z-10"
          >
            {/* Modal Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-zinc-800/90 bg-zinc-900/60 print:hidden shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <div>
                  <h2 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    Shiva Singh — Resume
                  </h2>
                  <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
                    Delhi, India · Full Stack, DevOps & AI
                  </span>
                </div>
              </div>

              {/* View Switcher & Action Buttons */}
              <div className="flex items-center gap-2">
                <div className="inline-flex p-0.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono">
                  <button
                    onClick={() => setViewMode("pdf")}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${viewMode === "pdf"
                      ? "bg-zinc-800 text-white font-medium shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                      }`}
                  >
                    <FileText className="w-3 h-3" />
                    <span>PDF File</span>
                  </button>
                  <button
                    onClick={() => setViewMode("text")}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${viewMode === "text"
                      ? "bg-zinc-800 text-white font-medium shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200"
                      }`}
                  >
                    <Eye className="w-3 h-3" />
                    <span>Structured</span>
                  </button>
                </div>

                <a
                  href="/resume.pdf"
                  download="Shiva_Singh_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-zinc-200 bg-zinc-900 hover:bg-white hover:text-black border border-zinc-800 hover:border-white rounded-lg transition-all"
                  title="Download PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors hidden sm:inline-flex"
                  title="Open in new window"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={handlePrint}
                  className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors hidden sm:inline-flex"
                  title="Print"
                >
                  <Printer className="w-4 h-4" />
                </button>

                <button
                  onClick={onClose}
                  className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-hidden bg-zinc-950">
              {viewMode === "pdf" ? (
                /* PDF Viewer Frame */
                <div className="w-full h-full flex flex-col bg-zinc-900/40">
                  <iframe
                    src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                    title="Shiva Singh Resume PDF"
                    className="w-full h-full border-0 bg-zinc-900"
                  />
                </div>
              ) : (
                /* High-fidelity structured resume text matching Shiva's exact resume */
                <div className="overflow-y-auto h-full p-6 sm:p-10 space-y-8 font-sans max-w-4xl mx-auto">
                  {/* Top Header */}
                  <div className="border-b border-zinc-800 pb-6 text-center sm:text-left">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      Shiva Singh
                    </h1>
                    <p className="text-zinc-400 text-sm font-mono mt-1">
                      Delhi – India · shivasingh.1dev@gmail.com
                    </p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-zinc-400 font-mono">
                      <a
                        href="https://www.linkedin.com/in/shiva-singh-b2104a373/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors underline underline-offset-4"
                      >
                        linkedin.com/in/shiva-singh
                      </a>
                      <span>•</span>
                      <a
                        href="https://github.com/SHIVA-SINGHx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors underline underline-offset-4"
                      >
                        github.com/Shiva-Singhx
                      </a>
                      <span>•</span>
                      <span>shiva-portfolio.com</span>
                    </div>
                  </div>

                  {/* Introduction */}
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-2 pb-1 border-b border-zinc-850">
                      Introduction
                    </h3>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      In my tech journey, I’ve embraced versatility. While I excel in various stacks like Frontend, Backend, DevOps/Cloud, and AI etc., I don’t limit myself—I adjust to each project’s needs, readily learning new skills if required whether it’s a new language, framework, or tech trend.
                    </p>
                    <p className="text-zinc-400 text-sm leading-relaxed mt-2">
                      I thrive on adapting to fulfill company requirements and user satisfaction.
                    </p>
                  </div>

                  {/* Skills Section */}
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-3 pb-1 border-b border-zinc-850">
                      Skills
                    </h3>
                    <div className="space-y-2.5 text-xs sm:text-sm">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                        <span className="font-semibold text-white sm:w-36 shrink-0 font-mono">
                          Languages:
                        </span>
                        <span className="text-zinc-300">
                          Python, JavaScript, TypeScript, Golang, SQL
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                        <span className="font-semibold text-white sm:w-36 shrink-0 font-mono">
                          Frontend:
                        </span>
                        <span className="text-zinc-300">
                          React.js, Next.js, Tailwind Css, Shadcn-UI
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                        <span className="font-semibold text-white sm:w-36 shrink-0 font-mono">
                          Backend / Tech:
                        </span>
                        <span className="text-zinc-300">
                          Node.js, Express.js, Flask, Django, FastAPI, Pydantic, NumPy, Pandas
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                        <span className="font-semibold text-white sm:w-36 shrink-0 font-mono">
                          DataBase / ORM:
                        </span>
                        <span className="text-zinc-300">
                          SQL, Prisma, PostgreSQL, MySQL, Mongoose, MongoDB, Redis
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3">
                        <span className="font-semibold text-white sm:w-36 shrink-0 font-mono">
                          DevOps / Infra:
                        </span>
                        <span className="text-zinc-300">
                          Git, GitHub, Linux, NGINX, Docker, AWS, EC2, Vercel, CI/CD, GitHub Actions, Automation
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-3 pb-1 border-b border-zinc-850">
                      Experience
                    </h3>
                    <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h4 className="font-semibold text-white text-sm">
                          Technical Writer | Medium – Remote
                        </h4>
                        <span className="text-xs font-mono text-zinc-400">
                          Oct 2025 – Present
                        </span>
                      </div>
                      <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
                        <li>
                          Published 5+ technical articles covering Python, backend APIs, and Linux fundamentals.
                        </li>
                        <li>
                          Created hands-on guides with code examples for FastAPI, PostgreSQL integration, and NumPy / Pandas workflows.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-3 pb-1 border-b border-zinc-850">
                      Projects
                    </h3>
                    <div className="space-y-4">
                      {/* Tech-Cart */}
                      <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="font-semibold text-white text-sm">
                            Tech-Cart – Full-Stack E-commerce App
                          </h4>
                          <a
                            href="https://github.com/SHIVA-SINGHx/Tech-Cart"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1"
                          >
                            GitHub <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        <ul className="text-xs text-zinc-300 space-y-1 list-disc list-inside mb-2.5">
                          <li>
                            Real-time inventory sync across 500+ concurrent users with optimistic UI updates preventing overselling.
                          </li>
                          <li>
                            Built robust authentication system with email verification via Nodemailer, password recovery, and role-based access for 2 user types (Customer, Admin).
                          </li>
                          <li>
                            Containerized entire application using Docker with multi-stage builds, reducing deployment time from 15 minutes to under 3 minutes.
                          </li>
                        </ul>
                        <p className="text-[11px] font-mono text-zinc-400">
                          <span className="text-zinc-200">Technologies Used:</span> React.js, Redux Toolkit, Shadcn-UI, Node.js, Express.js, MongoDB, Nodemailer, JWT, Cloudinary, Docker
                        </p>
                      </div>

                      {/* Grokers */}
                      <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="font-semibold text-white text-sm">
                            Grokers – Full-Stack Grocery Delivery App with Separate Admin section
                          </h4>
                          <span className="text-xs font-mono text-zinc-400">GitHub</span>
                        </div>
                        <ul className="text-xs text-zinc-300 space-y-1 list-disc list-inside mb-2.5">
                          <li>
                            Built separate customer and admin interfaces: users can browse products and place orders, admins manage the catalog.
                          </li>
                          <li>
                            Architected role-based system with separate customer storefront and admin control panel managing 200+ products across categories.
                          </li>
                          <li>
                            Secure authentication using JWT tokens with role-based access controlling admin-only features.
                          </li>
                        </ul>
                        <p className="text-[11px] font-mono text-zinc-400">
                          <span className="text-zinc-200">Technologies Used:</span> React.js, Prebuilt-UI, Node.js, Express.js, MongoDB, JWT, Cloudinary
                        </p>
                      </div>

                      {/* Lexify AI */}
                      <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="font-semibold text-white text-sm">
                            Lexify AI – AI-powered content generation platform
                          </h4>
                          <span className="text-xs font-mono text-zinc-400">GitHub</span>
                        </div>
                        <ul className="text-xs text-zinc-300 space-y-1 list-disc list-inside mb-2.5">
                          <li>
                            Generates blog posts, social media captions, product descriptions, and hashtags using Gemini AI.
                          </li>
                          <li>
                            User history tracking to save and manage previously generated content with search functionality.
                          </li>
                        </ul>
                        <p className="text-[11px] font-mono text-zinc-400">
                          <span className="text-zinc-200">Technologies Used:</span> Next.js, Shadcn-UI, Tailwind Css, Gemini Api
                        </p>
                      </div>

                      {/* Blog App */}
                      <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <h4 className="font-semibold text-white text-sm">
                            Blog App – Using FastAPI
                          </h4>
                          <span className="text-xs font-mono text-zinc-400">GitHub</span>
                        </div>
                        <ul className="text-xs text-zinc-300 space-y-1 list-disc list-inside mb-2.5">
                          <li>
                            Complete authentication system: users must login to create, edit, or delete their own blog posts.
                          </li>
                        </ul>
                        <p className="text-[11px] font-mono text-zinc-400">
                          <span className="text-zinc-200">Technologies Used:</span> FastAPI, PostgreSQL, SQLAlchemy ORM, JWT tokens, Swagger-UI
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-t border-zinc-800/90 bg-zinc-900/60 text-xs text-zinc-400 print:hidden shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="hover:text-white transition-colors font-mono inline-flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <span>shivasingh.1dev@gmail.com</span>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-200 font-mono transition-colors"
                >
                  Open in Tab
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-1.5 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
