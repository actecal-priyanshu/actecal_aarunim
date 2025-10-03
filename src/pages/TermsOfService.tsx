import React from 'react';
import { PageHero } from '../components/PageHero';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { CreativeCard } from '../components/CreativeCard';
import { FloatingElement } from '../components/FloatingElements';
import { Link } from 'react-router-dom';

export const TermsOfService: React.FC = () => {
  return (
    <main>
      <AnimatedBackground variant="gradient" intensity="medium">
        <PageHero
          title="Terms of Service"
          subtitle="please read these terms carefully before using our services."
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
                  these terms of service govern your use of bizsuite's services. by accessing or using our services, you agree to be bound by these terms.
                </p>
              </CreativeCard>
            </FloatingElement>

            <div style={{ display: 'grid', gap: 40 }}>
              {[
                {
                  title: 'Acceptance of Terms',
                  content: 'by accessing and using bizsuite\'s services, you accept and agree to be bound by the terms and provision of this agreement. if you do not agree to abide by the above, please do not use this service.'
                },
                {
                  title: 'Use License',
                  content: 'permission is granted to temporarily download one copy of the materials on bizsuite\'s website for personal, non-commercial transitory viewing only. this is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials, use the materials for any commercial purpose or for any public display, attempt to reverse engineer any software contained on the website, or remove any copyright or other proprietary notations from the materials.'
                },
                {
                  title: 'User Accounts',
                  content: 'when you create an account with us, you must provide information that is accurate, complete, and current at all times. you are responsible for safeguarding the password and for all activities that occur under your account. you agree to immediately notify us of any unauthorized uses of your account or any other breaches of security.'
                },
                {
                  title: 'Service Availability',
                  content: 'we strive to provide reliable service, but we do not guarantee that our services will be available at all times. we reserve the right to modify, suspend, or discontinue any service at any time without notice.'
                },
                {
                  title: 'Payment Terms',
                  content: 'some parts of the service are billed on a subscription basis. you will be billed in advance on a recurring and periodic basis. a valid payment method is required to process the payment for your subscription. you may cancel your subscription at any time, but no refunds will be provided for partial months or unused portions.'
                },
                {
                  title: 'Prohibited Uses',
                  content: 'you may not use our service for any unlawful purpose or to solicit others to perform unlawful acts. you may not violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances. prohibited activities include, but are not limited to: violating laws or regulations, transmitting viruses or malicious code, attempting to gain unauthorized access to our systems, and interfering with or disrupting our services.'
                },
                {
                  title: 'Intellectual Property',
                  content: 'the service and its original content, features, and functionality are and will remain the exclusive property of bizsuite and its licensors. the service is protected by copyright, trademark, and other laws.'
                },
                {
                  title: 'Disclaimer',
                  content: 'the information on this website is provided on an \'as is\' basis. bizsuite makes no representations or warranties of any kind, express or implied, as to the operation of this site or the information, content, materials, or products included on this site.'
                },
                {
                  title: 'Limitation of Liability',
                  content: 'bizsuite will not be liable for any damages of any kind arising from the use of this service, including but not limited to direct, indirect, incidental, punitive, and consequential damages.'
                },
                {
                  title: 'Termination',
                  content: 'we may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.'
                },
                {
                  title: 'Contact Information',
                  content: 'if you have any questions about these terms of service, please contact us at legal@bizsuite.com.'
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

            <FloatingElement direction="up" intensity="low" delay={1.2}>
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
