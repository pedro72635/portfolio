import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Contacto', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg shadow-primary/10' : 'bg-transparent'
    }`}>
      <div className="w-full px-4 sm:px-8 lg:px-16 2xl:px-24">
        <div className="flex justify-between items-center h-20">
          <div className="w-1/4 flex justify-start">
            <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-wide">
              Portfolio
            </a>
          </div>

          <div className="hidden md:flex w-2/4 justify-center items-center gap-8 lg:gap-16">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors duration-200 font-medium tracking-wide text-sm uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex w-1/4 justify-end items-center space-x-6">
            <a href="https://github.com/pedro72635" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors hover:scale-110">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors hover:scale-110">
              <FaLinkedin size={20} />
            </a>
            <a href="#contact" className="text-gray-300 hover:text-primary transition-colors hover:scale-110">
              <Mail size={20} />
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 flex justify-end w-3/4">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-light/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-6 pt-4 border-t border-gray-700">
              <a href="https://github.com/pedro72635" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary">
                <FaLinkedin size={24} />
              </a>
              <a href="#contact" className="text-gray-300 hover:text-primary">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
