import React from 'react';
import { PageHero } from '../components/PageHero';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { CreativeCard } from '../components/CreativeCard';
import { FloatingElement } from '../components/FloatingElements';
import { Link } from 'react-router-dom';

export const CookiePolicy: React.FC = () => {
  return (
    <main>
      <AnimatedBackground variant="gradient" intensity="medium">
        <PageHero
          title="Cookie Policy"
          subtitle="learn about how we use cookies to improve your experience."
          imageUrl="https://assets-persist.lovart.ai/agent_images/b25bca6b-06e7-40a8-88a2-64c1d4826334.jpg"
          emphasize="scribble"
          textColor="#ffffff"
        />
      </AnimatedBackground>

      <AnimatedBackground variant="particles" intensity="low">
        <section style={{ padding: '80px 24px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <FloatingElement direction="up" intensity="low" delay={0.2}>
              <CreativeCard
                variant="glass"
                hoverEffect="lift"
                size="large"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  marginBottom: '60px'
                }}
              >
                <p style={{
                  color: '#475569',
                  lineHeight: 1.9,
                  fontSize: '1.1rem',
                  margin: 0,
                  textAlign: 'center'
                }}>
                  we use cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from.
                </p>
              </CreativeCard>
            </FloatingElement>

            <div style={{ display: 'grid', gap: 40 }}>
              {[
                {
                  title: 'What Are Cookies',
                  content: 'cookies are small text files that are used to store small pieces of information. they are stored on your device when the website is loaded on your browser. these cookies help us make the website function properly, make it more secure, provide better user experience, and understand how the website performs.'
                },
                {
                  title: 'How We Use Cookies',
                  content: 'we use cookies for several purposes: essential cookies required for the website to function and cannot be switched off in our systems; preference cookies that remember your settings and preferences; analytics cookies that help us understand how visitors interact with our website; and marketing cookies used to deliver relevant advertisements.'
                },
                {
                  title: 'Types of Cookies We Use',
                  content: 'essential cookies are necessary for the website to function and cannot be switched off. performance cookies allow us to count visits and traffic sources so we can measure and improve performance. functional cookies enable enhanced functionality and personalization. targeting cookies may be set by our advertising partners to build a profile of your interests.'
                },
                {
                  title: 'Managing Cookies',
                  content: 'you can control and manage cookies in various ways. please note that removing or blocking cookies can negatively affect your user experience and parts of our website may no longer be fully accessible. most web browsers automatically accept cookies, but you can modify your browser setting to decline cookies if you prefer.'
                },
                {
                  title: 'Third-Party Cookies',
                  content: 'some cookies may be set by third-party services that appear on our pages. we have no control over these cookies, and you should check the relevant third party\'s website for more information about their cookies.'
                },
                {
                  title: 'Contact Us',
                  content: 'if you have any questions about our use of cookies or this cookie policy, please contact us at privacy@bizsuite.com.'
                }
              ].map((section, index) => (
                <FloatingElement key={index} direction="up" intensity="low" delay={index * 0.1}>
                  <CreativeCard
                    variant="minimal"
                    hoverEffect="glow"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      padding: '32px'
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      margin: '0 0 16px',
                      color: '#1a1a1a',
                      fontFamily: 'var(--font-gothic)'
                    }}>
                      {section.title}
                    </h3>
                    <p style={{
                      color: '#475569',
                      lineHeight: 1.7,
                      fontSize: '1rem',
                      margin: 0
                    }}>
                      {section.content}
                    </p>
                  </CreativeCard>
                </FloatingElement>
              ))}
            </div>

            <FloatingElement direction="up" intensity="low" delay={0.7}>
              <div style={{ textAlign: 'center', marginTop: 60 }}>
                <Link to="/" style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  ← Back to Home
                </Link>
              </div>
            </FloatingElement>
          </div>
        </section>
      </AnimatedBackground>
    </main>
  );
};
