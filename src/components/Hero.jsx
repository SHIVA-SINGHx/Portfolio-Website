import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Copy,
  Check,
  ArrowDown,
  FileText,
  ExternalLink,
  MapPin,
  Phone,
  Terminal,
  Cpu,
  Cloud,
  Code2,
  BookOpen,
} from "lucide-react";
import pfp from "../assets/pfp.png";

const Hero = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const email = "shivasingh.1dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/SHIVA-SINGHx",
      icon: <Github className="w-4 h-4" />,
      handle: "@SHIVA-SINGHx",
      description: "Codebases, open source & repos",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shiva-singh-b2104a373/",
      icon: <Linkedin className="w-4 h-4" />,
      handle: "in/shiva-singh",
      description: "Professional journey & network",
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/Shivatwd1",
      icon: <Twitter className="w-4 h-4" />,
      handle: "@Shivatwd1",
      description: "Engineering thoughts & tech updates",
    },
    {
      name: "Medium",
      href: "https://medium.com/@shivasingh.1dev",
      icon: <BookOpen className="w-4 h-4" />,
      handle: "@shivasingh.1dev",
      description: "Technical articles & system guides",
    },
  ];

  const pillars = [
    {
      icon: <Cloud className="w-4 h-4 text-zinc-300" />,
      title: "DevOps & Cloud Infrastructure",
      detail:
        "Architecting resilient multi-tier AWS environments (VPC, EC2, EKS, RDS, S3), Infrastructure as Code with Terraform, and Linux production administration.",
    },
    {
      icon: <Cpu className="w-4 h-4 text-zinc-300" />,
      title: "Containers & GitOps CI/CD",
      detail:
        "Building multi-stage Docker images, Kubernetes microservices orchestration, Argo CD GitOps deployments, and automated Jenkins / GitHub Actions pipelines.",
    },
    {
      icon: <Code2 className="w-4 h-4 text-zinc-300" />,
      title: "Backend & Systems Development",
      detail:
        "Developing scalable REST APIs and services with Node.js, TypeScript, FastAPI, Python, and Go with relational and NoSQL databases.",
    },
    {
      icon: <BookOpen className="w-4 h-4 text-zinc-300" />,
      title: "Technical Writing & DevSecOps",
      detail:
        "Publishing in-depth blueprints on Medium covering container security (Trivy, SonarQube, OWASP), Linux fundamentals, and cloud automation.",
    },
  ];

  const stats = [
    { label: "Cloud & DevOps Projects", value: "4+" },
    { label: "Technical Guides", value: "5+" },
    { label: "Total Projects", value: "8+" },
    { label: "Location", value: "Delhi, IN" },
  ];

  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-20 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Profile Card Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 pb-8"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for full-time & high-impact freelance projects</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Shiva Singh
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-medium">
              DevOps & Cloud Engineer <span className="text-zinc-600">·</span> Infrastructure & Backend
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" /> Delhi, India
              </span>
              {/* <span>•</span>
              <a
                href={`tel:${phone}`}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-500" /> {phone}
              </a> */}
              <span>•</span>
              <span className="text-zinc-400">shiva-portfolio.com</span>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative group shrink-0"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-zinc-800 bg-zinc-900 p-0.5 shadow-2xl transition-all duration-300 group-hover:border-zinc-500">
              <img
                src={pfp}
                alt="Shiva Singh"
                className="w-full h-full object-cover rounded-[14px] filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Introduction Philosophy (Directly from Shiva's Resume) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 space-y-3.5 mb-8"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-zinc-400" />
            <span>About Me & Tech Philosophy</span>
          </div>

          <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
            Hands-on DevOps & Cloud Engineer specializing in <span className="text-white font-semibold">automated CI/CD pipelines, container orchestration, and AWS/Azure cloud infrastructure</span>. Passionate about streamlining software delivery with self-healing Kubernetes clusters, Terraform IaC, and proactive DevSecOps security scanning.
          </p>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
            From deploying microservices with Argo CD GitOps to integrating automated quality gates (Trivy, SonarQube, OWASP) and configuring cluster observability with Prometheus & Grafana, I focus on reliability, scalability, and robust developer workflows.
          </p>
        </motion.div>

        {/* Quick Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-850 text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                {s.value}
              </div>
              <div className="text-[11px] font-mono text-zinc-400 mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 4 Engineering Pillars Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
            Core Engineering Focus
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {pillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-zinc-950 border border-zinc-850 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800">
                    {pillar.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {pillar.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons: Copy Email, View Resume, Explore Projects */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs font-mono hover:bg-zinc-800 hover:border-zinc-700 transition-all active:scale-95"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-zinc-400" />
                <span>{email}</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-all active:scale-95 shadow-md"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume (PDF)</span>
          </button>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 text-xs font-mono hover:text-white hover:border-zinc-700 transition-colors"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Social Media & Technical Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-6 border-t border-zinc-900/80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5"
        >
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-850 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all group"
            >
              <div className="flex items-center gap-2.5 text-zinc-400 group-hover:text-white transition-colors">
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                  {social.icon}
                </div>
                <div>
                  <span className="text-xs font-medium text-white block">
                    {social.name}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {social.handle}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;