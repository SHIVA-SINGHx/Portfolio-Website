import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Layout, Database, Terminal, Cpu, Layers, GitBranch, Code } from "lucide-react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const skillCategories = [
    {
      id: "devops",
      title: "DevOps & Infrastructure",
      subtitle: "Containers, CI/CD, Linux & Cloud",
      icon: <Cloud className="w-4 h-4 text-zinc-300" />,
      tag: "Cloud / Infra",
      skills: [
        { name: "Docker", highlight: true },
        { name: "AWS (EC2, VPC, RDS)", highlight: true },
        { name: "CI/CD & GitHub Actions", highlight: true },
        { name: "Linux Administration", highlight: true },
        { name: "NGINX Reverse Proxy", highlight: false },
        { name: "Git & GitHub", highlight: true },
        { name: "Vercel Deployment", highlight: false },
        { name: "Infrastructure Automation", highlight: false },
      ],
      description:
        "Building multi-stage Docker containers to reduce deployment latency, provisioning AWS EC2 instances, setting up NGINX proxies, and automating tests via GitHub Actions.",
    },
    {
      id: "backend",
      title: "Backend & AI Engineering",
      subtitle: "APIs, Microservices, Python & LLMs",
      icon: <Cpu className="w-4 h-4 text-zinc-300" />,
      tag: "Server / AI",
      skills: [
        { name: "FastAPI", highlight: true },
        { name: "Python", highlight: true },
        { name: "Google Gemini API", highlight: true },
        { name: "Node.js & Express.js", highlight: true },
        { name: "Django & Flask", highlight: false },
        { name: "Pydantic & Swagger-UI", highlight: false },
        { name: "NumPy & Pandas", highlight: false },
        { name: "JWT Authentication", highlight: true },
      ],
      description:
        "Developing asynchronous REST APIs with FastAPI, building Node/Express backends, integrating Google Gemini AI workflows, and writing data processing routines.",
    },
    {
      id: "frontend",
      title: "Frontend & UI Systems",
      subtitle: "Modern Component Architecture",
      icon: <Layout className="w-4 h-4 text-zinc-300" />,
      tag: "Client Web",
      skills: [
        { name: "React.js", highlight: true },
        { name: "Next.js", highlight: true },
        { name: "TypeScript", highlight: true },
        { name: "JavaScript", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "Shadcn-UI", highlight: true },
        { name: "Redux Toolkit", highlight: false },
        { name: "Framer Motion", highlight: false },
      ],
      description:
        "Designing responsive, accessible web interfaces with Next.js, React, and Tailwind CSS. Implementing state management with Redux Toolkit and modern component systems with Shadcn-UI.",
    },
    {
      id: "database",
      title: "Databases, ORM & Languages",
      subtitle: "Persistence, Caching & Core Languages",
      icon: <Database className="w-4 h-4 text-zinc-300" />,
      tag: "Data & Core",
      skills: [
        { name: "PostgreSQL", highlight: true },
        { name: "MongoDB & Mongoose", highlight: true },
        { name: "MySQL", highlight: false },
        { name: "Redis Caching", highlight: true },
        { name: "SQLAlchemy & Prisma ORM", highlight: false },
        { name: "Golang Basics", highlight: false },
        { name: "SQL", highlight: true },
      ],
      description:
        "Managing relational datasets with PostgreSQL/MySQL and document stores with MongoDB. Caching frequent queries with Redis and modeling schemas via Prisma and SQLAlchemy.",
    },
  ];

  const filteredCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="stack" className="py-16 md:py-20 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-1">
              Capabilities & Tools
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Tech Stack
            </h2>
          </div>

          {/* Quick Filter */}
          <div className="inline-flex p-1 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1 rounded-md transition-all ${
                activeTab === "all"
                  ? "bg-zinc-800 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("devops")}
              className={`px-3 py-1 rounded-md transition-all ${
                activeTab === "devops"
                  ? "bg-zinc-800 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              DevOps
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`px-3 py-1 rounded-md transition-all ${
                activeTab === "backend"
                  ? "bg-zinc-800 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Backend & AI
            </button>
            <button
              onClick={() => setActiveTab("frontend")}
              className={`px-3 py-1 rounded-md transition-all ${
                activeTab === "frontend"
                  ? "bg-zinc-800 text-white font-medium"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Frontend
            </button>
          </div>
        </motion.div>

        {/* 2x2 Clean Monochrome Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-850 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:border-zinc-700 transition-colors">
                      {cat.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white group-hover:text-zinc-200 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] font-mono text-zinc-400">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {cat.tag}
                  </span>
                </div>

                {/* Brief description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {cat.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-3 border-t border-zinc-900">
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                        skill.highlight
                          ? "bg-zinc-900 text-zinc-200 border border-zinc-700 font-medium"
                          : "bg-zinc-900/60 text-zinc-400 border border-zinc-850"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages & Environments Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-6 p-4 rounded-xl bg-zinc-950 border border-zinc-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-zinc-400"
        >
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-zinc-400 shrink-0" />
            <span>Languages: Python · JavaScript · TypeScript · Golang · SQL</span>
          </div>
          <span className="text-zinc-400 text-[11px] shrink-0">Linux Ubuntu · Dockerized Workflow</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;