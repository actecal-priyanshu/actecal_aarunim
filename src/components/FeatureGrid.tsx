import React from 'react';
import { GothicH2, GothicH3 } from './GothicHeading';
import { DrippingText } from './DrippingText';

type Section = {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
  color?: string;
  cta?: { label: string; href: string };
};

type Props = {
  sections: Section[];
};

const icons = {
  analytics: '📊',
  automation: '⚡',
  collaboration: '🤝',
  security: '🔒',
  integration: '🔗',
  reporting: '📈',
  mobile: '📱',
  cloud: '☁️',
  ai: '🤖',
  support: '💬'
};

export const FeatureGrid: React.FC<Props> = ({ sections }) => {
  return (
    <section style={{ 
      padding: '80px 24px 60px', 
      background: 'linear-gradient(135deg, rgba(255,247,234,0.3) 0%, rgba(255,224,214,0.4) 100%)'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.8rem)', 
            margin: '0 0 12px',
            color: 'var(--color-text)',
            fontWeight: 700
          }}>
            Transform your digital workflow
          </h2>
          <div style={{
            width: '120px',
            height: '3px',
            background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-primary-700) 100%)',
            margin: '0 auto 20px',
            borderRadius: '2px'
          }} />
          <h3 style={{
            fontSize: '1.1rem',
            color: 'var(--color-primary)',
            fontWeight: 600,
            margin: '0 0 8px'
          }}>
            Tailored solutions for every digital need
          </h3>
          <p style={{ 
            fontSize: '1rem', 
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6,
            color: 'var(--color-muted)'
          }}>
            Our platform provides powerful experiences to streamline your online processes and boost productivity.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: 24,
          maxWidth: 1000,
          margin: '0 auto'
        }}>
          {[
            { icon: <i className="fa-solid fa-cloud-arrow-up" style={{color:"#FF7A00"}}></i>, title: 'Cloud Storage', desc: 'Secure, reliable file delivery' },
            { icon: <i className="fa fa-key" style={{color:"#FF934F"}} aria-hidden="true"></i>              , title: 'API Integration', desc: 'Connect your applications' },
            { icon: <i className="fa fa-cogs" style={{color:"#FF5A1F"}} aria-hidden="true"></i>
              , title: 'Automation', desc: 'Automate repetitive workflows' }
          ].map((item, idx) => (
            <article key={idx} style={{ 
              background: 'white',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255,224,214,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,107,53,0.15)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            }}>
              
              {/* Icon */}
              <div style={{
                fontSize: '2.5rem',
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center'
              }}>
                <span>{item.icon}</span>
              </div>

              <h3 style={{ 
                margin: '0 0 8px',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--color-text)'
              }}>
                {item.title}
              </h3>
              
              <p style={{ 
                margin: 0, 
                color: 'var(--color-muted)',
                lineHeight: 1.5,
                fontSize: '0.9rem'
              }}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Second row with spacing - no heading */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: 24,
          maxWidth: 1000,
          margin: '60px auto 0'
        }}>
          {[
            { icon: <i className="fa fa-users" aria-hidden="true" style={{color:"#FFB84D"}}></i>, title: 'CRM & Engagement', desc: 'Delight customers at scale' },
            { icon: <i className="fa-solid fa-photo-film" style={{color:"#FF6F61"}}></i>, title: 'Social Media', desc: 'Build community and amplify' },
            { icon: <i className="fa fa-line-chart" style={{color:"#FF4D4D"}}></i>, title: 'Analytics & Insights', desc: 'Understand data to drive scale' },
            { icon: <i className="fa-solid fa-people-group" style={{color:"#FF884D"}}></i>, title: 'Brand Strategy', desc: 'Develop a unique identity and roadmap for growth' },
            { icon: <i className="fa-solid fa-code" style={{color:"#FF7A45"}}></i>, title: 'Web Development', desc: 'Build responsive, user-friendly websites' },
            { icon: <i className="fa-solid fa-cart-shopping" style={{color:"#FF5C33"}}></i>, title: 'E-commerce Solutions', desc: 'Launch and scale online store with ease' },
            { icon: <i className="fa-solid fa-lightbulb" style={{color:"#FF6600"}}></i>, title: 'Digital Marketing', desc: 'Reach target audience effectively' },
            { icon: <i className="fa-solid fa-building-shield" style={{color:"#CC4400"}}></i>, title: 'Cybersecurity', desc: 'Proactive protection for assets' },
            { icon: <i className="fa-solid fa-pen-fancy" style={{color:"#FFA366"}}></i>, title: 'Content Creation', desc: 'Build connect applications' }
          ].map((item, idx) => (
            <article key={`second-${idx}`} style={{ 
              background: 'white',
              borderRadius: 16,
              padding: 24,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255,224,214,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,107,53,0.15)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            }}>
              
              {/* Icon */}
              <div style={{
                fontSize: '2.5rem',
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center'
              }}>
                <span>{item.icon}</span>
              </div>

              <h3 style={{ 
                margin: '0 0 8px',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--color-text)'
              }}>
                {item.title}
              </h3>
              
              <p style={{ 
                margin: 0, 
                color: 'var(--color-muted)',
                lineHeight: 1.5,
                fontSize: '0.9rem'
              }}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};


