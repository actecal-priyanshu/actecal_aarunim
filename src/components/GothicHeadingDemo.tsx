import React from 'react';
import { GothicHeading, GothicHeadingFade, GothicHeadingSharp } from './GothicHeading';

export const GothicHeadingDemo: React.FC = () => {
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
          Gothic Heading Variations
        </h2>
        
        <div style={{ marginBottom: 60 }}>
          <h3 style={{ 
            fontSize: '1.2rem', 
            marginBottom: 20, 
            color: '#4a5568',
            fontFamily: 'Inter, sans-serif'
          }}>
            Standard Gothic Heading
          </h3>
          <GothicHeading text="Everyone Has The Right To Free" />
        </div>

        <div style={{ marginBottom: 60 }}>
          <h3 style={{ 
            fontSize: '1.2rem', 
            marginBottom: 20, 
            color: '#4a5568',
            fontFamily: 'Inter, sans-serif'
          }}>
            Dramatic Fade Effect
          </h3>
          <GothicHeadingFade text="Everyone Has The Right To Free" />
        </div>

        <div style={{ marginBottom: 60 }}>
          <h3 style={{ 
            fontSize: '1.2rem', 
            marginBottom: 20, 
            color: '#4a5568',
            fontFamily: 'Inter, sans-serif'
          }}>
            Sharp Fade (Matches Your Image)
          </h3>
          <GothicHeadingSharp text="Everyone Has The Right To Free" />
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
          <GothicHeadingSharp 
            text="Custom Gothic Heading"
            style={{ 
              fontSize: '3rem',
              background: 'linear-gradient(90deg, #ff0000 0%, #ff0000 50%, #ff6666 70%, #ffaaaa 85%, #ffffff 100%)'
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
<GothicHeading text="Your Text Here" />

// With custom styling
<GothicHeadingSharp 
  text="Custom Text"
  style={{ fontSize: '3rem' }}
/>

// Different fade effects
<GothicHeadingFade text="Dramatic Fade" />
<GothicHeadingSharp text="Sharp Fade" />`}
          </pre>
        </div>
      </div>
    </div>
  );
};
