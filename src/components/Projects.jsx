import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, Server, ChevronRight, Calendar, User, Terminal, Layout, Boxes, GitBranch } from 'lucide-react';

 const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform built with Django, PostgreSQL, and Next.js. Features include payment integration, inventory management, and real-time updates.',
      tech: ['Django', 'Next.js', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/SHIVA-SINGHx',
      live: '#',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      title: 'API Gateway Service',
      description: 'High-performance API gateway built with FastAPI. Includes rate limiting, authentication, and microservices orchestration.',
      tech: ['FastAPI', 'MongoDB', 'Docker', 'Redis'],
      github: 'https://github.com/SHIVA-SINGHx',
      live: '#',
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      id: 3,
      title: 'DevOps Dashboard',
      description: 'Real-time monitoring dashboard for cloud infrastructure. Features deployment tracking, resource monitoring, and automated alerts.',
      tech: ['React', 'FastAPI', 'AWS', 'Docker'],
      github: 'https://github.com/SHIVA-SINGHx',
      live: '#',
      gradient: 'from-blue-500 to-cyan-500'
    }
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
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 rounded-2xl`}></div>
              
              {/* Card */}
              <div className="relative bg-black rounded-2xl overflow-hidden border border-gray-800 group-hover:border-cyan-500 transition-all duration-500 transform group-hover:scale-105 h-full flex flex-col">
                {/* Image/Icon Section */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <Code className="w-20 h-20 text-white opacity-30 group-hover:opacity-50 transition-opacity group-hover:scale-110 transform duration-500" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-1">{project.description}</p>
                  
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