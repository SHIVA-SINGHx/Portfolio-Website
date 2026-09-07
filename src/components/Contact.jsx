import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  MessageSquare,
  MapPin,
  BookOpen,
} from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const emailAddress = "shivasingh.1dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const contactLinks = [
    {
      name: "Direct Email",
      label: emailAddress,
      href: `mailto:${emailAddress}`,
      icon: <Mail className="w-4 h-4 text-zinc-300" />,
      external: false,
    },
    {
      name: "GitHub",
      label: "@SHIVA-SINGHx",
      href: "https://github.com/SHIVA-SINGHx",
      icon: <Github className="w-4 h-4 text-zinc-300" />,
      external: true,
    },
    {
      name: "LinkedIn",
      label: "Shiva Singh",
      href: "https://www.linkedin.com/in/shiva-singh-b2104a373/",
      icon: <Linkedin className="w-4 h-4 text-zinc-300" />,
      external: true,
    },
    {
      name: "X (Twitter)",
      label: "@Shivatwd1",
      href: "https://x.com/Shivatwd1",
      icon: <Twitter className="w-4 h-4 text-zinc-300" />,
      external: true,
    },
    {
      name: "Medium",
      label: "@shivasingh.1dev",
      href: "https://medium.com/@shivasingh.1dev",
      icon: <BookOpen className="w-4 h-4 text-zinc-300" />,
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-1">
            Communication
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-xl">
            Available for full-time engineering roles, freelance cloud & full-stack development, and technical writing projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Column: Direct channels & Quick Copy */}
          <div className="md:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 rounded-2xl bg-zinc-950 border border-zinc-850 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  Direct Contact
                </span>
                <p className="text-sm text-white font-medium mb-3">
                  Reach out directly via email
                </p>
                <div className="space-y-1 mb-4 text-xs font-mono text-zinc-400">
                  <p className="flex items-center gap-1.5 text-zinc-300">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" /> Remote
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-200 transition-all active:scale-[0.98]"
                >
                  <span className="truncate">{emailAddress}</span>
                  {copied ? (
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold shrink-0">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-zinc-400 shrink-0">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-semibold font-mono transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Mail App</span>
                </a>
              </div>
            </motion.div>

            {/* Social Channels List */}
            <div className="space-y-2">
              {contactLinks.slice(1).map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ y: -1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-850 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-medium text-white group-hover:text-zinc-200 block">
                        {item.name}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {item.label}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column: Minimalist Message Form with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-3"
          >
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950 border border-zinc-850">
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-zinc-900">
                <MessageSquare className="w-4 h-4 text-zinc-400" />
                <h3 className="text-sm font-semibold text-white">Send a Message</h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-zinc-900/80 border border-zinc-700 text-center space-y-2 animate-in fade-in duration-300">
                  <div className="w-8 h-8 mx-auto rounded-full bg-emerald-950 border border-emerald-700 flex items-center justify-center text-emerald-400">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Message Dispatched</h4>
                  <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                    Thank you! Your message has been sent directly to Shiva.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Describe your project, timeline, or query..."
                      className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-100 hover:bg-white text-black text-xs font-semibold font-mono transition-all active:scale-[0.99] shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;