import { useState } from "react";
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, Server, ChevronRight, Calendar, User, Terminal, Layout, Boxes, GitBranch } from 'lucide-react';


const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      category: 'Backend',
      icon: <Server className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'Django', level: 90 },
        { name: 'FastAPI', level: 85 },
        { name: 'Python', level: 92 },
        { name: 'REST APIs', level: 88 }
      ]
    },
    {
      category: 'Frontend',
      icon: <Layout className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      items: [
        { name: 'Next.js', level: 85 },
        { name: 'React', level: 90 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'JavaScript', level: 87 }
      ]
    },
    {
      category: 'Database',
      icon: <Database className="w-8 h-8" />,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'Redis', level: 78 },
        { name: 'SQL', level: 88 }
      ]
    },
    {
      category: 'DevOps/Cloud',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-cyan-600 to-blue-600',
      items: [
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'CI/CD', level: 82 },
        { name: 'Linux', level: 87 }
      ]
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="skills">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-slide-up">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Card */}
              <div className="relative bg-gray-950 p-8 rounded-2xl border border-gray-800 group-hover:border-cyan-500 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 h-full">
                {/* Icon with Gradient Background */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${skill.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {skill.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{skill.category}</h3>
                
                {/* Skill Items with Progress Bars */}
                <div className="space-y-4">
                  {skill.items.map((item, i) => (
                    <div key={i} className="group/item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{item.name}</span>
                        <span className="text-cyan-400 text-sm font-semibold">{item.level}%</span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: hoveredSkill === index ? `${item.level}%` : '0%',
                            transitionDelay: `${i * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {['Git', 'GitHub Actions', 'Nginx', 'GraphQL', 'WebSockets', 'Celery', 'RabbitMQ', 'Kubernetes', 'Terraform'].map((tech, i) => (
              <span 
                key={i} 
                className="px-6 py-2 bg-gray-900 text-cyan-400 rounded-full border border-gray-800 hover:border-cyan-500 hover:bg-gray-800 transition-all transform hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills