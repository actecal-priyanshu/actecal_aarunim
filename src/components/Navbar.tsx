import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navLinkBase: React.CSSProperties = {
    color: '#6b7280',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 500,
    padding: '8px 6px',
    transition: 'color .15s ease'
  };

  const renderNavLink = (to: string, label: string) => (
    <Link
      to={to}
      style={{ ...navLinkBase }}
      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
      onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: '#ffffff',
      borderBottom: '1px solid rgba(0,0,0,0.06)'
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '12px 24px',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center',
        columnGap: 16
      }}>
        {/* Brand */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{
            fontFamily: 'Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
            fontWeight: 800,
            fontSize: '1.25rem',
            color: 'var(--color-text)'
          }}>BizSuite</span>
          <span style={{
            display: 'inline-block',
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'var(--color-primary)'
          }}/>
        </Link>

        {/* Center links */}
        <div style={{
          display: isMobile ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 28
        }}>
          {renderNavLink('/apps', 'Applications')}
          {renderNavLink('/solutions', 'Industries')}
          {renderNavLink('/blog', 'Community')}
          {renderNavLink('/pricing', 'Pricing')}
        </div>

        {/* Right actions */}
        <div style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: 12, justifySelf: 'end' }}>
          {renderNavLink('/login', 'Log in')}
          <Link to="/signup" style={{
            textDecoration: 'none',
            background: 'var(--color-primary)',
            color: '#ffffff',
            padding: '10px 18px',
            borderRadius: 9999,
            fontWeight: 700,
            fontSize: '0.95rem',
            boxShadow: '0 8px 20px rgba(255,107,0,0.25)',
            transition: 'transform .15s ease, box-shadow .2s ease'
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 10px 24px rgba(255,107,0,0.28)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(255,107,0,0.25)'; }}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: isMobile ? 'inline-flex' : 'none',
            justifySelf: 'end',
            width: 40,
            height: 40,
            borderRadius: 8,
            border: '1px solid rgba(0,0,0,0.1)',
            background: '#fff',
            cursor: 'pointer',
            fontSize: '1.1rem',
            color: '#333'
          }}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          display: isMobile ? 'block' : 'none',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          padding: 16,
          background: '#fff'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {renderNavLink('/apps', 'Applications')}
            {renderNavLink('/solutions', 'Industries')}
            {renderNavLink('/blog', 'Community')}
            {renderNavLink('/pricing', 'Pricing')}
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              {renderNavLink('/login', 'Log in')}
              <Link to="/signup" style={{
                textDecoration: 'none',
                background: 'var(--color-primary)',
                color: '#ffffff',
                padding: '10px 18px',
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: '0.95rem',
                textAlign: 'center',
                boxShadow: '0 8px 20px rgba(255,107,0,0.25)'
              }} onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
