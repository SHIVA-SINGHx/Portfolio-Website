import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { TechIcons, getTechIcon } from "./icons/TechIcons";
import quicktoImage from "../assets/quickto.png";
import terraformArchImage from "../assets/terraform-tier-3.png";
import gymnexImage from "../assets/gymnex.png";
import techcartImage from "../assets/techcart.png";
import k8sVotingImage from "../assets/k8s-voting.png";
import libraryImage from "../assets/library.png";
import vaanisetuImage from "../assets/vaanisetu.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // All 11 projects ordered with Top 6 priority:
  const projects = [
    {
      id: 1,
      title: "Kubernetes GitOps Voting App",
      tagline: "Microservices Deployment with GitOps & Full Observability",
      category: "cloud",
      categoryLabel: "Cloud & DevOps",
      featured: true,
      description:
        "Production-grade Kubernetes deployment of a 5-component microservices app (Python, Node.js, .NET, Redis, PostgreSQL). Migrated from Docker Compose to an EC2 3-node cluster with automated GitOps delivery via Argo CD and complete Prometheus/Grafana observability.",
      highlights: [
        "Automated continuous delivery with Argo CD GitOps controller on 3-node Kubernetes cluster",
        "Full-stack observability with kube-prometheus-stack Helm chart & custom Grafana dashboards",
        "Docker multi-stage builds & containerization of all microservices with self-healing pods",
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
      image: k8sVotingImage,
      iconLogo: <TechIcons.Kubernetes className="w-4 h-4" />,
    },
    {
      id: 2,
      title: "3-Tier AWS Infrastructure with Terraform",
      tagline: "Multi-AZ Cloud Architecture with Auto Scaling & RDS",
      category: "cloud",
      categoryLabel: "Cloud & IaC",
      featured: true,
      description:
        "Highly available 3-tier web architecture on AWS provisioned entirely with modular Terraform IaC. Features a custom VPC across 2 AZs, public & internal Application Load Balancers, Node.js frontend and Go backend Auto Scaling Groups, and multi-AZ Amazon RDS PostgreSQL.",
      highlights: [
        "VPC with 8 subnets across 2 AZs, NAT Gateways, and isolated public, app, and DB tiers",
        "Dual ALBs with EC2 Auto Scaling Groups (Node.js frontend & Go backend microservices)",
        "Automated deployment with single `terraform apply`, AWS Secrets Manager & CloudWatch logs",
      ],
      tech: [
        "Terraform",
        "AWS",
        "Go",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "Linux",
      ],
      github: "https://github.com/SHIVA-SINGHx/terraform-tier-3-infrastructure",
      live: null,
      image: terraformArchImage,
      iconLogo: <TechIcons.Terraform className="w-4 h-4" />,
    },
    {
      id: 3,
      title: "Quickto — Multilingual Quick-Commerce Search",
      tagline: "Event-Driven Catalog Search with Kafka & Multi-DB",
      category: "cloud",
      categoryLabel: "Backend & Distributed Systems",
      featured: true,
      description:
        "High-performance quick-commerce search platform supporting queries across 12 languages (Hindi, Hinglish, regional scripts). Features asynchronous Kafka event queues for background product ingestion, vector & hybrid search with Typesense, and multi-database persistence.",
      highlights: [
        "Event-driven architecture with Apache Kafka separating interactive search from background workers",
        "Hybrid vector search with Typesense, MongoDB persistence, and Redis caching for store catalogs",
        "Dark store delivery-area routing, AI product enrichment, and real-time search analytics",
      ],
      tech: [
        "Kafka",
        "Node.js",
        "MongoDB",
        "Redis",
        "Docker",
        "TypeScript",
        "REST APIs",
      ],
      github: "https://github.com/SHIVA-SINGHx/Quickto",
      live: null,
      image: quicktoImage,
      iconLogo: <TechIcons.Kafka className="w-4 h-4" />,
    },
    {
      id: 4,
      title: "Jerney — 3-Tier DevSecOps Blog Platform",
      tagline: "EKS Deployment with Terraform & GitHub Actions Security Gates",
      category: "cloud",
      categoryLabel: "Cloud & DevSecOps",
      featured: true,
      description:
        "Production-style 3-tier blog platform on AWS. Combines React frontend, Node.js/Express REST API, and PostgreSQL persistence with Docker containerization, AWS VPC and Amazon EKS Auto Mode cluster provisioned by Terraform, and a security-hardened GitHub Actions CI/CD pipeline.",
      highlights: [
        "Automated CI/CD pipeline featuring code linting, vulnerability scanning, and Docker builds",
        "Terraform IaC provisioning AWS VPC, EKS cluster, storage classes, and IAM roles",
        "Kubernetes orchestration with NodePort and ClusterIP services, health probes, and network policies",
      ],
      tech: [
        "Kubernetes",
        "Terraform",
        "AWS",
        "GitHub Actions",
        "Docker",
        "Node.js",
        "PostgreSQL",
        "Linux",
      ],
      github: "https://github.com/SHIVA-SINGHx/Blog-App-3-Tier-DevSecops-Deployment",
      live: null,
      image: null,
      iconLogo: <TechIcons.Kubernetes className="w-4 h-4" />,
    },
    {
      id: 5,
      title: "Go Distributed Microservices",
      tagline: "Service Catalog & Bookings with gRPC & RabbitMQ",
      category: "cloud",
      categoryLabel: "Go & Microservices",
      featured: true,
      description:
        "Modular distributed microservices system written in Go. Implements inter-service gRPC communication for instant catalog lookup, RabbitMQ message queues for event-driven asynchronous booking notifications, and PostgreSQL transactional persistence.",
      highlights: [
        "Inter-service gRPC protocol buffer communication with timeout management between Catalog & Booking",
        "Event-driven messaging via RabbitMQ publishing `booking.created` events to background workers",
        "Docker Compose orchestration with PostgreSQL relational database schema and health checks",
      ],
      tech: [
        "Go",
        "gRPC",
        "RabbitMQ",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "Linux",
      ],
      github: "https://github.com/SHIVA-SINGHx/Golang-Microservice-Project",
      live: null,
      image: null,
      iconLogo: <TechIcons.Go className="w-4 h-4" />,
    },
    {
      id: 6,
      title: "End-to-End Three-Tier DevSecOps Pipeline",
      tagline: "Jenkins CI/CD with SonarQube, Trivy & OWASP Security Gates",
      category: "cloud",
      categoryLabel: "DevSecOps & CI/CD",
      featured: true,
      description:
        "Enterprise-grade DevSecOps continuous delivery pipeline on Kubernetes. Integrates SonarQube static code analysis with quality gates, OWASP Dependency-Check for library vulnerabilities, and Trivy filesystem/image security scans before pushing to Amazon ECR.",
      highlights: [
        "4 automated security quality gates: SonarQube SAST, OWASP Dependency-Check, and Trivy CVE scanning",
        "Independent dual Jenkins pipelines automating testing, Docker image building, and K8s manifest updates",
        "AWS Jenkins CI host provisioned via Terraform with VPC, IAM roles, and S3 remote state backend",
      ],
      tech: [
        "Jenkins",
        "Terraform",
        "Kubernetes",
        "Docker",
        "Trivy",
        "SonarQube",
        "OWASP",
        "AWS",
      ],
      github: "https://github.com/SHIVA-SINGHx/three-tier-devsecops-pipeline",
      live: null,
      image: null,
      iconLogo: <TechIcons.Jenkins className="w-4 h-4" />,
    },
    {
      id: 7,
      title: "Node.js App CI/CD Pipeline",
      tagline: "Automated Containerization & Continuous Delivery",
      category: "cloud",
      categoryLabel: "DevOps & Automation",
      featured: false,
      description:
        "Production-grade continuous integration and continuous delivery pipeline. Automates linting, unit testing, multi-stage Docker builds, image publishing to Docker Hub, and zero-downtime automated deployment to remote Linux servers.",
      highlights: [
        "Zero-downtime deployment workflows via GitHub Actions runner to Linux VPS",
        "Automated Docker Hub version tagging and vulnerability testing",
        "Optimized container layers reducing deployment time from 15m to <3m",
      ],
      tech: [
        "Docker",
        "GitHub Actions",
        "Node.js",
        "Linux",
        "CI/CD",
      ],
      github: "https://github.com/SHIVA-SINGHx/node-app-pipeline",
      live: null,
      image: null,
      iconLogo: <TechIcons.GitHubActions className="w-4 h-4" />,
    },
    {
      id: 8,
      title: "Library Management System (LMS)",
      tagline: "Containerized MERN Architecture with AWS EC2 Deployment",
      category: "fullstack",
      categoryLabel: "Full Stack & Cloud",
      featured: false,
      description:
        "Modern full-stack MERN application engineered to streamline book cataloging, circulation tracking, fine automation, and role-based access for admins and students. Fully containerized with Docker and production-deployed on AWS EC2.",
      highlights: [
        "Role-based authentication & access control for librarians, admins, and students with JWT",
        "Automated circulation tracking, overdue fine calculation, and book issue/return ledger",
        "Multi-stage Docker containerization and production deployment on AWS EC2 instance",
      ],
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Docker",
        "AWS",
        "TypeScript",
      ],
      github: "https://github.com/SHIVA-SINGHx/Library-Management-System",
      live: "https://library-management-system-brown-phi.vercel.app/",
      image: libraryImage,
      iconLogo: <TechIcons.ReactIcon className="w-4 h-4" />,
    },
    {
      id: 9,
      title: "VaaniSetu — Indic Language Learning Platform",
      tagline: "Interactive & Gamified Web Platform with Web Speech Synthesis",
      category: "fullstack",
      categoryLabel: "Full Stack & Next.js",
      featured: false,
      description:
        "Interactive multilingual learning platform bridging Indian languages and scripts through 6 gamified learning arcade modes, multi-engine translation bridges, cultural explorers, and zero-asset synthesized Web Audio & Speech APIs.",
      highlights: [
        "6 interactive learning arcade game modes with streak tracking, gamification, and badges",
        "Multi-engine translator bridge supporting regional Indian scripts and phonetics",
        "Synthesized zero-asset audio pronunciation powered by modern Web Speech API",
      ],
      tech: [
        "React",
        "TypeScript",
        "Node.js",
        "REST APIs",
      ],
      github: "https://github.com/SHIVA-SINGHx/vaanisetu-v2",
      live: vaanisetu-v2.vercel.app,
      image: vaanisetuImage,
      iconLogo: <TechIcons.TypeScript className="w-4 h-4" />,
    },
    {
      id: 10,
      title: "Tech-Cart — Full-Stack E-Commerce Engine",
      tagline: "Dockerized Retail System with Real-Time Inventory",
      category: "fullstack",
      categoryLabel: "Full Stack & Microservices",
      featured: false,
      description:
        "Containerized high-concurrency online retail system with optimistic UI updates. Features multi-stage Docker builds reducing build latency, JWT authentication, and MongoDB persistence.",
      highlights: [
        "Multi-stage Docker builds reducing deployment latency from 15m to <3m",
        "Real-time inventory sync across 500+ concurrent simulated users",
        "Full-stack authentication and automated email verification workflows",
      ],
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Docker",
        "TypeScript",
        "Redis",
      ],
      github: "https://github.com/SHIVA-SINGHx/Tech-Cart",
      live: "https://tech-cart-delta.vercel.app/",
      image: techcartImage,
      iconLogo: <TechIcons.Docker className="w-4 h-4" />,
    },
    {
      id: 11,
      title: "Gymnex — AI Fitness Assistant",
      tagline: "AI Workout & Nutrition Planner with Gemini API",
      category: "ai",
      categoryLabel: "Live AI Platform",
      featured: false,
      description:
        "Production AI fitness assistant powered by Google Gemini API. Generates customized fitness schedules, personalized diet plans, and real-time guidance with Clerk authentication and MongoDB persistence.",
      highlights: [
        "Gemini API generative prompt orchestration with structured JSON completions",
        "Clerk secure social login & MongoDB Atlas data synchronization",
        "Live on Vercel with active real-world usage and fast edge responses",
      ],
      tech: [
        "Gemini",
        "Node.js",
        "MongoDB",
        "TypeScript",
        "Docker",
      ],
      github: "https://github.com/SHIVA-SINGHx/Gymnex",
      live: "https://gymnex.vercel.app/",
      image: gymnexImage,
      iconLogo: <TechIcons.Gemini className="w-4 h-4" />,
    },
  ];

  // Filtering logic
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : activeFilter === "cloud"
        ? projects.filter((p) => p.category === "cloud")
        : activeFilter === "ai"
          ? projects.filter((p) => p.category === "ai")
          : projects.filter((p) => p.category === "fullstack");

  // Show top 6 by default, or all if showAll is true (or if user filtered)
  const displayedProjects =
    activeFilter === "all" && !showAll
      ? filteredProjects.slice(0, 6)
      : filteredProjects;

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
              onClick={() => {
                setActiveFilter("all");
              }}
              className={`px-3 py-1 rounded-md transition-all ${activeFilter === "all"
                ? "bg-zinc-800 text-white font-medium"
                : "text-zinc-400 hover:text-zinc-200"
                }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => {
                setActiveFilter("cloud");
                setShowAll(true);
              }}
              className={`px-3 py-1 rounded-md transition-all ${activeFilter === "cloud"
                ? "bg-zinc-800 text-white font-medium"
                : "text-zinc-400 hover:text-zinc-200"
                }`}
            >
              Cloud & DevOps (7)
            </button>
            <button
              onClick={() => {
                setActiveFilter("fullstack");
                setShowAll(true);
              }}
              className={`px-3 py-1 rounded-md transition-all ${activeFilter === "fullstack"
                ? "bg-zinc-800 text-white font-medium"
                : "text-zinc-400 hover:text-zinc-200"
                }`}
            >
              Full Stack (3)
            </button>
            <button
              onClick={() => {
                setActiveFilter("ai");
                setShowAll(true);
              }}
              className={`px-3 py-1 rounded-md transition-all ${activeFilter === "ai"
                ? "bg-zinc-800 text-white font-medium"
                : "text-zinc-400 hover:text-zinc-200"
                }`}
            >
              AI (1)
            </button>
          </div>
        </motion.div>

        {/* Projects Grid with AnimatePresence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, idx) => (
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
                      <span className="p-1.5 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                        {project.iconLogo}
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

                  {/* Highlights Bullet List */}
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

                {/* Tech Badges with Official Logos */}
                <div className="pt-3 border-t border-zinc-900">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-900/90 border border-zinc-850 text-[11px] font-mono text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
                      >
                        <span className="shrink-0 scale-90">
                          {getTechIcon(t)}
                        </span>
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Toggle Button */}
        {activeFilter === "all" && projects.length > 6 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-200 hover:bg-zinc-900 hover:border-zinc-750 transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>
                {showAll
                  ? "Show Top 6 Projects"
                  : `Show All Projects (${projects.length})`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-zinc-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-zinc-400" />
              )}
            </button>
          </div>
        )}

        {/* GitHub footer banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 p-4 rounded-xl bg-zinc-950 border border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400"
        >
          <span>Explore all active repositories and IaC configs on GitHub</span>
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
