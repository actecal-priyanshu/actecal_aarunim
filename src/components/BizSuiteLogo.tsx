import React from 'react';

interface BizSuiteLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

export const BizSuiteLogo: React.FC<BizSuiteLogoProps> = ({ 
  className = '', 
  style = {} 
}) => {
  return (
    <div 
      className={`biz-suite-logo ${className}`}
      style={{
        display: 'inline-block',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 400,
        margin: 0,
        padding: 0,
        background: 'linear-gradient(180deg, #000000 0%, #000000 50%, #666666 75%, #aaaaaa 90%, transparent 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        lineHeight: 1.1,
        position: 'relative',
        ...style
      }}
    >
      Biz Suite
    </div>
  );
};

// Alternative version with more dramatic gradient
export const BizSuiteLogoDramatic: React.FC<BizSuiteLogoProps> = ({ 
  className = '', 
  style = {} 
}) => {
  return (
    <div 
      className={`biz-suite-logo-dramatic ${className}`}
      style={{
        display: 'inline-block',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 400,
        margin: 0,
        padding: 0,
        background: 'linear-gradient(180deg, #000000 0%, #000000 30%, #444444 60%, #888888 80%, transparent 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        lineHeight: 1.1,
        position: 'relative',
        ...style
      }}
    >
      Biz Suite
    </div>
  );
};

// Version that matches the image more closely
export const BizSuiteLogoExact: React.FC<BizSuiteLogoProps> = ({ 
  className = '', 
  style = {} 
}) => {
  return (
    <div 
      className={`biz-suite-logo-exact ${className}`}
      style={{
        display: 'inline-block',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 400,
        margin: 0,
        padding: 0,
        background: 'linear-gradient(180deg, #000000 0%, #000000 40%, #666666 70%, #aaaaaa 90%, transparent 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        lineHeight: 1.1,
        position: 'relative',
        ...style
      }}
    >
      Biz Suite
    </div>
  );
};
