import React from 'react';
import { CreativeCard } from './CreativeCard';

interface FloatingCTAProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  href: string;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ title, subtitle, ctaText, href }) => {
  return (
    <section style={{ padding: '40px 24px', position: 'relative' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <CreativeCard variant="gradient" hoverEffect="glow" size="large" style={{ textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 8px', color: 'white' }}>{title}</h2>
          {subtitle && <p style={{ margin: '0 0 20px', color: 'white', opacity: 0.9 }}>{subtitle}</p>}
          <a href={href} style={{
            display: 'inline-block',
            padding: '12px 22px',
            borderRadius: 10,
            background: '#111827',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 700
          }}>{ctaText}</a>
        </CreativeCard>
      </div>
    </section>
  );
};

export default FloatingCTA;


