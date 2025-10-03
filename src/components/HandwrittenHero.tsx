import React from 'react';
import { PromoCard } from './PromoCard';

type HandHeroProps = {
  heading: string;
  highlight?: string;
  subheading?: string;
  underlineWord?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  priceNote?: string;
};

export const HandwrittenHero: React.FC<HandHeroProps> = (_props) => {
  return (
    <section
      style={{
        padding: '40px 0',
        textAlign: 'center',
        background: '#ffffff',
        color: '#111827'
      }}
    >
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <PromoCard />
        </div>
      </div>
    </section>
  );
};

export default HandwrittenHero;
