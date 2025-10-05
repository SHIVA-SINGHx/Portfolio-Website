import React from 'react'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, Server, ChevronRight, Calendar, User, Terminal, Layout, Boxes, GitBranch, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-4">
            Shiva's Portfolio
          </div>
          <p className="text-gray-400">Built with React & Tailwind CSS</p>
        </div>
        
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/SHIVA-SINGHx" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/shiva-singh-b2104a373/" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://x.com/Shivatwd1" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="shivasingh.1dev@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-gray-500 text-center text-sm">© 2024 Shiva. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer
