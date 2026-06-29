import { useState } from 'react';
import { X, Briefcase, GraduationCap, Mail, Phone, Download, Code, Award, Calendar } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('trayectoria');

  if (!isOpen) return null;

  const contactInfo = [
    { icon: Phone, label: 'Teléfono', value: '684347454', href: 'tel:684347454' },
    { icon: Mail, label: 'Email', value: 'pedro.galera3031@gmail.com', href: 'mailto:pedro.galera3031@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'Pedro Galera Fernández', href: 'https://www.linkedin.com/in/pedro-galera-fernandez-a5508936b/' },
    { icon: FaGithub, label: 'GitHub', value: 'github.com/pedro72635', href: 'https://github.com/pedro72635' },
  ];

  const experience = [
    {
      role: 'Programador en Prácticas',
      company: 'Binding Software',
      period: 'Marzo 2025 – Junio 2025',
      points: [
        'Desarrollo de aplicaciones Android.',
        'Diseño e implementación de interfaces de usuario.',
      ]
    }
  ];

  const education = [
    {
      degree: 'Curso de Especialización en Inteligencia Artificial y Big Data',
      school: 'CIFP Carlos III',
      period: '2025 – 2026',
      desc: 'Formación avanzada especializada en el desarrollo y despliegue de soluciones cognitivas, procesamiento de grandes volúmenes de datos y modelos predictivos.'
    },
    {
      degree: 'Desarrollo de Aplicaciones Multiplataforma (DAM)',
      school: 'CIFP Carlos III',
      period: '2023 – 2025',
      desc: 'Enfoque técnico en programación orientada a objetos, bases de datos y desarrollo de sistemas de software multiplataforma.'
    }
  ];

  const projectsIA = [
    {
      name: 'Desarrollo de Agentes Autónomos y RAG',
      desc: 'Implementación de flujos RPA mediante LangChain/LangGraph y Playwright. Integración de sistemas RAG (Retrieval-Augmented Generation) en aplicaciones utilizando AnythingLLM y modelos locales.'
    },
    {
      name: 'Entrenamiento y Optimización de Modelos',
      desc: 'Uso de Scikit-learn y Keras para entrenar modelos simples, CNN y RNN. Aplicación de técnicas de fine-tuning sobre modelos preentrenados.'
    },
    {
      name: 'Sistemas Predictivos y de Asignación',
      desc: 'Desarrollo de sistemas expertos utilizando modelos ARIMA para series temporales y algoritmos genéticos para la resolución de problemas complejos de asignación.'
    },
    {
      name: 'IoT e Integración Cloud',
      desc: 'Creación de sistemas de control IoT con IA integrada mediante Node-RED, N8N y despliegue de servicios en la nube de Microsoft Azure.'
    }
  ];

  const projectsBigData = [
    {
      name: 'Implementación de Data Lake (Arquitectura Medallón)',
      desc: 'Diseño de un proyecto de datos completo usando repositorios HDFS y MinIO. Orquestación del pipeline con Apache Airflow y procesamiento mediante PySpark.'
    },
    {
      name: 'Procesamiento ETL y Web Scraping',
      desc: 'Creación de pipelines de extracción de datos mediante scrapers (Selenium) y transformación/manipulación utilizando Pandas.'
    },
    {
      name: 'Análisis Visual de Datos',
      desc: 'Exploración, manipulación y visualización avanzada de datos (Pandas, Polars, Matplotlib, Seaborn) y creación de dashboards interactivos con Apache Superset.'
    }
  ];

  const skillsGrouped = [
    { category: 'Inteligencia Artificial', items: ['Machine Learning', 'Deep Learning', 'MCP', 'RAG', 'Sistemas Expertos', 'LangChain / LangGraph'] },
    { category: 'Big Data', items: ['ETL', 'Pandas', 'Seaborn', 'PySpark', 'HDFS', 'Apache Airflow'] },
    { category: 'Automatizaciones', items: ['N8N', 'Playwright', 'Selenium'] }
  ];

  const softSkills = ['Trabajo en equipo', 'Capacidad de adaptación', 'Aprendizaje rápido', 'Resolución de problemas'];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(5, 7, 20, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.25rem',
      animation: 'fade-in 0.25s ease-out',
    }}>
      {/* Modal Box */}
      <div 
        className="glass"
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          background: 'var(--bg-2)',
          border: '1px solid var(--border-hover)',
          borderRadius: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 10,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.borderColor = 'var(--primary-light)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{
          padding: '2.5rem 2rem 1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          background: 'linear-gradient(135deg, rgba(13,148,136,0.05) 0%, transparent 100%)',
        }}>
          <span className="section-label" style={{ marginBottom: '0.5rem' }}>Curriculum Vitae</span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '2rem',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '0.25rem',
          }}>
            Pedro Galera
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.9rem',
            color: 'var(--primary-light)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1.25rem',
          }}>
            Desarrollador de Software, Inteligencia Artificial y Big Data
          </p>

          {/* Contact Details Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '0.75rem',
            marginTop: '1rem',
          }}>
            {contactInfo.map((info, i) => {
              const IconComp = info.icon;
              return (
                <a
                  key={i}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontFamily: "'Inter', sans-serif",
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <IconComp size={14} style={{ color: 'var(--primary-light)', flexShrink: 0 }} />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{info.value}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          background: 'rgba(5, 7, 20, 0.4)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          padding: '0 1.5rem',
        }}>
          {[
            { id: 'trayectoria', label: 'Trayectoria & Formación', icon: Briefcase },
            { id: 'proyectos', label: 'Proyectos Destacados', icon: Code },
            { id: 'habilidades', label: 'Tecnologías y Skills', icon: Award },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 1.25rem',
                  border: 'none',
                  background: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--primary-light)' : 'var(--text-secondary)',
                  borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div style={{
          padding: '2rem',
          overflowY: 'auto',
          flex: 1,
        }}>
          {activeTab === 'trayectoria' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Resumen */}
              <div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '0.75rem',
                }}>
                  Mi Perfil
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  Desarrollador de software especializado en Inteligencia Artificial y Big Data. Aporto una base sólida en desarrollo multiplataforma combinada con experiencia práctica en la creación de pipelines de datos (ETL, Arquitectura Medallón) y el despliegue de soluciones de IA (RAG, Agentes Autónomos). Orientado a la resolución de problemas complejos mediante la automatización y el análisis de datos.
                </p>
              </div>

              {/* Experiencia */}
              <div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  <Briefcase size={16} style={{ color: 'var(--primary)' }} />
                  Experiencia Laboral
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {experience.map((exp, idx) => (
                    <div key={idx} style={{
                      padding: '1.1rem 1.25rem',
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      borderRadius: '0.75rem',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div>
                          <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', fontWeight: 700, color: '#fff' }}>
                            {exp.role} · <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 500 }}>{exp.company}</span>
                          </h4>
                        </div>
                        <span style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          color: 'var(--primary-light)',
                          background: 'rgba(13,148,136,0.1)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '0.5rem',
                        }}>{exp.period}</span>
                      </div>
                      <ul style={{ paddingLeft: '1.2rem', margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} style={{ marginBottom: '0.25rem' }}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formación */}
              <div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem',
                }}>
                  <GraduationCap size={16} style={{ color: 'var(--primary)' }} />
                  Formación Académica
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {education.map((edu, idx) => (
                    <div key={idx} style={{
                      padding: '1.1rem 1.25rem',
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      borderRadius: '0.75rem',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                        <div>
                          <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{edu.degree}</h4>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{edu.school}</span>
                        </div>
                        <span style={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          color: 'var(--primary-light)',
                          background: 'rgba(13,148,136,0.1)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '0.5rem',
                          whiteSpace: 'nowrap',
                        }}>{edu.period}</span>
                      </div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{edu.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'proyectos' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* Inteligencia Artificial */}
              <div>
                <h4 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--primary-light)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  paddingBottom: '0.4rem',
                  marginBottom: '1rem',
                }}>
                  Inteligencia Artificial
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem' }}>
                  {projectsIA.map((proj, idx) => (
                    <div key={idx} style={{
                      padding: '1rem 1.15rem',
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      borderRadius: '0.65rem',
                    }}>
                      <strong style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#fff', display: 'block', marginBottom: '0.25rem' }}>
                        {proj.name}
                      </strong>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                        {proj.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Big Data */}
              <div>
                <h4 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--primary-light)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  paddingBottom: '0.4rem',
                  marginBottom: '1rem',
                }}>
                  Big Data
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.85rem' }}>
                  {projectsBigData.map((proj, idx) => (
                    <div key={idx} style={{
                      padding: '1rem 1.15rem',
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      borderRadius: '0.65rem',
                    }}>
                      <strong style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#fff', display: 'block', marginBottom: '0.25rem' }}>
                        {proj.name}
                      </strong>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                        {proj.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'habilidades' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Tecnologías */}
              <div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '1rem',
                }}>
                  Tecnologías
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '1rem',
                }}>
                  {skillsGrouped.map((skillGroup, idx) => (
                    <div key={idx} style={{
                      padding: '1.25rem',
                      background: 'rgba(255,255,255,0.01)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      borderRadius: '0.75rem',
                    }}>
                      <h4 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: 'var(--primary-light)',
                        marginBottom: '0.75rem',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        paddingBottom: '0.35rem',
                      }}>
                        {skillGroup.category}
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                        {skillGroup.items.map((item, itemIdx) => (
                          <span key={itemIdx} className="tag" style={{ fontSize: '0.72rem' }}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Idiomas & Soft Skills */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.25rem',
              }}>
                {/* Soft Skills */}
                <div style={{
                  padding: '1.25rem',
                  background: 'rgba(255,255,255,0.01)',
                  border: '1px solid rgba(255,255,255,0.04)',
                  borderRadius: '0.75rem',
                }}>
                  <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
                    Soft Skills
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {softSkills.map((skill, sIdx) => (
                      <span key={sIdx} className="tag" style={{ fontSize: '0.72rem' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Idiomas */}
                <div style={{
                  padding: '1.25rem',
                  background: 'rgba(255,255,255,0.01)',
                  border: '1px solid rgba(255,255,255,0.04)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
                    Idiomas
                  </h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                    <strong>Español:</strong> Nativo<br />
                    <strong>Inglés:</strong> B2
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '1.25rem 2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(5, 7, 20, 0.4)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}>
            © {new Date().getFullYear()} Pedro Galera
          </span>

          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              padding: '0.6rem 1.25rem',
              fontSize: '0.8rem',
              borderRadius: '0.625rem',
              boxShadow: 'none',
            }}
          >
            <Download size={14} />
            <span>Descargar PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
