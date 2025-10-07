import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import Home from './pages/Home';
import { Apps } from './pages/Apps';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Solutions } from './pages/Solutions';
import { Features } from './pages/Features';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Careers } from './pages/Careers';
import { Docs } from './pages/Docs';
import { Support } from './pages/Support';
import { NotFound } from './pages/NotFound';
import { Billing } from './pages/Billing';
import { Plan } from './pages/Plan';
import { Signup } from './pages/Signup';
import { ContactSales } from './pages/ContactSales';
import { Signup } from './pages/Signup';
import { RequireAuth } from './auth/RequireAuth';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';
import { HelpCenter } from './pages/HelpCenter';
import { APIReference } from './pages/APIReference';
import { Status } from './pages/Status';
import { AppDetail } from './pages/AppDetail';

function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/apps/:slug" element={<AppDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/plans/:planId" element={<Plan />} />
        <Route path="/billing" element={<RequireAuth><Billing /></RequireAuth>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/contact-sales" element={<ContactSales />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/api-reference" element={<APIReference />} />
        <Route path="/status" element={<Status />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </SiteLayout>
  );
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer style={{ 
      background: '#1A1A1A',
      color: 'white'
    }}>
      {/* Newsletter Section */}
      <div style={{
        textAlign: 'center',
        padding: '80px 24px 60px',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: 700,
            margin: '0 0 16px',
            color: 'white'
          }}>
            Stay Ahead of the Curve
          </h2>
          <p style={{
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.8)',
            margin: '0 0 40px',
            lineHeight: 1.6
          }}>
            Get exclusive insights, product updates, and industry trends delivered to your inbox. Join thousands of professionals who trust us.
          </p>

          {isSubscribed ? (
            <div style={{
              background: 'rgba(72, 187, 120, 0.2)',
              border: '1px solid rgba(72, 187, 120, 0.4)',
              borderRadius: 8,
              padding: '16px',
              color: '#68D391'
            }}>
              ✓ Thank you for subscribing! Check your email for confirmation.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} style={{
              display: 'flex',
              gap: 12,
              maxWidth: 400,
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                style={{
                  flex: '1 1 250px',
                  padding: '14px 16px',
                  borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '14px 24px',
                  background: '#f4a261',
                  color: '#2d2d2d',
                  border: 'none',
                  borderRadius: 6,
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(244, 162, 97, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Subscribe
              </button>
            </form>
          )}

          <p style={{
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.6)',
            margin: '16px 0 0',
            lineHeight: 1.5
          }}>
            🔒 We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Feature Highlights */}
      <div style={{
        padding: '60px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24
        }}>
          {[
            {
              icon: <i className="fa fa-envelope" aria-hidden="true" style={{ color:"#3B82F6" }}></i>,
              title: 'Weekly Updates',
              description: 'Get the latest product news and feature releases delivered to your inbox every week.'
            },
            {
              icon:<i className="fa fa-bullseye" aria-hidden="true" style={{ color:"#8B5CF6" }}></i>,
              title: 'Exclusive Access',
              description: 'Be the first to access new features, beta programs, and special member-only content.'
            },
            {
              icon:<i className="fa-solid fa-lightbulb" style={{ color:"#EAB308" }}></i>,
              title: 'Pro Tips & Insights',
              description: 'Learn advanced techniques and best practices from our team of experts and industry leaders.'
            }
          ].map((feature, idx) => (
            <div key={idx} style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              padding: '32px 24px',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>{feature.icon}</div>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                margin: '0 0 12px',
                color: 'white'
              }}>
                {feature.title}
              </h4>
              <p style={{
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.8)',
                margin: 0,
                lineHeight: 1.5
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Links Section */}
      <div style={{ 
        padding: '60px 24px 40px'
      }}>
        <div style={{ 
          maxWidth: 1200, 
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 40,
            marginBottom: 40
          }}>
            <div>
              <div style={{ 
                fontWeight: 800, 
                fontSize: '1.5rem',
                marginBottom: 16,
                color: 'var(--color-primary)'
              }}>
                BizSuite              </div>
              <div style={{ 
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.6,
                marginBottom: 24
              }}>
                Modern business solutions, unified. Transform your workflow with our comprehensive suite of applications designed for the modern enterprise.
              </div>
              <div style={{
                display: 'flex',
                gap: 12
              }}>
                {[
                  { name: 'T', label: 'Twitter' },
                  { name: 'L', label: 'LinkedIn' },
                  { name: 'G', label: 'GitHub' },
                  { name: 'Y', label: 'YouTube' }
                ].map((social) => (
                  <a key={social.name} href={`#${social.label.toLowerCase()}`} style={{
                    width: 36,
                    height: 36,
                    borderRadius: 6,
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-primary)';
                    e.currentTarget.style.color = '#2d2d2d';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                margin: '0 0 20px',
                color: 'white'
              }}>
                Product
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12
              }}>
                {['Features', 'Integrations', 'Pricing', 'Security', 'Roadmap'].map((item) => (
                  <Link key={item} to={`/${item.toLowerCase()}`} style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-primary)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                  }}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                margin: '0 0 20px',
                color: 'white'
              }}>
                Company
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12
              }}>
                {['About', 'Blog', 'Careers', 'Press', 'Partners'].map((item) => (
                  <Link key={item} to={`/${item.toLowerCase()}`} style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#f4a261';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                  }}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                margin: '0 0 20px',
                color: 'white'
              }}>
                Support
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12
              }}>
                {['Help Center', 'Documentation', 'API Reference', 'Status', 'Contact'].map((item) => (
                  <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} style={{
                    color: 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#f4a261';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                  }}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: 32,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16
          }}>
            <div style={{
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.9rem'
            }}>
              © 2024 BizSuite. All rights reserved.
            </div>
            <div style={{
              display: 'flex',
              gap: 24,
              fontSize: '0.9rem'
            }}>
              <Link to="/privacy" style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.color = '#f4a261';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
              }}>
                Privacy Policy
              </Link>
              <Link to="/terms" style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-primary)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
              }}>
                Terms of Service
              </Link>
              <Link to="/cookies" style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-primary)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
              }}>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
