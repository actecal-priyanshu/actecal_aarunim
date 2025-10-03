import React from 'react';

interface DarkHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const DarkHeading: React.FC<DarkHeadingProps> = ({ 
  text, 
  className = '', 
  style = {},
  level = 1
}) => {
  const getFontSize = () => {
    switch (level) {
      case 1: return 'clamp(2.5rem, 5vw, 4rem)';
      case 2: return 'clamp(2rem, 4vw, 3rem)';
      case 3: return 'clamp(1.5rem, 3vw, 2.5rem)';
      case 4: return 'clamp(1.2rem, 2.5vw, 2rem)';
      case 5: return 'clamp(1rem, 2vw, 1.5rem)';
      case 6: return 'clamp(0.9rem, 1.5vw, 1.2rem)';
      default: return 'clamp(2.5rem, 5vw, 4rem)';
    }
  };

  const headingStyle = {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: getFontSize(),
    fontWeight: 700,
    margin: 0,
    padding: 0,
    color: '#000000',
    lineHeight: 1.2,
    ...style
  };

  switch (level) {
    case 1:
      return <h1 className={`dark-heading ${className}`} style={headingStyle}>{text}</h1>;
    case 2:
      return <h2 className={`dark-heading ${className}`} style={headingStyle}>{text}</h2>;
    case 3:
      return <h3 className={`dark-heading ${className}`} style={headingStyle}>{text}</h3>;
    case 4:
      return <h4 className={`dark-heading ${className}`} style={headingStyle}>{text}</h4>;
    case 5:
      return <h5 className={`dark-heading ${className}`} style={headingStyle}>{text}</h5>;
    case 6:
      return <h6 className={`dark-heading ${className}`} style={headingStyle}>{text}</h6>;
    default:
      return <h1 className={`dark-heading ${className}`} style={headingStyle}>{text}</h1>;
  }
};

// Convenience components for different heading levels
export const DarkH1: React.FC<Omit<DarkHeadingProps, 'level'>> = (props) => (
  <DarkHeading {...props} level={1} />
);

export const DarkH2: React.FC<Omit<DarkHeadingProps, 'level'>> = (props) => (
  <DarkHeading {...props} level={2} />
);

export const DarkH3: React.FC<Omit<DarkHeadingProps, 'level'>> = (props) => (
  <DarkHeading {...props} level={3} />
);

export const DarkH4: React.FC<Omit<DarkHeadingProps, 'level'>> = (props) => (
  <DarkHeading {...props} level={4} />
);

export const DarkH5: React.FC<Omit<DarkHeadingProps, 'level'>> = (props) => (
  <DarkHeading {...props} level={5} />
);

export const DarkH6: React.FC<Omit<DarkHeadingProps, 'level'>> = (props) => (
  <DarkHeading {...props} level={6} />
);
