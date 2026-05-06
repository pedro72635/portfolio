import { Mail, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="py-4 border-t border-gray-800">
    <div className="w-full px-4 sm:px-8 lg:px-16 2xl:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">
           {new Date().getFullYear()} Pedro Galera. Todos los derechos reservados.
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/pedro72635" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-dark-light hover:bg-primary/20 text-gray-400 hover:text-primary transition-all">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-dark-light hover:bg-primary/20 text-gray-400 hover:text-primary transition-all">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:tu@email.com" className="p-2 rounded-lg bg-dark-light hover:bg-primary/20 text-gray-400 hover:text-primary transition-all">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
