import { ArrowDown, FileText, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const GITHUB_URL   = 'https://github.com/pedro72635';
const LINKEDIN_URL = 'https://www.linkedin.com/in/pedro-galera-fernandez-a5508936b/';

const Hero = ({ onOpenResume }) => (
  <section
    id="hero"
    style={{
      position: 'relative',
      minHeight: '100svh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      paddingTop: '6rem',
      paddingBottom: '5rem',
    }}
  >
    {/* ── Ambient orbs ── */}
    <div className="orb animate-float" style={{
      width: 480, height: 480,
      background: 'radial-gradient(circle, rgba(124,58,237,0.28) 0%, transparent 70%)',
      top: '-8%', left: '-10%',
    }} />
    <div className="orb animate-float-delayed" style={{
      width: 560, height: 560,
      background: 'radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)',
      bottom: '-10%', right: '-12%',
    }} />
    <div className="orb animate-float" style={{
      width: 300, height: 300,
      background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)',
      top: '40%', left: '60%',
      animationDelay: '3s',
    }} />

    {/* ── Grid overlay ── */}
    <div style={{
      position: 'absolute', inset: 0, zIndex: 0,
      backgroundImage: `
        linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
      maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
    }} />

    {/* ── Content ── */}
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '0',
      }}>

        {/* — Availability badge — */}
        <div
          className="animate-slide-up anim-delay-1"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1.1rem',
            borderRadius: '99px',
            background: 'rgba(16,185,129,0.08)',
            border: '1px solid rgba(16,185,129,0.22)',
            marginBottom: '2rem',
          }}
        >
          <span style={{ position: 'relative', display: 'flex', width: 9, height: 9, flexShrink: 0 }}>
            <span className="animate-ping-slow" style={{
              position: 'absolute', inset: 0,
              borderRadius: '50%',
              background: '#10b981',
              opacity: 0.5,
            }} />
            <span style={{
              position: 'relative',
              width: 9, height: 9,
              borderRadius: '50%',
              background: '#10b981',
              flexShrink: 0,
            }} />
          </span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#10b981',
          }}>
            Disponible para trabajar
          </span>
        </div>

        {/* — Main heading — */}
        <h1
          className="animate-slide-up anim-delay-2"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(2.6rem, 8vw, 5.8rem)',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: '#fff',
            marginBottom: '1.25rem',
          }}
        >
          Hola, soy{' '}
          <span className="gradient-text animate-gradient">Pedro Galera</span>
        </h1>

        {/* — Role subtitle — */}
        <p
          className="animate-slide-up anim-delay-3"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            fontWeight: 400,
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: '640px',
            marginBottom: '2.5rem',
          }}
        >
          Técnico en{' '}
          <strong style={{ color: '#fff', fontWeight: 600 }}>Desarrollo Multiplataforma</strong>
          {' '}y Máster en{' '}
          <strong style={{ color: '#fff', fontWeight: 600 }}>Big Data &amp; Inteligencia Artificial</strong>.
          <br />
          <span style={{
            display: 'inline-block',
            marginTop: '0.5rem',
            fontSize: 'clamp(0.85rem, 2vw, 1rem)',
            fontStyle: 'italic',
            color: 'var(--primary-light)',
          }}>
            "Transformando datos en conocimiento y retos en soluciones digitales."
          </span>
        </p>

        {/* — CTA buttons — */}
        <div
          className="animate-slide-up anim-delay-4"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '3rem',
          }}
        >
          <a href="#contact" className="btn-primary" style={{ minWidth: '160px' }}>
            <Send size={16} style={{ flexShrink: 0 }} />
            <span>Hablemos ahora</span>
          </a>
          <button
            onClick={onOpenResume}
            className="btn-secondary"
            style={{ minWidth: '160px', cursor: 'pointer' }}
          >
            <FileText size={16} style={{ flexShrink: 0, color: 'var(--primary-light)' }} />
            <span>Ver Currículum</span>
          </button>
        </div>

        {/* — Social links — */}
        <div
          className="animate-slide-up anim-delay-5"
          style={{
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { href: GITHUB_URL,   Icon: FaGithub,   label: 'GitHub',   color: '#fff' },
            { href: LINKEDIN_URL, Icon: FaLinkedin,  label: 'LinkedIn', color: '#06b6d4' },
          ].map(({ href, Icon, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.6rem 1.1rem',
                borderRadius: '0.75rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text-secondary)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.5)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Icon size={17} style={{ color, flexShrink: 0 }} />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* ── Scroll indicator ── */}
    <a
      href="#about"
      aria-label="Bajar"
      style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.35rem',
        color: 'var(--text-muted)',
        transition: 'color 0.2s ease',
        zIndex: 5,
        textDecoration: 'none',
      }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-light)'}
      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
    >
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.65rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        fontWeight: 600,
      }}>
        Scroll
      </span>
      <ArrowDown size={16} style={{ animation: 'float 2s ease-in-out infinite' }} />
    </a>
  </section>
);

export default Hero;
