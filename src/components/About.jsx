import { useEffect, useRef } from 'react';
import { Brain, Database, MonitorSmartphone, Network, GraduationCap, Calendar } from 'lucide-react';

const stats = [
  { value: '2',   label: 'Títulos Oficiales' },
  { value: '10+', label: 'Proyectos Prácticos' },
  { value: '15+', label: 'Tecnologías' },
];

const highlights = [
  { icon: Brain,             title: 'Inteligencia Artificial',    desc: 'Machine & Deep Learning, LangChain, LM Studio, Scikit-learn y Algoritmos Genéticos.', color: '#7c3aed' },
  { icon: Database,          title: 'Big Data & Analytics',       desc: 'Pipelines ETL completos, Apache Spark, HDFS, Pandas, Matplotlib y Seaborn.', color: '#06b6d4' },
  { icon: MonitorSmartphone, title: 'Desarrollo Multiplataforma', desc: 'C# (MAUI/WPF), Java, React Native e interfaces para múltiples plataformas.', color: '#f59e0b' },
  { icon: Network,           title: 'IoT & Automatización',       desc: 'Servidores MCP, Node-RED, integración de hardware y control de dispositivos.', color: '#10b981' },
];

const education = [
  {
    icon: GraduationCap,
    degree: 'Máster en Big Data & Inteligencia Artificial',
    period: '2024 – 2025',
    badge: 'Máster',
    color: '#7c3aed',
  },
  {
    icon: GraduationCap,
    degree: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
    period: '2022 – 2024',
    badge: 'FP Superior',
    color: '#06b6d4',
  },
];

const About = () => {
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
    <section id="about" className="section" ref={sectionRef} style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%)' }}>
      {/* Ambient */}
      <div className="orb" style={{
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
        left: '-5%', top: '20%', filter: 'blur(70px)',
      }} />

      <div className="container">
        {/* Header */}
        <div className="section-heading reveal">
          <span className="section-label">Quién soy</span>
          <h2>Sobre <span className="gradient-text">mí</span></h2>
          <div className="divider" />
          <p>Apasionado por la innovación, los datos y la creación de soluciones tecnológicas de alto impacto.</p>
        </div>

        {/* Top row: avatar + bio + stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
          alignItems: 'start',
        }}>
          {/* Avatar */}
          <div className="reveal glass" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2.5rem 1.5rem',
            gap: '1rem',
          }}>
            <div style={{
              width: 100, height: 100,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Syne', sans-serif",
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#fff',
              boxShadow: '0 0 40px rgba(124,58,237,0.4)',
              flexShrink: 0,
            }}>
              PG
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#fff',
                marginBottom: '0.25rem',
              }}>
                Pedro Galera Fernández
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem',
                color: 'var(--primary-light)',
                fontWeight: 500,
              }}>
                Data & AI Developer
              </p>
            </div>
            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.75rem',
              width: '100%',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}>
              {stats.map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, var(--primary-light), var(--secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: '0.3rem',
                  }}>{s.value}</div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.65rem',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    lineHeight: 1.3,
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio text */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', animationDelay: '0.15s' }}>
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.2,
            }}>
              Apasionado por la innovación y los datos
            </h3>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
            }}>
              Soy un entusiasta de la tecnología enfocado en el desarrollo continuo. Mi base como Técnico en{' '}
              <strong style={{ color: '#fff' }}>Desarrollo Multiplataforma (DAM)</strong>{' '}
              me proporciona una lógica analítica muy sólida, mientras que mi Máster en{' '}
              <strong style={{ color: '#fff' }}>Big Data e Inteligencia Artificial</strong>{' '}
              me dota de las herramientas avanzadas para liderar proyectos del mañana.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
            }}>
              Ya sea entrenando modelos de Deep Learning, construyendo pipelines ETL optimizados o integrando sistemas complejos con servidores MCP y Node-RED, pongo todo mi empeño en crear soluciones escalables, limpias y de alto rendimiento.
            </p>

            {/* Education timeline */}
            <div style={{ marginTop: '0.5rem' }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}>
                Formación
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {education.map((ed, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.875rem',
                      padding: '0.875rem 1rem',
                      borderRadius: '0.875rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${ed.color}22`,
                    }}
                  >
                    <div style={{
                      width: 36, height: 36,
                      borderRadius: '0.6rem',
                      background: `${ed.color}18`,
                      border: `1px solid ${ed.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <ed.icon size={16} style={{ color: ed.color }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#fff',
                        lineHeight: 1.35,
                        marginBottom: '0.35rem',
                      }}>
                        {ed.degree}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.25rem',
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.7rem',
                          color: 'var(--text-muted)',
                          fontWeight: 500,
                        }}>
                          <Calendar size={11} />
                          {ed.period}
                        </span>
                        <span style={{
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          color: ed.color,
                          background: `${ed.color}18`,
                          border: `1px solid ${ed.color}30`,
                          padding: '0.1rem 0.5rem',
                          borderRadius: '99px',
                          fontFamily: "'Inter', sans-serif",
                          whiteSpace: 'nowrap',
                        }}>
                          {ed.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
        }}>
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="reveal glass"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div style={{
                width: 44, height: 44,
                borderRadius: '0.75rem',
                background: `${h.color}18`,
                border: `1px solid ${h.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <h.icon size={20} style={{ color: h.color }} />
              </div>
              <div>
                <h4 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '0.4rem',
                  lineHeight: 1.2,
                }}>
                  {h.title}
                </h4>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
