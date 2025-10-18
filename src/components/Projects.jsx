import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, Server, ChevronRight, Calendar, User, Terminal, Layout, Boxes, GitBranch } from 'lucide-react';
import gymnexImage from '../assets/gymnex.png'; 


// Projects Component
const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Gymnex - AI Fitness Assistant',
      description: 'A full-stack AI-powered fitness assistant that helps users manage their fitness goals with personalized workout plans and nutrition tracking.',
      longDescription: 'Gymnex leverages Google Gemini API to provide intelligent fitness recommendations. Built with modern web technologies, it features real-time data synchronization, user authentication with Clerk, and a beautiful UI with Shadcn components.',
      tech: ['Next.js', 'Gemini API', 'MongoDB', 'Clerk', 'Shadcn-UI', 'Tailwind CSS'],
      github: 'https://github.com/SHIVA-SINGHx/Gymnex',
      live: 'https://gymnex.vercel.app/',
      gradient: 'from-blue-600 to-cyan-600',
      image: gymnexImage,
      highlights: ['AI-Powered Recommendations', 'Real-time Sync', 'Secure Auth', 'Beautiful UI']
    },
    // {
    //   id: 2,
    //   title: 'API Gateway Service',
    //   description: 'High-performance API gateway built with FastAPI. Includes rate limiting, authentication, and microservices orchestration.',
    //   tech: ['FastAPI', 'MongoDB', 'Docker', 'Redis'],
    //   github: 'https://github.com/SHIVA-SINGHx',
    //   live: '#',
    //   gradient: 'from-cyan-600 to-blue-600',
    //   image: null
    // },
    // {
    //   id: 3,
    //   title: 'DevOps Dashboard',
    //   description: 'Real-time monitoring dashboard for cloud infrastructure. Features deployment tracking, resource monitoring, and automated alerts.',
    //   tech: ['React', 'FastAPI', 'AWS', 'Docker'],
    //   github: 'https://github.com/SHIVA-SINGHx',
    //   live: '#',
    //   gradient: 'from-blue-500 to-cyan-500',
    //   image: null
    // }
  ]);

  return (
    <section className="py-24 bg-gray-950" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing full-stack development, API design, and cloud deployment.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative ${project.image ? 'lg:col-span-2 md:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 rounded-2xl`}></div>
              
              {/* Card */}
              <div className="relative bg-black rounded-2xl overflow-hidden border border-gray-800 group-hover:border-cyan-500 transition-all duration-500 transform group-hover:scale-105 h-full flex flex-col">
                {/* Image/Icon Section */}
                <div className={`${project.image ? 'h-80' : 'h-48'} bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  {project.image ? (
                    <>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                      {/* Overlay Badge */}
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold text-sm">
                        Featured Project
                      </div>
                    </>
                  ) : (
                    <>
                      <Code className="w-20 h-20 text-white opacity-30 group-hover:opacity-50 transition-opacity group-hover:scale-110 transform duration-500" />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </>
                  )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">{project.description}</p>
                  
                  {project.highlights && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((highlight, i) => (
                        <span key={i} className="px-3 py-1 text-xs bg-gradient-to-r from-blue-900 to-cyan-900 text-cyan-300 rounded-full border border-cyan-700">
                          ✓ {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-1.5 bg-gray-900 text-cyan-400 text-xs rounded-full border border-gray-800 hover:border-cyan-500 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a href={project.github} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-cyan-400 transition-all group/btn border border-gray-800 hover:border-cyan-500">
                      <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a href={project.live} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all group/btn">
                      <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects