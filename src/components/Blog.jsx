import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, Server, ChevronRight, Calendar, User, Terminal, Layout, Boxes, GitBranch } from 'lucide-react';

const Blog = ({ onReadMore }) => {
  const [blogs] = useState([
    {
      id: 1,
      title: 'How to Create a Django Project on Windows',
      excerpt: 'Django is a Python-based web framework that is used for powerful and fast development. If you want to create a Django project on Windows, then follow the steps given below.',
      date: '2025-10-10',
      author: 'Shiva',
      readTime: '15 min read',
      tags: ['Django', 'Python', 'Backend',],
  
      
    },
    {
      id: 2,
      title: 'Why Every Begineer Should Learn Numpy?',
      excerpt: "NumPy is a Python library used to perform fast and powerful mathematical operations with arrays.It’s used in fields like data science, machine learning, image processing, and statistics.",
      date: '2025-10-07',
      author: 'Shiva',
      readTime: '10 min read',
      tags: ['Nmpy', 'Python', 'Jupyter'],
    
      
    },
    {
      id: 3,
      title: 'What is Linux & Ubuntu? Learn Linux and his Command On Windows',
      excerpt: 'Linux is an operating system or rather a brain that controls everything inside your computer.',
      date: '2025-10-18',
      author: 'Shiva',
      readTime: '20',
      tags: ['Linux', 'Operating-System', 'DevOps', 'Docker',],
 
    }
  ]);

  return (
    <section className="py-24 bg-black" id="blog">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Latest <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Blog Posts</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing my knowledge and experiences in web development, databases, and DevOps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={blog.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 rounded-2xl"></div>
              
              {/* Card */}
              <div className="relative bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 group-hover:border-cyan-500 transition-all duration-500 transform group-hover:scale-105 h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3 flex-1">{blog.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-900 text-cyan-400 text-xs rounded-full border border-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => onReadMore(blog)}
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold group/btn"
                  >
                    <a href="https://medium.com/@shivasingh.1dev">Read More</a>
                    
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog