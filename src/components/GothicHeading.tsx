import React from 'react';

interface GothicHeadingProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const GothicHeading: React.FC<GothicHeadingProps> = ({ 
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

  const headingStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontSize: getFontSize(),
    fontWeight: 700,
    margin: 0,
    padding: 0,
    color: '#111111',
    lineHeight: 1.2,
    ...style
  };

  switch (level) {
    case 1:
      return <h1 className={`gothic-heading ${className}`} style={headingStyle}>{text}</h1>;
    case 2:
      return <h2 className={`gothic-heading ${className}`} style={headingStyle}>{text}</h2>;
    case 3:
      return <h3 className={`gothic-heading ${className}`} style={headingStyle}>{text}</h3>;
    case 4:
      return <h4 className={`gothic-heading ${className}`} style={headingStyle}>{text}</h4>;
    case 5:
      return <h5 className={`gothic-heading ${className}`} style={headingStyle}>{text}</h5>;
    case 6:
      return <h6 className={`gothic-heading ${className}`} style={headingStyle}>{text}</h6>;
    default:
      return <h1 className={`gothic-heading ${className}`} style={headingStyle}>{text}</h1>;
  }
};

// Convenience components for different heading levels
export const GothicH1: React.FC<Omit<GothicHeadingProps, 'level'>> = (props) => (
  <GothicHeading {...props} level={1} />
);

export const GothicH2: React.FC<Omit<GothicHeadingProps, 'level'>> = (props) => (
  <GothicHeading {...props} level={2} />
);

export const GothicH3: React.FC<Omit<GothicHeadingProps, 'level'>> = (props) => (
  <GothicHeading {...props} level={3} />
);

export const GothicH4: React.FC<Omit<GothicHeadingProps, 'level'>> = (props) => (
  <GothicHeading {...props} level={4} />
);

export const GothicH5: React.FC<Omit<GothicHeadingProps, 'level'>> = (props) => (
  <GothicHeading {...props} level={5} />
);

export const GothicH6: React.FC<Omit<GothicHeadingProps, 'level'>> = (props) => (
  <GothicHeading {...props} level={6} />
);

// Styled variants to satisfy demo imports
export const GothicHeadingFade: React.FC<Omit<GothicHeadingProps, 'level'>> = ({
  text,
  className = '',
  style = {}
}) => (
  <GothicHeading
    text={text}
    className={className}
    style={{ ...style }}
    level={1}
  />
);

export const GothicHeadingSharp: React.FC<Omit<GothicHeadingProps, 'level'>> = ({
  text,
  className = '',
  style = {}
}) => (
  <GothicHeading
    text={text}
    className={className}
    style={{ ...style }}
    level={1}
  />
);