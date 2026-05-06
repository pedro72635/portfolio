import { ArrowDown, FileText, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-secondary/20 animate-gradient" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6 backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-green-500 font-medium tracking-wide text-sm md:text-base">Disponible para trabajar</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hola, soy{' '}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient inline-block">
            Pedro Galera
          </span>
        </h1>

        <div className="mb-8 space-y-4">
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Técnico en <strong className="text-white font-semibold">Desarrollo Multiplataforma (DAM)</strong> y Máster en <strong className="text-white font-semibold">Big Data & Inteligencia Artificial</strong>.
          </p>
          
          <p className="text-lg md:text-xl text-secondary/90 max-w-2xl mx-auto italic font-medium">
            "Solucionando problemas del pasado y del futuro."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center mt-20">
          <div className="flex flex-col items-center gap-12 w-full sm:w-64">
            <a
              href="#contact"
              className="group w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-white shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <span>Contactar</span>
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="https://github.com/pedro72635" target="_blank" rel="noopener noreferrer" className="p-6 rounded-full bg-dark-light/50 border border-gray-700 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <FaGithub size={32} />
            </a>
          </div>

          <div className="flex flex-col items-center gap-12 w-full sm:w-64">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full py-4 border-2 border-primary/50 rounded-full font-semibold text-primary hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <FileText size={20} className="group-hover:scale-110 transition-transform" />
              <span>Ver Curriculum</span>
            </a>
            <a href="https://www.linkedin.com/in/pedro-galera-fernandez-a5508936b/" target="_blank" rel="noopener noreferrer" className="p-6 rounded-full bg-dark-light/50 border border-gray-700 hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>

        <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 hover:text-primary transition-colors">
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

