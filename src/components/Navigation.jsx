import { useEffect, useState } from "react";

const Navigation = ({ currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (currentView === 'blog-detail') return null;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-lg border-b border-gray-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
            Portfolio
          </div>
          
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Home</a>
            <a href="#skills" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Projects</a>
            <a href="#blog" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Blog</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Contact</a>
          </div>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              <a href="#home" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Home</a>
              <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Skills</a>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Projects</a>
              <a href="#blog" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Blog</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation