import React from 'react';

export const QualityWorkSection: React.FC = () => {
  return (
    <section style={{ position: 'relative', background: '#f8fafc', color: '#111827', overflow: 'hidden' }}>
      {/* Gradient blob backgrounds */}
      <div style={{ position: 'absolute', width: 280, height: 280, background: 'radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.18), rgba(124, 58, 237, 0))', top: -60, left: -60, filter: 'blur(2px)' }} />
      <div style={{ position: 'absolute', width: 320, height: 320, background: 'radial-gradient(circle at 70% 30%, rgba(34, 193, 220, 0.18), rgba(34, 193, 220, 0))', top: -80, right: -80, filter: 'blur(2px)' }} />
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '40px 24px 24px', textAlign: 'center', position: 'relative' }}>
        {/* Big handwritten headline */}
        <div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
            margin: 0,
            fontWeight: 900,
            color: '#0f172a',
            fontFamily: '"Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", Arial, "Comic Sans MS", cursive'
          }}>
            <span style={{ position: 'relative', display: 'inline-block', marginRight: 8 }}>
              <span style={{ position: 'absolute', left: -6, right: -6, bottom: -8, height: 14, background: '#f87171', borderRadius: 9999, zIndex: -1 }} />
              Level up
            </span>{' '}
            your quality of work
          </h2>
          <div style={{ width: 160, height: 6, background: '#22c1dc', borderRadius: 6, margin: '10px auto 0' }} />
        </div>
      </div>
    </section>
  );
};

export default QualityWorkSection;


