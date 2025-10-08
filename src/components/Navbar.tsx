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
          <Link to="/login" className="btn">Log in</Link>
          <Link to="/signup" className="btn btn-primary">Sign up</Link>
        </div>

        {isMobile && (
          <button 
            onClick={() => setOpen(!open)} 
            style={{
              background: 'transparent', 
              border: 'none', 
              fontSize: '1.5rem', 
              cursor: 'pointer', 
              color: 'var(--color-text)'
            }}
          >
            {open ? '✕' : '☰'}
          </button>
        )}
      </div>

      {isMobile && open && (
        <div style={{
          background: '#fff',
          padding: '16px 24px',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          display: 'grid',
          gap: 12
        }}>
          <div style={{ display: 'grid', gap: 12, textAlign: 'center' }}>
            {renderNavLink('/apps', 'Applications')}
            {renderNavLink('/solutions', 'Industries')}
            {renderNavLink('/blog', 'Community')}
            {renderNavLink('/pricing', 'Pricing')}
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <Link to="/login" className="btn">Log in</Link>
              <Link to="/signup" className="btn btn-primary">Sign up</Link>
            </div>
            <div style={{ marginTop: 8 }}>
              <Link to="/contact-sales" className="btn" style={{
                width: '100%',
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
