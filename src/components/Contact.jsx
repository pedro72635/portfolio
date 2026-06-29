import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const LINKEDIN_URL = 'https://www.linkedin.com/in/pedro-galera-fernandez-a5508936b/';
const GITHUB_URL   = 'https://github.com/pedro72635';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pedro.galera3031@gmail.com',
    href: 'mailto:pedro.galera3031@gmail.com',
    color: '#0d9488',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+34 684 34 74 54',
    href: 'tel:+34684347454',
    color: '#06b6d4',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Pedro Galera Fernández',
    href: LINKEDIN_URL,
    color: '#0ea5e9',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'pedro72635',
    href: GITHUB_URL,
    color: '#a78bfa',
  },
];

const inputStyle = {
  width: '100%',
  padding: '0.875rem 1.1rem',
  borderRadius: '0.75rem',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff',
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  boxSizing: 'border-box',
};

const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Compose a mailto link with form data
    const subject = encodeURIComponent(`Contacto Portfolio – ${form.name}`);
    const body    = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`mailto:pedro.galera3031@gmail.com?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', message: '' }); }, 4000);
  };

  const focusStyle = (name) => focused === name
    ? { borderColor: 'rgba(13,148,136,0.6)', boxShadow: '0 0 0 3px rgba(13,148,136,0.1)' }
    : {};

  return (
    <section id="contact" className="section" ref={sectionRef}
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%)' }}
    >
      {/* Ambient */}
      <div className="orb" style={{
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(13,148,136,0.14) 0%, transparent 70%)',
        left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        filter: 'blur(90px)',
      }} />

      <div className="container">
        {/* Header */}
        <div className="section-heading reveal">
          <span className="section-label">Contacto</span>
          <h2>¿<span className="gradient-text">Hablamos</span>?</h2>
          <div className="divider" />
          <p>Estoy abierto a nuevas oportunidades, colaboraciones y retos en Ciencia de Datos o Desarrollo.</p>
        </div>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}>

          {/* Left: Contact info */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '0.5rem',
                lineHeight: 1.25,
              }}>
                Cuéntame tu idea
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
              }}>
                Ya sea para un proyecto freelance, una colaboración o una oportunidad laboral, estaré encantado de escucharte.
              </p>
            </div>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
              {contactInfo.map(item => {
                const ItemIcon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.875rem',
                      padding: '0.875rem 1rem',
                      borderRadius: '0.875rem',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${item.color}10`;
                      e.currentTarget.style.borderColor = `${item.color}35`;
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      width: 40, height: 40,
                      borderRadius: '0.65rem',
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <ItemIcon size={18} style={{ color: item.color }} />
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        marginBottom: '0.2rem',
                      }}>
                        {item.label}
                      </p>
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#fff',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal glass" style={{ padding: '2rem', animationDelay: '0.15s' }}>
            {sent ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                padding: '2rem 0',
                textAlign: 'center',
              }}>
                <CheckCircle size={48} style={{ color: '#10b981' }} />
                <h4 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#fff',
                }}>
                  ¡Mensaje preparado!
                </h4>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  Se ha abierto tu cliente de email con el mensaje listo para enviar.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.04em',
                  }}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    placeholder="Tu nombre"
                    required
                    style={{ ...inputStyle, ...focusStyle('name') }}
                  />
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.04em',
                  }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    placeholder="tu@email.com"
                    required
                    style={{ ...inputStyle, ...focusStyle('email') }}
                  />
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.04em',
                  }}>
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="Cuéntame tu proyecto o propuesta..."
                    required
                    rows={5}
                    style={{
                      ...inputStyle,
                      ...focusStyle('message'),
                      resize: 'vertical',
                      minHeight: '130px',
                    }}
                  />
                </div>

                {/* Submit button — always below the textarea with proper margin */}
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', marginTop: '0.25rem' }}
                >
                  <Send size={16} style={{ flexShrink: 0 }} />
                  <span>Enviar mensaje</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
