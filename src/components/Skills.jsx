import { useEffect, useRef } from 'react';
import { Brain, Database, MonitorSmartphone, Server } from 'lucide-react';
import {
  SiPython, SiDotnet, SiReact, SiApachespark, SiDocker, SiPandas,
  SiScikitlearn, SiNodedotjs,
} from 'react-icons/si';

const categories = [
  {
    name: 'Inteligencia Artificial',
    icon: Brain,
    color: '#7c3aed',
    skills: [
      { name: 'Python',          icon: SiPython },
      { name: 'Scikit-learn',    icon: SiScikitlearn },
      { name: 'LangChain',       icon: null },
      { name: 'LM Studio',       icon: null },
      { name: 'Redes Neuronales', icon: null },
      { name: 'Alg. Genéticos',  icon: null },
    ],
  },
  {
    name: 'Big Data & Analytics',
    icon: Database,
    color: '#06b6d4',
    skills: [
      { name: 'Apache Spark', icon: SiApachespark },
      { name: 'Pandas',       icon: SiPandas },
      { name: 'HDFS',         icon: null },
      { name: 'Matplotlib',   icon: null },
      { name: 'Seaborn',      icon: null },
      { name: 'ETL Pipelines', icon: null },
    ],
  },
  {
    name: 'Desarrollo Multiplataforma',
    icon: MonitorSmartphone,
    color: '#f59e0b',
    skills: [
      { name: 'C# / MAUI',     icon: null },
      { name: 'WPF',           icon: null },
      { name: '.NET',          icon: SiDotnet },
      { name: 'Java',          icon: null },
      { name: 'React Native',  icon: SiReact },
      { name: 'React',         icon: SiReact },
    ],
  },
  {
    name: 'DevOps & Integración',
    icon: Server,
    color: '#10b981',
    skills: [
      { name: 'Docker',        icon: SiDocker },
      { name: 'Node-RED',      icon: SiNodedotjs },
      { name: 'Servidores MCP', icon: null },
      { name: 'IoT',           icon: null },
      { name: 'Git',           icon: null },
      { name: 'GitHub',        icon: null },
    ],
  },
];

const SkillTag = ({ skill, color }) => {
  const Icon = skill.icon;
  return (
    <span
      className="tag"
      style={{ cursor: 'default' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${color}60`;
        e.currentTarget.style.color = '#fff';
        e.currentTarget.style.background = `${color}12`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        e.currentTarget.style.color = 'var(--text-secondary)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
      }}
    >
      {Icon && <Icon style={{ fontSize: '0.8rem', flexShrink: 0 }} />}
      {skill.name}
    </span>
  );
};

const Skills = () => {
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
    <section id="skills" className="section" ref={sectionRef} style={{ background: 'var(--bg)' }}>
      {/* Ambient */}
      <div className="orb" style={{
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
        right: '-8%', top: '30%', filter: 'blur(80px)',
      }} />

      <div className="container">
        {/* Header */}
        <div className="section-heading reveal">
          <span className="section-label">Tecnologías</span>
          <h2>Mis <span className="gradient-text">Habilidades</span></h2>
          <div className="divider" />
          <p>Tecnologías y herramientas clave especializadas a lo largo de mi trayectoria académica y profesional.</p>
        </div>

        {/* Categories grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
        }}>
          {categories.map((cat, i) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={cat.name}
                className="reveal glass"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Category header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: 42, height: 42,
                    borderRadius: '0.75rem',
                    background: `${cat.color}18`,
                    border: `1px solid ${cat.color}35`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <CatIcon size={20} style={{ color: cat.color }} />
                  </div>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1.2,
                  }}>
                    {cat.name}
                  </h3>
                </div>

                {/* Skill tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}>
                  {cat.skills.map(skill => (
                    <SkillTag key={skill.name} skill={skill} color={cat.color} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
