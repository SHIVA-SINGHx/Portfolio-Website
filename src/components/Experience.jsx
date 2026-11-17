import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Briefcase, PenTool, Code2 } from "lucide-react";
import { TechIcons, getTechIcon } from "./icons/TechIcons";

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer Intern",
      organization: "DiziCode Infotech — Remote",
      period: "July 2026 – Nov 2026",
      location: "Remote",
      type: "Internship",
      badge: "Internship",
      description:
        "Engineered scalable REST APIs, managed multi-database architectures, and deployed production-grade applications on AWS cloud infrastructure with secure VPC networking.",
      highlights: [
        "Designed and built REST API endpoints using Node.js, TypeScript, and FastAPI, covering authentication, validation, and CRUD operations for client web platforms.",
        "Modeled and managed data across MongoDB, PostgreSQL, and MySQL, optimizing database selection according to access patterns and query complexity.",
        "Deployed applications to production on AWS EC2 with RDS and S3, configuring networking through isolated VPC subnets and security groups.",
      ],
      skills: ["Node.js", "TypeScript", "FastAPI", "MongoDB", "PostgreSQL", "MySQL", "AWS", "EC2", "RDS", "S3", "VPC"],
      iconLogo: <Briefcase className="w-5 h-5 text-emerald-400" />,
      link: null,
    },
    {
      role: "Technical Writer",
      organization: "Medium — Remote",
      period: "Oct 2025 – Present",
      location: "Remote",
      type: "Publications & Technical Architecture",
      description:
        "Authoring in-depth technical articles, system architecture breakdowns, and code blueprints focusing on Python backend development, API design, and Linux DevOps fundamentals.",
      highlights: [
        "Published 5+ technical articles covering Python, backend APIs, containerization, and Linux system fundamentals.",
        "Created hands-on developer guides with runnable code examples for FastAPI, PostgreSQL integration, and asynchronous workflows.",
        "Authored blueprints on Docker multi-stage builds, shell scripting automation, and multi-tier cloud deployments.",
      ],
      skills: ["Medium", "Python", "FastAPI", "PostgreSQL", "Docker", "Linux", "Bash"],
      iconLogo: <TechIcons.Medium className="w-5 h-5 text-white" />,
      link: "https://medium.com/@shivasingh.1dev",
    },
    {
      role: "Cloud & Infrastructure Engineer",
      organization: "Production Deployments & Open Source",
      period: "2024 – Present",
      location: "Delhi, India / Remote",
      type: "Engineering & Architecture",
      description:
        "Designing resilient cloud infrastructure with Terraform, orchestrating Kubernetes microservices with GitOps, and automating zero-downtime CI/CD pipelines.",
      highlights: [
        "Deployed 3-tier AWS infrastructure across 2 AZs using modular Terraform with ALBs, EC2 Auto Scaling, and RDS PostgreSQL.",
        "Orchestrated Kubernetes microservices on AWS EC2 with Argo CD GitOps delivery and Prometheus/Grafana observability.",
        "Built automated DevSecOps pipelines integrating SonarQube SAST, OWASP Dependency-Check, and Trivy vulnerability scans.",
      ],
      skills: ["Terraform", "Kubernetes", "AWS", "Docker", "Argo CD", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "Go"],
      iconLogo: <TechIcons.Kubernetes className="w-5 h-5" />,
      link: "https://github.com/SHIVA-SINGHx",
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-20 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-10"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-1">
              Career & Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Experience
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            2024 – Present
          </span>
        </motion.div>

        {/* Experience List with Motion */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-950 border border-zinc-850 hover:border-zinc-700 transition-all duration-300 group"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    {exp.iconLogo}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors flex items-center gap-2 flex-wrap">
                      <span>{exp.role}</span>
                      {exp.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono uppercase tracking-wider">
                          {exp.badge}
                        </span>
                      )}
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-600 hover:text-zinc-300 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">
                      {exp.organization}
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col sm:items-end gap-2 sm:gap-0.5 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-3 mb-4">
                {exp.description}
              </p>

              {/* Bullet points */}
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1.5 shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skill Badges with Official Logos */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 group-hover:text-zinc-100 group-hover:border-zinc-700 transition-colors"
                  >
                    <span className="shrink-0 scale-90">
                      {getTechIcon(skill)}
                    </span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
