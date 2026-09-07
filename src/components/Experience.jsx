import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Code2, PenTool, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Technical Writer",
      organization: "Medium — Remote",
      period: "Oct 2025 – Present",
      location: "Remote",
      type: "Publications & Technical Architecture",
      description:
        "Authoring in-depth technical articles, system architecture breakdowns, and code blueprints focusing on Python backend development, API design, and Linux DevOps fundamentals.",
      highlights: [
        "Published 5+ technical articles covering Python, backend APIs, and Linux fundamentals.",
        "Created hands-on guides with code examples for FastAPI, PostgreSQL integration, and NumPy / Pandas workflows.",
        "Authored developer blueprints on Docker containerization, shell scripting, and multi-tier cloud deployments.",
      ],
      skills: ["Python", "FastAPI", "PostgreSQL", "Docker", "Linux", "NumPy", "Pandas", "Medium"],
      icon: <PenTool className="w-4 h-4 text-zinc-300" />,
      link: "https://medium.com/@shivasingh.1dev",
    },
    {
      role: "Full Stack & Cloud Developer",
      organization: "Projects & Production Builds",
      period: "2024 – Present",
      location: "Delhi, India / Remote",
      type: "Engineering & Architecture",
      description:
        "Engineering responsive web applications, containerized microservices, and AI-driven platforms with modern full-stack technologies, automated CI/CD pipelines, and cloud hosting.",
      highlights: [
        "Architected Tech-Cart e-commerce engine with multi-stage Docker builds reducing deployment time from 15 minutes to under 3 minutes.",
        "Built automated Node.js CI/CD pipelines with GitHub Actions and multi-stage Docker builds to automate testing and production server deployment.",
        "Created Lexify AI and Gymnex leveraging Google Gemini API for intelligent generative workflows and structured completions.",
        "Deployed cloud infrastructure on AWS VPC with EC2, RDS MySQL, and NGINX reverse proxies.",
      ],
      skills: ["React.js", "Next.js", "Node.js", "FastAPI", "Docker", "AWS", "MongoDB", "PostgreSQL", "Gemini API"],
      icon: <Code2 className="w-4 h-4 text-zinc-300" />,
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
                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-zinc-200 transition-colors flex items-center gap-2">
                      <span>{exp.role}</span>
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

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-900">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors"
                  >
                    {skill}
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
