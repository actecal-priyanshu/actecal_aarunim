import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const useQuery = () => new URLSearchParams(useLocation().search);

export const ContactSales: React.FC = () => {
  const q = useQuery();
  const plan = q.get('plan') || 'enterprise';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section style={{ padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>✅</div>
        <h1 style={{ margin: '0 0 12px' }}>Thanks! We'll be in touch</h1>
        <p style={{ color: '#4a5568' }}>Our sales team will contact you shortly about the {plan} plan.</p>
        <div style={{ marginTop: 24 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#667eea' }}>Return home</Link>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: '60px 24px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <Link to="/pricing" style={{ textDecoration: 'none', color: '#667eea' }}>← Back to Pricing</Link>
        </div>
        <h1 style={{ margin: '0 0 12px' }}>Contact Sales</h1>
        <p style={{ color: '#4a5568', margin: '0 0 24px' }}>Tell us about your needs and we'll tailor the {plan} plan for you.</p>
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: 16 }}>
          <input
            type="text"
            required
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '12px 14px', border: '1px solid #e2e8f0', borderRadius: 8 }}
          />
          <input
            type="email"
            required
            placeholder="Work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '12px 14px', border: '1px solid #e2e8f0', borderRadius: 8 }}
          />
          <textarea
            placeholder="What challenges are you trying to solve?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            style={{ padding: '12px 14px', border: '1px solid #e2e8f0', borderRadius: 8 }}
          />
          <button type="submit" style={{
            padding: '12px 18px',
            border: '2px solid #667eea',
            borderRadius: 8,
            color: '#667eea',
            background: 'transparent',
            fontWeight: 700
          }}>
            Send request
          </button>
        </form>
      </div>
    </section>
  );
};
