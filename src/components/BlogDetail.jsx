import React from 'react'
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, Server, ChevronRight, Calendar, User, Terminal, Layout, Boxes, GitBranch } from 'lucide-react';

const BlogDetail = ({ blog, onBack }) => {
  return (
    <div className="min-h-screen bg-black py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group"
        >
          <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </button>
        
        <div className="bg-gray-950 rounded-2xl p-8 md:p-12 border border-gray-800">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {blog.author}
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{blog.title}</h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {blog.tags.map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-gray-900 text-cyan-400 text-sm rounded-full border border-gray-800">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="prose prose-invert prose-cyan max-w-none">
            <div className="text-gray-300 leading-relaxed whitespace-pre-wrap text-lg">
              {blog.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail