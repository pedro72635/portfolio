import { ExternalLink, Star } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const projects = [
  {
    title: 'RAG con AnythingLLM',
    description: 'Implementación de un sistema RAG (Retrieval-Augmented Generation) utilizando AnythingLLM y LM Studio.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    github: 'https://github.com/pedro72635/RAG-anythingLLM',
  },
  {
    title: 'Modelos de Machine Learning',
    description: 'Ejercicios y proyectos implementando algoritmos de clasificación, regresión y redes neuronales profundas.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop',
    github: 'https://github.com/pedro72635/ejercicios_machine_learning',
  },
  {
    title: 'Algoritmos Genéticos',
    description: 'Implementación de algoritmos heurísticos inspirados en la evolución natural para problemas de optimización.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=500&fit=crop',
    github: 'https://github.com/pedro72635/algortimo_geneticos',
  },
  {
    title: 'Pipeline ETL Completo',
    description: 'Diseño e implementación de un flujo de extracción, transformación y carga (ETL) para procesamiento de grandes volúmenes de datos.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    github: 'https://github.com/pedro72635/books-pipeline',
  },
  {
    title: 'Servidor MCP IoT con Node-RED',
    description: 'Integración de un servidor Model Context Protocol (MCP) para control de dispositivos IoT utilizando Node-RED.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop',
    github: 'https://github.com/pedro72635/iot_nodered',
  },
];

const ProjectCard = ({ project }) => (
  <div className="group flex flex-col h-full rounded-2xl overflow-hidden bg-dark-light/50 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10">
    <div className="relative overflow-hidden aspect-video">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-dark/90 rounded-full text-white hover:bg-primary transition-colors text-sm font-medium shadow-lg hover:shadow-primary/30"
        >
          <SiGithub size={16} /> Ver Código
        </a>
      </div>
    </div>
    <div className="p-6 flex-1 flex flex-col items-center text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Star className="text-secondary" size={16} />
        <span className="text-sm font-medium text-secondary">
          Proyecto Académico
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{project.title}</h3>
      <p className="text-gray-400 mb-2 text-sm leading-relaxed flex-1">{project.description}</p>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="w-full px-4 sm:px-8 lg:px-16 2xl:px-24 relative">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Proyectos</span>
          </h2>
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg text-center">
            Una selección de mis trabajos académicos y desarrollos personales.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div key={project.title} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
