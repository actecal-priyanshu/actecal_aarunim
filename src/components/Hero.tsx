import React, { useState, useEffect } from 'react';
import { BizSuiteLogoExact } from './BizSuiteLogo';
import { FloatingElement, FloatingElements } from './FloatingElements';
import { CreativeCard } from './CreativeCard';

type HeroData = {
  heading: string;
  subheading: string;
  cta: { label: string; href: string };
  stats?: { label: string; value: string }[];
  badges?: string[];
};

type Props = {
  data: HeroData | null;
};

export const Hero: React.FC<Props> = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!data) return null;
  
  return (
    <FloatingElements>
      <section style={{
        padding: '120px 24px 80px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
          zIndex: 0
        }} />
        
        <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          {/* Animated badges */}
          {data.badges && (
            <div style={{ 
              marginBottom: 32,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out'
            }}>
              {data.badges.map((badge, idx) => (
                <FloatingElement
                  key={idx}
                  delay={idx * 0.2}
                  direction="up"
                  intensity="low"
                >
                  <span style={{
                    display: 'inline-block',
                    background: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: 25,
                    fontSize: 14,
                    margin: '0 8px 8px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    fontWeight: 600
                  }}>
                    {badge}
                  </span>
                </FloatingElement>
              ))}
            </div>
          )}

          {/* Animated logo */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
            transition: 'all 1s ease-out 0.3s'
          }}>
            <FloatingElement direction="up" intensity="low" duration={4}>
              <BizSuiteLogoExact 
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  margin: '0 0 24px',
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}
              />
            </FloatingElement>
          </div>
          
          {/* Animated heading */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            margin: '0 0 24px',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.6s'
          }}>
            {data.heading}
          </h1>
          
          {/* Animated subheading */}
          <p style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: '0 0 32px',
            maxWidth: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 0.9s'
          }}>
            {data.subheading}
          </p>

          {/* Animated divider */}
          <div style={{
            height: 4,
            width: 120,
            background: 'linear-gradient(90deg, transparent, #FDBA26, transparent)',
            borderRadius: 2,
            margin: '24px auto 40px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'all 1s ease-out 1.2s'
          }} />
          
          {/* Animated CTA buttons */}
          <div style={{ 
            marginBottom: 80,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease-out 1.5s'
          }}>
            <CreativeCard
              variant="glass"
              hoverEffect="glow"
              size="small"
              style={{
                display: 'inline-block',
                margin: '0 12px 12px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              <a href={data.cta.href} style={{
                display: 'inline-block',
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #FDBA26 0%, #f59e0b 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 12,
                fontWeight: 700,
                fontSize: '1.1rem',
                boxShadow: '0 8px 25px rgba(253, 186, 38, 0.4)',
                transition: 'all 0.3s ease'
              }}>
                {data.cta.label}
              </a>
            </CreativeCard>
            
            <CreativeCard
              variant="glass"
              hoverEffect="lift"
              size="small"
              style={{
                display: 'inline-block',
                margin: '0 12px 12px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <a href="#advisor" style={{
                display: 'inline-block',
                padding: '16px 32px',
                color: 'white',
                textDecoration: 'none',
                borderRadius: 12,
                fontWeight: 600,
                fontSize: '1.1rem',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}>
                Meet an advisor
              </a>
            </CreativeCard>
          </div>

          {/* Animated statistics */}
          {data.stats && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 40,
              maxWidth: 800,
              margin: '0 auto',
              padding: '40px 0',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease-out 1.8s'
            }}>
              {data.stats.map((stat, idx) => (
                <FloatingElement
                  key={idx}
                  delay={idx * 0.2}
                  direction="up"
                  intensity="low"
                >
                  <CreativeCard
                    variant="glass"
                    hoverEffect="lift"
                    size="small"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      marginBottom: 8,
                      color: 'white',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: 600
                    }}>
                      {stat.label}
                    </div>
                  </CreativeCard>
                </FloatingElement>
              ))}
            </div>
          )}
        </div>
      </section>
    </FloatingElements>
  );
};


