import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SupportLayout from '../components/SupportLayout';

export const HelpCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "To create an account, click the 'Sign Up' button in the top right corner of our homepage. Fill in your details including your name, email address, and password. You'll receive a confirmation email to verify your account."
    },
    {
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password?' on the login page. Enter your email address and we'll send you a link to reset your password. The link will expire after 24 hours for security reasons."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for annual subscriptions. All payments are processed securely through our payment partners."
    },
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged a prorated amount for the remainder of your billing cycle. Downgrades take effect at the next billing cycle."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription from your account settings under the 'Billing' section. Your account will remain active until the end of your current billing period, and you won't be charged for the next cycle."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied with our service within the first 30 days, contact our support team for a full refund."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our support team through the contact form on our website, by emailing support@bizsuite.com, or through the live chat feature available on our dashboard during business hours."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take security seriously. All data is encrypted in transit and at rest. We use industry-standard security measures and regular security audits to protect your information."
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SupportLayout
      title="Help Center"
      intro="Browse guides, troubleshoot issues, or reach out to our support squad whenever you need a hand."
    >
      <div style={{ display: 'grid', gap: 36 }}>
        <section
          style={{
            display: 'grid',
            gap: 18,
            padding: '26px 30px',
            borderRadius: 24,
            border: '1px solid rgba(251, 146, 60, 0.35)',
            background: 'linear-gradient(135deg, rgba(255, 247, 237, 0.95) 0%, rgba(255, 239, 224, 0.85) 100%)',
            boxShadow: '0 25px 50px rgba(249, 115, 22, 0.12)'
          }}
        >
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Search the knowledge base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 22px 16px 56px',
                borderRadius: 16,
                border: '1px solid rgba(251, 146, 60, 0.45)',
                background: '#ffffff',
                color: '#1f2937',
                fontSize: '1rem',
                outline: 'none',
                transition: 'box-shadow 0.25s ease',
                boxShadow: '0 10px 20px rgba(249, 115, 22, 0.06)'
              }}
              onFocus={(e) => (e.target.style.boxShadow = '0 12px 28px rgba(249, 115, 22, 0.15)')}
              onBlur={(e) => (e.target.style.boxShadow = '0 10px 20px rgba(249, 115, 22, 0.06)')}
            />
            <span
              style={{
                position: 'absolute',
                left: 22,
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '1.1rem',
                color: '#f97316'
              }}
            >
              🔍
            </span>
          </div>
          <p style={{ margin: 0, color: '#6b7280', fontSize: '0.95rem' }}>
            Search across {faqs.length} FAQs and troubleshooting guides.
          </p>
        </section>

        <section style={{ display: 'grid', gap: 20 }}>
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
            <h2
              style={{
                margin: 0,
                fontSize: '1.9rem',
                fontWeight: 700,
                color: '#1f2937'
              }}
            >
              Frequently Asked Questions
            </h2>
            <span style={{ fontSize: '0.95rem', color: '#f97316', fontWeight: 600 }}>
              Updated weekly
            </span>
          </header>

          {filteredFAQs.length === 0 ? (
            <div
              style={{
                padding: '26px 28px',
                borderRadius: 20,
                border: '1px solid rgba(251, 146, 60, 0.25)',
                background: 'rgba(255, 240, 230, 0.85)',
                textAlign: 'center',
                color: '#f97316',
                fontWeight: 600
              }}
            >
              No results for "{searchTerm}". Try a broader keyword.
            </div>
          ) : (
            <div style={{ display: 'grid', gap: 16 }}>
              {filteredFAQs.map((faq, index) => {
                const isOpen = expandedFAQ === index;
                return (
                  <div
                    key={faq.question}
                    style={{
                      borderRadius: 22,
                      border: '1px solid rgba(251, 146, 60, 0.3)',
                      background: '#fff',
                      boxShadow: '0 18px 40px rgba(249, 115, 22, 0.12)',
                      overflow: 'hidden'
                    }}
                  >
                    <button
                      onClick={() => setExpandedFAQ(isOpen ? null : index)}
                      style={{
                        width: '100%',
                        padding: '20px 24px',
                        background: 'transparent',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 650,
                          fontSize: '1.05rem',
                          color: '#1f2937',
                          textAlign: 'left'
                        }}
                      >
                        {faq.question}
                      </span>
                      <span
                        style={{
                          color: '#f97316',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                          fontSize: '1.1rem'
                        }}
                      >
                        ▼
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: '0 24px 22px',
                          borderTop: '1px solid rgba(251, 146, 60, 0.2)',
                          color: '#4b5563',
                          lineHeight: 1.7
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section
          style={{
            display: 'grid',
            gap: 18,
            padding: '32px 34px',
            borderRadius: 26,
            border: '1px solid rgba(249, 115, 22, 0.35)',
            background: 'linear-gradient(135deg, #ffe7d1 0%, #ffe0c2 100%)',
            textAlign: 'center',
            boxShadow: '0 30px 60px rgba(249, 115, 22, 0.12)'
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.6rem', color: '#1f2937', fontWeight: 700 }}>
            Still need help?
          </h3>
          <p style={{ margin: 0, color: '#4b5563', fontSize: '1rem' }}>
            Connect with our support engineers for tailored assistance.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                padding: '12px 26px',
                borderRadius: 999,
                background: '#f97316',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 700,
                letterSpacing: '0.01em',
                boxShadow: '0 15px 35px rgba(249, 115, 22, 0.25)'
              }}
            >
              Contact Support
            </Link>
            <a
              href="mailto:support@bizsuite.com"
              style={{
                padding: '12px 26px',
                borderRadius: 999,
                border: '1px solid rgba(249, 115, 22, 0.45)',
                color: '#f97316',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              Email Us
            </a>
          </div>
        </section>
      </div>
    </SupportLayout>
  );
};


