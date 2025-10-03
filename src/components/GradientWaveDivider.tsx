import React from 'react';

export const GradientWaveDivider: React.FC = () => {
  return (
    <div aria-hidden style={{ position: 'relative', height: 80, overflow: 'hidden', background: 'transparent' }}>
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ position: 'absolute', top: -20, left: 0, width: '100%', height: '140%' }}>
        <defs>
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="50%" stopColor="#764ba2" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <path fill="url(#waveGrad)" fillOpacity="0.2" d="M0,64L60,80C120,96,240,128,360,138.7C480,149,600,139,720,149.3C840,160,960,192,1080,186.7C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
      </svg>
    </div>
  );
};

export default GradientWaveDivider;


