import React from 'react';
import { DrippingText, DrippingTextDramatic, DrippingTextExact } from './DrippingText';

export const DrippingTextDemo: React.FC = () => {
  return (
    <div style={{ 
      padding: '60px 24px', 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: '2rem', 
          marginBottom: 40, 
          color: '#2d3748',
          fontFamily: 'Inter, sans-serif'
        }}>
          Dripping Text Variations
        </h2>
        
        <div style={{ marginBottom: 60 }}>
          <h3 style={{ 
            fontSize: '1.2rem', 
            marginBottom: 20, 
            color: '#4a5568',
            fontFamily: 'Inter, sans-serif'
          }}>
            Standard Dripping Text
          </h3>
          <DrippingText text="Everyone Has The Right" />
        </div>

        <div style={{ marginBottom: 60 }}>
          <h3 style={{ 
            fontSize: '1.2rem', 
            marginBottom: 20, 
            color: '#4a5568',
            fontFamily: 'Inter, sans-serif'
          }}>
            Dramatic Dripping Effect
          </h3>
          <DrippingTextDramatic text="Everyone Has The Right" />
        </div>

        <div style={{ marginBottom: 60 }}>
          <h3 style={{ 
            fontSize: '1.2rem', 
            marginBottom: 20, 
            color: '#4a5568',
            fontFamily: 'Inter, sans-serif'
          }}>
            Exact Match (Closest to Your Image)
          </h3>
          <DrippingTextExact text="Everyone Has The Right" />
        </div>

        <div style={{ marginBottom: 60 }}>
          <h3 style={{ 
            fontSize: '1.2rem', 
            marginBottom: 20, 
            color: '#4a5568',
            fontFamily: 'Inter, sans-serif'
          }}>
            Custom Styling Example
          </h3>
          <DrippingTextExact 
            text="Custom Dripping Text"
            style={{ 
              fontSize: '3rem'
            }}
          />
        </div>

        <div style={{ 
          background: 'white', 
          padding: 40, 
          borderRadius: 20, 
          boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
          textAlign: 'left',
          maxWidth: 600,
          margin: '0 auto'
        }}>
          <h4 style={{ 
            fontSize: '1.2rem', 
            marginBottom: 16, 
            color: '#2d3748',
            fontFamily: 'Inter, sans-serif'
          }}>
            Usage Examples:
          </h4>
          <pre style={{ 
            background: '#f7fafc', 
            padding: 16, 
            borderRadius: 8, 
            fontSize: '0.9rem',
            overflow: 'auto'
          }}>
{`// Basic usage
<DrippingText text="Your Text Here" />

// With custom styling
<DrippingTextExact 
  text="Custom Text"
  style={{ fontSize: '3rem' }}
/>

// Different dripping effects
<DrippingTextDramatic text="Dramatic Effect" />
<DrippingTextExact text="Exact Match" />`}
          </pre>
        </div>
      </div>
    </div>
  );
};
