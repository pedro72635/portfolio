import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Inicio',     href: '#hero' },
  { label: 'Sobre mí',  href: '#about' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto',  href: '#contact' },
];

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeSection, setActive] = useState('hero');

  /* — Scroll spy — */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* — Close mobile menu on resize — */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleLink = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '0.6rem 0' : '1rem 0',
        background: scrolled
          ? 'rgba(5,7,20,0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,58,237,0.12)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); handleLink('#hero'); }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '1.3rem',
            background: 'linear-gradient(135deg,#9f67ff,#06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em',
            flexShrink: 0,
          }}
        >
          PG
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {NAV_LINKS.map(({ label, href }) => {
            const section = href.slice(1);
            const isActive = activeSection === section;
            return (
              <a
                key={href}
                href={href}
                onClick={e => { e.preventDefault(); handleLink(href); }}
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.5rem 0.875rem',
                  borderRadius: '0.625rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(124,58,237,0.15)' : 'transparent',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {isActive && (
                  <span style={{
                    width: '5px', height: '5px',
                    borderRadius: '50%',
                    background: 'var(--primary-light)',
                    flexShrink: 0,
                    boxShadow: '0 0 8px var(--primary-light)',
                  }} />
                )}
                {label}
              </a>
            );
          })}
        </nav>

        {/* CTA desktop */}
        <a
          href="#contact"
          onClick={e => { e.preventDefault(); handleLink('#contact'); }}
          className="btn-primary desktop-cta"
          style={{ padding: '0.6rem 1.4rem', fontSize: '0.82rem' }}
        >
          Contactar
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="hamburger"
          aria-label="Abrir menú"
          style={{
            display: 'none',
            background: 'rgba(124,58,237,0.1)',
            border: '1px solid rgba(124,58,237,0.2)',
            borderRadius: '0.625rem',
            padding: '0.5rem',
            cursor: 'pointer',
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(5,7,20,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(124,58,237,0.15)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
          animation: 'slide-up-sm 0.25s ease both',
        }}>
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={e => { e.preventDefault(); handleLink(href); }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.95rem',
                  color: isActive ? '#fff' : 'var(--text-secondary)',
                  background: isActive ? 'rgba(124,58,237,0.12)' : 'transparent',
                  textDecoration: 'none',
                }}
              >
                {isActive && (
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--primary-light)', flexShrink: 0 }} />
                )}
                {label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); handleLink('#contact'); }}
            className="btn-primary"
            style={{ marginTop: '0.75rem', justifyContent: 'center' }}
          >
            Contactar
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .desktop-nav  { display: none !important; }
          .desktop-cta  { display: none !important; }
          .hamburger    { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
