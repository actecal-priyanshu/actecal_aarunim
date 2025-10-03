import React from 'react';
import './DrippingText.css';

interface DrippingTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export const DrippingText: React.FC<DrippingTextProps> = ({ 
  text, 
  className = '', 
  style = {} 
}) => {
  return (
    <h1 
      className={`dripping-text ${className}`}
      style={{
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
        fontWeight: 400,
        margin: 0,
        padding: 0,
        color: '#000000',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        lineHeight: 1.1,
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        ...style
      }}
    >
      {text}
    </h1>
  );
};

// Alternative version with more dramatic dripping effect
export const DrippingTextDramatic: React.FC<DrippingTextProps> = ({ 
  text, 
  className = '', 
  style = {} 
}) => {
  return (
    <h1 
      className={`dripping-text-dramatic ${className}`}
      style={style}
    >
      {text}
    </h1>
  );
};

// Version that matches the image more closely
export const DrippingTextExact: React.FC<DrippingTextProps> = ({ 
  text, 
  className = '', 
  style = {} 
}) => {
  return (
    <div 
      className={`dripping-text-exact ${className}`}
      style={style}
    >
      <h1>{text}</h1>
    </div>
  );
};
