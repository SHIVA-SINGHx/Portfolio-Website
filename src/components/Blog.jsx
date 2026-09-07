import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight, BookOpen } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "How to Create a Django Project on Windows",
      excerpt:
        "Comprehensive step-by-step developer tutorial covering Python virtual environments, pip dependencies, Django project creation, and local server startup on Windows.",
      date: "Oct 2025",
      readTime: "15 min read",
      tags: ["Django", "Python", "Backend"],
      url: "https://medium.com/@shivasingh.1dev",
    },
    {
      id: 2,
      title: "Why Every Beginner Should Learn NumPy",
      excerpt:
        "An intuitive breakdown of vectorized numerical computing, multi-dimensional array manipulation, and memory optimization with NumPy for modern Python developers.",
      date: "Oct 2025",
      readTime: "10 min read",
      tags: ["NumPy", "Python", "Data Science"],
      url: "https://medium.com/@shivasingh.1dev",
    },
    {
      id: 3,
      title: "What is Linux & Ubuntu? Terminal & Commands for Windows Devs",
      excerpt:
        "Demystifying the Linux kernel, core shell scripting utilities, file permissions, and environment setup for developers bridging the gap between Windows and Linux cloud hosts.",
      date: "Oct 2025",
      readTime: "20 min read",
      tags: ["Linux", "DevOps", "Docker", "Terminal"],
      url: "https://medium.com/@shivasingh.1dev",
    },
  ];

  return (
    <section id="articles" className="py-16 md:py-20 border-b border-zinc-900">
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
              Publications & Writing
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Technical Writing
            </h2>
          </div>

          <a
            href="https://medium.com/@shivasingh.1dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <span>5+ Articles on Medium</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Articles Grid with Motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((article, idx) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={{ y: -3 }}
              className="p-5 sm:p-6 rounded-2xl bg-zinc-950 border border-zinc-850 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white group-hover:text-zinc-200 transition-colors mb-2 leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-850 text-[10px] font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" /> Read on Medium
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;