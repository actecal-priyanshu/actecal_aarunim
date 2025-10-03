import React, { useState } from 'react';
import { GothicH2, GothicH4 } from './GothicHeading';
import { DrippingText } from './DrippingText';

type Props = {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
};

export const NewsletterSignup: React.FC<Props> = ({ 
  title = "Stay Updated",
  subtitle = "Get the latest news, updates, and exclusive offers delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe"
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };


  return (
    <section style={{ 
      padding: '80px 24px', 
      background: '#4a4a4a',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <GothicH2 
          text={title}
          style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            margin: '0 0 20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            color: '#FFFFFF'
          }}
        />
        
        <p style={{ 
          fontSize: '0.95rem', 
          margin: '0 0 40px',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.8)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          GET EXCLUSIVE INSIGHTS, PRODUCT UPDATES, AND INDUSTRY TRENDS DELIVERED TO YOUR INBOX. JOIN 50,000+ PROFESSIONALS WHO TRUST US.
        </p>

        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          gap: 16,
          maxWidth: 500,
          margin: '0 auto',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            style={{
              flex: '1 1 300px',
              padding: '16px 20px',
              borderRadius: 12,
              fontSize: '1rem',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              outline: 'none',
              transition: 'all 0.3s ease'
            }} onFocus={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)';
            }} onBlur={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
            }}
          />
          
          <button
            type="submit"
            disabled={isLoading || !email}
            style={{
              padding: '16px 32px',
              background: isLoading 
                ? '#4a5568' 
                : '#f4a261',
              color: '#2d2d2d',
              border: 'none',
              borderRadius: 6,
              fontSize: '1rem',
              fontWeight: 700,
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              minWidth: 140,
              opacity: isLoading || !email ? 0.6 : 1
            }} onMouseEnter={(e) => {
              if (!isLoading && email) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(244, 162, 97, 0.4)';
              }
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
            {isLoading ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <div style={{
                  width: 16,
                  height: 16,
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTop: '2px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
                Subscribing...
              </div>
            ) : (
              buttonText
            )}
          </button>
        </form>

        <p style={{
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.7)',
          margin: '16px 0 0',
          lineHeight: 1.5
        }}>
          🔒 We respect your privacy. Unsubscribe at any time.
        </p>

        {/* Benefits Cards */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 20,
          marginTop: 40,
          flexWrap: 'wrap'
        }}>
          {[
            { icon: '📧', title: 'Weekly Updates', desc: 'Get the latest product news and feature releases' },
            { icon: '🎯', title: 'Exclusive Offers', desc: 'Access to special discounts and early access' },
            { icon: '💡', title: 'Pro Tips', desc: 'Learn how to get the most out of our platform' }
          ].map((benefit, idx) => (
            <div key={idx} style={{
              background: 'rgba(255,255,255,0.08)',
              borderRadius: 8,
              padding: '24px 20px',
              textAlign: 'center',
              minWidth: '180px',
              maxWidth: '200px',
              border: '1px solid rgba(255,255,255,0.15)'
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{benefit.icon}</div>
              <h4 style={{
                fontSize: '1.1rem',
                margin: '0 0 8px',
                color: '#FFFFFF',
                fontWeight: 700
              }}>
                {benefit.title}
              </h4>
              <p style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.8)',
                margin: 0,
                lineHeight: 1.4
              }}>
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>


      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
