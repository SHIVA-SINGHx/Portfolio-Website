import React from 'react'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, Server, ChevronRight, Calendar, User, Terminal, Layout, Boxes, GitBranch } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-gray-950" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="shivasingh.1dev@gmail.com" className="group relative bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500 transition-all text-center transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl"></div>
              <Mail className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform relative z-10" />
              <h3 className="text-white font-semibold mb-2 relative z-10">Email</h3>
              <p className="text-gray-400 text-sm relative z-10">shivasingh.1dev@gmail.com</p>
            </a>
            
            <a href="https://github.com/SHIVA-SINGHx" target="_blank" rel="noopener noreferrer" className="group relative bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500 transition-all text-center transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl"></div>
              <Github className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform relative z-10" />
              <h3 className="text-white font-semibold mb-2 relative z-10">GitHub</h3>
              <p className="text-gray-400 text-sm relative z-10">@SHIVA-SINGHx</p>
            </a>
            
            <a href="https://www.linkedin.com/in/shiva-singh-b2104a373/" target="_blank" rel="noopener noreferrer" className="group relative bg-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500 transition-all text-center transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity rounded-2xl"></div>
              <Linkedin className="w-10 h-10 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform relative z-10" />
              <h3 className="text-white font-semibold mb-2 relative z-10">LinkedIn</h3>
              <p className="text-gray-400 text-sm relative z-10">Shiva Singh</p>
            </a>
          </div>
          
          <div className="relative bg-gray-950 p-8 md:p-10 rounded-2xl border border-gray-800">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 hover:opacity-5 blur-xl transition-opacity rounded-2xl pointer-events-none"></div>
            <div className="space-y-6 relative z-10">
              <div>
                <label className="block text-white mb-2 font-semibold text-sm">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors placeholder-gray-600" placeholder="Your name" />
              </div>
              
              <div>
                <label className="block text-white mb-2 font-semibold text-sm">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors placeholder-gray-600" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="block text-white mb-2 font-semibold text-sm">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors resize-none placeholder-gray-600" placeholder="Your message..."></textarea>
              </div>
              
              <button type="button" className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 relative overflow-hidden group">
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact