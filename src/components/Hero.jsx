import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Server,
  ChevronRight,
  Calendar,
  User,
  Terminal,
  Layout,
  Boxes,
  GitBranch,
} from "lucide-react";

import pfp from '../assets/pfp.png'

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "MERN Stack Expert",
    "Django Developer",
    "Open Source Contributor",
    "Cloud Enthusiast",
  ];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          } else {
            setDisplayText(role.slice(0, displayText.length - 1));
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96  rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="mb-8 animate-scale-in">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500  to-blue-600 p-1 relative group">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-6xl font-bold text-white group-hover:scale-110 transition-transform duration-300 overflow-hidden">
              <img src={pfp} alt="" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-brtransition-opacity"></div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-slide-up">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text animate-gradient">
            Shiva
          </span>
        </h1>

        <div className="text-3xl md:text-5xl text-gray-300 mb-8 h-16 md:h-20 flex items-center justify-center animate-slide-up-delayed">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text font-semibold">
            {displayText}
          </span>
          <span className="animate-blink ml-1 text-cyan-400">|</span>
        </div>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in-up leading-relaxed">
          Passionate full-stack developer specializing in MERN stack and Django,
          with expertise in microservices architecture, cloud technologies, and
          DevOps practices. Open source contributor and freelance developer
          ready to bring your ideas to life.
        </p>

        <div className="flex gap-6 justify-center animate-fade-in-up-delayed">
          <a
            href="#projects"
            className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a
            href="#contact"
            className="px-10 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 border border-gray-800 hover:border-cyan-500"
          >
            Contact Me
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 30px) scale(1.1);
          }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero