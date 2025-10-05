import { useState } from "react";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setCurrentView('blog-detail');
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setCurrentView('home');
    setSelectedBlog(null);
    setTimeout(() => {
      document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation currentView={currentView} />
      
      {currentView === 'home' ? (
        <>
          <div id="home">
            <Hero/>
          </div>
          <Skills/>
          <Projects />
          <Blog onReadMore={handleReadMore} />
          <Contact />
          <Footer />
        </>
      ) : (
        <BlogDetail blog={selectedBlog} onBack={handleBackToBlog} />
      )}
      
      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-scale-in {
          animation: scale-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-up-delayed {
          animation: slide-up 0.8s ease-out 0.3s backwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.5s backwards;
        }
        
        .animate-fade-in-up-delayed {
          animation: fade-in-up 0.8s ease-out 0.7s backwards;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </div>
  );
}


export default App