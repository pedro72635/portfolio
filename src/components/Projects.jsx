import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const projects = [
  {
    title: 'Agente RPA con LangGraph y RAG',
    description: 'Agente autónomo de automatización robótica (RPA) que razona en lenguaje natural, recupera procedimientos via RAG (ChromaDB) y los ejecuta en el navegador con Playwright. Incluye Human-in-the-loop, persistencia SQLite y API FastAPI con logs en tiempo real.',
    github: 'https://github.com/pedro72635/langchain-rpa-agent',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&h=420&fit=crop&q=80',
    tags: ['LangGraph', 'LangChain', 'RAG', 'Playwright', 'FastAPI', 'Python'],
    color: '#a855f7',
    category: 'IA',
  },
  {
    title: 'RAG con AnythingLLM',
    description: 'Sistema RAG (Retrieval-Augmented Generation) con AnythingLLM y LM Studio para consultar documentos privados con modelos de lenguaje locales.',
    github: 'https://github.com/pedro72635/RAG-anythingLLM',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&h=420&fit=crop&q=80',
    tags: ['AnythingLLM', 'LM Studio', 'RAG', 'IA'],
    color: '#7c3aed',
    category: 'IA',
  },
  {
    title: 'Modelos de Machine Learning',
    description: 'Colección de implementaciones de algoritmos de clasificación, regresión y redes neuronales profundas usando Scikit-learn y Python.',
    github: 'https://github.com/pedro72635/ejercicios_machine_learning',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=700&h=420&fit=crop&q=80',
    tags: ['Python', 'Scikit-learn', 'Deep Learning', 'AI'],
    color: '#9f67ff',
    category: 'ML',
  },
  {
    title: 'Ejercicios de Deep Learning',
    description: 'Resolución de problemas prácticos y desarrollo de arquitecturas de redes neuronales, visión artificial (CNN) y procesamiento de lenguaje natural.',
    github: 'https://github.com/pedro72635/deep-learning-ejercicios',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&h=420&fit=crop&q=80',
    tags: ['Deep Learning', 'PyTorch', 'TensorFlow', 'Neural Networks', 'Python'],
    color: '#ec4899',
    category: 'IA',
  },
  {
    title: 'Algoritmos Genéticos',
    description: 'Implementación de algoritmos heurísticos inspirados en la evolución natural para resolver problemas complejos de optimización combinatoria.',
    github: 'https://github.com/pedro72635/algortimo_geneticos',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=700&h=420&fit=crop&q=80',
    tags: ['Python', 'Algoritmos Genéticos', 'Optimización'],
    color: '#06b6d4',
    category: 'IA',
  },
  {
    title: 'Pipeline IoT Medallion',
    description: 'Flujo de datos IoT utilizando arquitectura Medallion (capas Bronze, Silver y Gold) para procesar, limpiar y analizar eventos en tiempo real.',
    github: 'https://github.com/pedro72635/iot-medallion-pipeline',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&h=420&fit=crop&q=80',
    tags: ['Spark', 'Delta Lake', 'IoT', 'Medallion', 'Data Engineering'],
    color: '#f59e0b',
    category: 'Data',
  },
  {
    title: 'Traductor en Vivo con Azure',
    description: 'Traducción de texto y voz en tiempo real utilizando la API y servicios cognitivos en la nube de Azure AI Translator.',
    github: 'https://github.com/pedro72635/traductor-live-azure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&h=420&fit=crop&q=80',
    tags: ['Azure AI', 'APIs', 'Cloud Services', 'Real-time'],
    color: '#3b82f6',
    category: 'Cloud',
  },
  {
    title: 'Sistemas Expertos',
    description: 'Desarrollo de motores de reglas de inferencia y bases de conocimiento lógicas aplicados a la toma de decisiones automatizada.',
    github: 'https://github.com/pedro72635/sistemas_expertos',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=700&h=420&fit=crop&q=80',
    tags: ['Sistemas Expertos', 'Python', 'IA Clásica', 'Lógica'],
    color: '#84cc16',
    category: 'IA',
  },
  {
    title: 'Servidor MCP IoT & Node-RED',
    description: 'Integración de un servidor Model Context Protocol (MCP) para control de dispositivos IoT y domótica avanzada con Node-RED.',
    github: 'https://github.com/pedro72635/iot_nodered',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=420&fit=crop&q=80',
    tags: ['Node-RED', 'IoT', 'MCP', 'Automatización'],
    color: '#10b981',
    category: 'IoT',
  },
];


const ProjectCard = ({ project }) => (
  <div
    className="glass"
    style={{
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      borderRadius: '1.25rem',
    }}
  >
    {/* Image */}
    <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', flexShrink: 0 }}>
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.5s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(5,7,20,0.95) 0%, rgba(5,7,20,0.3) 60%, transparent 100%)',
      }} />
      {/* Category badge */}
      <span style={{
        position: 'absolute',
        top: '0.75rem',
        left: '0.75rem',
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.65rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: project.color,
        background: `${project.color}18`,
        border: `1px solid ${project.color}40`,
        padding: '0.25rem 0.625rem',
        borderRadius: '99px',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}>
        {project.category}
      </span>
    </div>

    {/* Body */}
    <div style={{
      padding: '1.25rem 1.4rem 1.4rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      flex: 1,
    }}>
      {/* Title */}
      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: '1rem',
        fontWeight: 700,
        color: '#fff',
        lineHeight: 1.25,
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.82rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.7,
        flex: 1,
      }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.4rem',
        paddingTop: '0.75rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* GitHub button — always visible, well-spaced */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          padding: '0.625rem 1rem',
          borderRadius: '0.75rem',
          background: `${project.color}14`,
          border: `1px solid ${project.color}35`,
          color: project.color,
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.82rem',
          fontWeight: 700,
          textDecoration: 'none',
          transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
          marginTop: '0.25rem',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = `${project.color}28`;
          e.currentTarget.style.boxShadow = `0 0 18px ${project.color}30`;
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = `${project.color}14`;
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <SiGithub size={15} style={{ flexShrink: 0 }} />
        <span>Ver en GitHub</span>
        <ExternalLink size={12} style={{ flexShrink: 0 }} />
      </a>
    </div>
  </div>
);

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section" ref={sectionRef}
      style={{ background: 'linear-gradient(180deg, var(--bg-2) 0%, var(--bg) 100%)' }}
    >
      {/* Ambient */}
      <div className="orb" style={{
        width: 450, height: 450,
        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        left: '-5%', bottom: '10%', filter: 'blur(80px)',
      }} />
      <div className="orb" style={{
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
        right: '-5%', top: '20%', filter: 'blur(80px)',
      }} />

      <div className="container">
        {/* Header */}
        <div className="section-heading reveal">
          <span className="section-label">Portfolio</span>
          <h2>Mis <span className="gradient-text">Proyectos</span></h2>
          <div className="divider" />
          <p>Trabajos académicos y desarrollos personales en Inteligencia Artificial, Big Data e IoT.</p>
        </div>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          alignItems: 'start',
        }}>
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal"
              style={{
                animationDelay: `${i * 0.1}s`,
                height: '100%',
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal" style={{
          marginTop: '3rem',
          textAlign: 'center',
        }}>
          <a
            href="https://github.com/pedro72635"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: 'inline-flex' }}
          >
            <SiGithub size={17} style={{ flexShrink: 0 }} />
            <span>Ver todos en GitHub</span>
            <ExternalLink size={14} style={{ flexShrink: 0 }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
