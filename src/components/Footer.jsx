import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const GITHUB_URL   = 'https://github.com/pedro72635';
const LINKEDIN_URL = 'https://www.linkedin.com/in/pedro-galera-fernandez-a5508936b/';

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      background: 'var(--bg-2)',
      borderTop: '1px solid rgba(13,148,136,0.12)',
      padding: '2.5rem 0',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem',
        }}>
          {/* Brand */}
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '1.2rem',
            color: 'var(--primary-light)',
          }}>
            Pedro Galera
          </span>

          {/* Copyright */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
          }}>
            © {new Date().getFullYear()} Pedro Galera Fernández
          </p>

          {/* Socials + scroll-top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            {[
              { href: GITHUB_URL,   Icon: FaGithub,  label: 'GitHub' },
              { href: LINKEDIN_URL, Icon: FaLinkedin, label: 'LinkedIn' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 36, height: 36,
                  borderRadius: '0.6rem',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(13,148,136,0.45)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.background = 'rgba(13,148,136,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
              >
                <Icon size={16} />
              </a>
            ))}

            {/* Scroll top */}
            <button
              onClick={scrollTop}
              aria-label="Volver arriba"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36, height: 36,
                borderRadius: '0.6rem',
                background: 'rgba(13,148,136,0.10)',
                border: '1px solid rgba(13,148,136,0.28)',
                color: 'var(--primary-light)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(13,148,136,0.20)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(13,148,136,0.10)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
