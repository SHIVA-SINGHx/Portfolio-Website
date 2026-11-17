import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Cloud,
  Sparkles,
  Server,
  ShoppingCart,
  Layers,
  BookMarked,
  GitPullRequest,
  Container,
  Shield,
} from "lucide-react";
import gymnexImage from "../assets/gymnex.png";
import saralgymImage from "../assets/saralgym.png";
import techcartImage from "../assets/techcart.png"
import libraryImage from "../assets/library.png"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Kubernetes GitOps Voting App",
      tagline: "Microservices Deployment with GitOps & Full Observability",
      category: "cloud",
      categoryLabel: "Cloud & DevOps",
      description:
        "Production-grade Kubernetes deployment of a multi-service voting application. Migrated from Docker Compose to a fully orchestrated K8s cluster on AWS EC2, with GitOps-driven delivery via Argo CD and complete observability through Prometheus & Grafana.",
      highlights: [
        "Deployed microservices (vote, result, worker, Redis, PostgreSQL) on K8s with Argo CD GitOps",
        "Full observability stack: Prometheus metrics scraping + Grafana dashboards + health probes",
        "Helm-packaged deployments replacing manual Docker Compose for production-grade rollouts",
      ],
      tech: [
        "Kubernetes",
        "Argo CD",
        "Helm",
        "Docker",
        "Prometheus",
        "Grafana",
        "AWS EC2",
        "Linux",
        "Redis",
        "PostgreSQL",
      ],
      github: "https://github.com/SHIVA-SINGHx/k8s-gitops-voting-app",
      live: null,
      image: null,
      icon: <Container className="w-4 h-4 text-zinc-300" />,
    },
    {
      id: 2,
      title: "Three-Tier DevSecOps Pipeline",
      tagline: "Secure CI/CD Pipeline with SAST, Container & Infra Scanning",
      category: "cloud",
      categoryLabel: "Cloud & DevOps",
      description:
        "End-to-end DevSecOps pipeline integrating security at every stage of delivery. Automates OWASP Dependency-Check, Trivy container vulnerability scanning, and SonarQube SAST as quality gates before deployment, with Terraform-managed infrastructure and Kubernetes orchestration.",
      highlights: [
        "Security-first pipeline: OWASP Dependency-Check, Trivy & SonarQube SAST as quality gates",
        "Terraform IaC for reproducible AWS infrastructure + Kubernetes for container orchestration",
        "Automated secrets detection, container scanning & compliance checks in CI/CD flow",
      ],
      tech: [
        "Terraform",
        "Kubernetes",
        "Docker",
        "OWASP",
        "Trivy",
        "SonarQube",
        "GitHub Actions",
        "AWS",
        "Linux",
      ],
      github: "https://github.com/SHIVA-SINGHx/three-tier-devsecops-pipeline",
      live: null,
      image: null,
      icon: <Shield className="w-4 h-4 text-zinc-300" />,
    },
    {
      id: 3,
      title: "Node.js App CI/CD Pipeline",
      tagline: "Automated Containerization & Continuous Delivery Pipeline",
      category: "cloud",
      categoryLabel: "Cloud & DevOps",
      description:
        "End-to-end continuous integration and delivery pipeline. Automates syntax linting, unit testing, multi-stage Docker image builds, container registry push to Docker Hub, and automated deployment onto remote Linux servers with zero downtime.",
      highlights: [
        "Automated unit testing & multi-stage Docker container builds",
        "Zero-downtime deployment automation via GitHub Actions workflows",
        "Docker Hub automated versioning and remote Linux host deployment",
      ],
      tech: [
        "Docker",
        "GitHub Actions",
        "Node.js",
        "Linux",
        "CI/CD",
        "Docker Hub",
      ],
      github: "https://github.com/SHIVA-SINGHx/node-app-pipeline",
      live: null,
      image: null,
      icon: <GitPullRequest className="w-4 h-4 text-zinc-300" />,
    },
    {
      id: 4,
      title: "Three-Tier Architecture on AWS",
      tagline: "High Availability Cloud Infrastructure in Custom VPC",
      category: "cloud",
      categoryLabel: "Cloud & DevOps",
      description:
        "Enterprise-grade 3-tier cloud deployment in an isolated AWS VPC. Segregates public web subnets, private EC2 application compute tiers, and multi-AZ RDS database layers with hardened security groups and NGINX.",
      highlights: [
        "Isolated public & private subnets across availability zones",
        "Automated deployment on EC2 with multi-AZ RDS MySQL",
        "Hardened NGINX reverse proxy & strict security groups",
      ],
      tech: [
        "AWS VPC",
        "EC2",
        "RDS MySQL",
        "Security Groups",
        "NGINX",
        "Linux",
      ],
      github: "https://github.com/SHIVA-SINGHx/three-tier-architecture-aws-php",
      live: null,
      image: null,
      icon: <Cloud className="w-4 h-4 text-zinc-300" />,
    },
    {
      id: 5,
      title: "Tech-Cart — Full-Stack E-Commerce Engine",
      tagline: "Dockerized Online Retail System with Real-Time Inventory",
      category: "fullstack",
      categoryLabel: "Full Stack & DevOps",
      description:
        "High-performance e-commerce platform with real-time inventory sync across 500+ concurrent users with optimistic UI updates. Containerized with multi-stage Docker builds reducing deployment time from 15m to <3m. Features email verification via Nodemailer and role-based access for Customers and Admins.",
      highlights: [
        "Real-time inventory sync across 500+ concurrent users",
        "Role-based authentication & Nodemailer email verification",
        "Multi-stage Docker containerization (15m → <3m build time)",
      ],
      tech: [
        "React.js",
        "Redux Toolkit",
        "Shadcn-UI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Docker",
        "JWT",
        "Cloudinary",
      ],
      github: "https://github.com/SHIVA-SINGHx/Tech-Cart",
      live: "https://tech-cart-delta.vercel.app/",
      image: techcartImage,
      icon: <ShoppingCart className="w-4 h-4 text-zinc-300" />,
    },
    {
      id: 6,
      title: "Gymnex — AI Fitness Assistant",
      tagline: "AI Workout & Nutrition Planner with Gemini API",
      category: "ai",
      categoryLabel: "Featured · Live AI App",
      description:
        "Production AI fitness assistant powered by Google Gemini API. Generates customized fitness schedules, personalized diet plans, and real-time guidance with Clerk authentication and MongoDB persistence.",
        highlights: [
          "Gemini API generative prompt orchestration",
          "Clerk secure social login & profile sync",
          "Live on Vercel with active real-world usage",
        ],
        tech: [
          "Gemini API",
          "Next.js",
          "MongoDB",
          "Clerk Auth",
          "Shadcn UI",
          "Tailwind CSS",
        ],
        github: "https://github.com/SHIVA-SINGHx/Gymnex",
        live: "https://gymnex.vercel.app/",
        image: gymnexImage,
        icon: <Sparkles className="w-4 h-4 text-zinc-300" />,
      },
    {
      id: 7,
      title: "Lexify AI — Generative Content Studio",
      tagline: "Multimodal AI Copywriting Powered by Gemini API",
      category: "ai",
      categoryLabel: "AI & Next.js",
      description:
      "AI-driven content creation studio utilizing Google Gemini API to generate structured blog posts, social media captions, marketing copy, and hashtag recommendations. Features interactive user prompt history tracking and instant search.",
      highlights: [
        "Automated generation of blogs, social captions & marketing copy via Gemini API",
        "User history tracking with instant search & generation management",
        "Sleek UI with Next.js, Shadcn-UI & Tailwind CSS",
      ],
      tech: ["Next.js", "Gemini API", "Shadcn-UI", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/SHIVA-SINGHx/LexifyAI",
      live: null,
      image: null,
      icon: <Sparkles className="w-4 h-4 text-zinc-300" />,
    },
    {
      id: 8,
      title: "Saral-Gym — Client Web Platform",
      tagline: "Production Client Business Website with Fluid Micro-UX",
      category: "fullstack",
      categoryLabel: "Client Project",
      description:
        "Production website created for a fitness studio client. Packed with fluid Framer Motion animations, membership tier calculators, fast inquiry forms, and near-perfect Lighthouse performance scores.",
      highlights: [
        "Custom responsive design with Framer Motion fluid animations",
        "Membership inquiry workflow & dynamic pricing tiers",
        "Deployed on Vercel with high SEO & performance scores",
      ],
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Responsive Design"],
      github: "https://github.com/SHIVA-SINGHx/Saral-Gym-Website",
      live: "https://saral-gym-website.vercel.app/",
      image: saralgymImage,
      icon: <Layers className="w-4 h-4 text-zinc-300" />,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : activeFilter === "cloud"
      ? projects.filter((p) => p.category === "cloud")
      : activeFilter === "ai"
      ? projects.filter((p) => p.category === "ai")
      : projects.filter((p) => p.category === "fullstack" || p.category === "systems");

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-1">
              Craft & Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="inline-flex p-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1 rounded-md transition-all ${
                activeFilter === "all"
                  ? "bg-zinc-800 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setActiveFilter("cloud")}
              className={`px-3 py-1 rounded-md transition-all ${
                activeFilter === "cloud"
                  ? "bg-zinc-800 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Cloud & DevOps (4)
            </button>
            <button
              onClick={() => setActiveFilter("ai")}
              className={`px-3 py-1 rounded-md transition-all ${
                activeFilter === "ai"
                  ? "bg-zinc-800 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              AI (2)
            </button>
            <button
              onClick={() => setActiveFilter("fullstack")}
              className={`px-3 py-1 rounded-md transition-all ${
                activeFilter === "fullstack"
                  ? "bg-zinc-800 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Full Stack (2)
            </button>
          </div>
        </motion.div>

        {/* Projects Grid with AnimatePresence for smooth filter transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-zinc-850 hover:border-zinc-700 transition-colors duration-300 group"
            >
              <div>
                {/* Image Preview if available */}
                {project.image && (
                  <div className="w-full h-44 mb-4 rounded-xl overflow-hidden border border-zinc-850 bg-zinc-900 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                )}

                {/* Card Top Category & Action Links */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="p-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {project.icon}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
                        title="Live Preview"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 group-hover:text-zinc-300 transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mt-0.5 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Bullets */}
                {project.highlights && (
                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xs text-zinc-300 flex items-start gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-zinc-500 mt-1.5 shrink-0"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Tech Badges */}
              <div className="pt-3 border-t border-zinc-900">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-zinc-900/90 border border-zinc-850 text-[11px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>

        {/* GitHub footer banner with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 p-4 rounded-xl bg-zinc-950 border border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400"
        >
          <span>Explore more active repositories and experiments on GitHub</span>
          <a
            href="https://github.com/SHIVA-SINGHx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-200 hover:text-white underline underline-offset-4"
          >
            <span>Visit @SHIVA-SINGHx</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
