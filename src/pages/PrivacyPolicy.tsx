import React from 'react';
import { PageHero } from '../components/PageHero';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { CreativeCard } from '../components/CreativeCard';
import { FloatingElement } from '../components/FloatingElements';
import { Link } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
  return (
    <main>
      <AnimatedBackground variant="gradient" intensity="medium">
        <PageHero
          title="Privacy Policy"
          subtitle="we're committed to protecting your privacy and being transparent about our data practices."
          icon={<i className="fa-solid fa-cloud-arrow-up" style={{ fontSize: '4rem', color: 'white' }} />}
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
                  your privacy is important to us. this privacy policy explains how bizsuite collects, uses, and protects your personal information when you use our services.
                </p>
              </CreativeCard>
            </FloatingElement>

            <div style={{ display: 'grid', gap: 40 }}>
              {[
                {
                  title: 'Information We Collect',
                  content: 'we collect information you provide directly to us, such as when you create an account, update your profile, make a purchase, participate in surveys, or contact us for support. this includes personal information (name, email, phone number), payment and billing information, profile information and preferences, and communications you send to us.'
                },
                {
                  title: 'How We Use Your Information',
                  content: 'we use the information we collect to provide, maintain, and improve our services, process transactions and send related information, send technical notices, updates, and support messages, respond to your comments and questions, and communicate with you about products, services, and events.'
                },
                {
                  title: 'Information Sharing and Disclosure',
                  content: 'we do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. we may share your information with your explicit consent, to comply with legal obligations, to protect our rights and safety, or in connection with a business transfer.'
                },
                {
                  title: 'Data Security',
                  content: 'we implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. these measures include encryption, secure servers, and regular security assessments.'
                },
                {
                  title: 'Your Rights',
                  content: 'you have the right to access the personal information we hold about you, correct inaccurate or incomplete information, request deletion of your personal information, object to or restrict processing of your information, and data portability.'
                },
                {
                  title: 'Contact Us',
                  content: 'if you have any questions about this privacy policy or our data practices, please contact us at privacy@bizsuite.com or visit our help center for more information.'
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

            <FloatingElement direction="up" intensity="low" delay={0.8}>
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
