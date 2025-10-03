import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { GothicH1 } from '../components/GothicHeading';
import { DrippingText } from '../components/DrippingText';

const useQuery = () => new URLSearchParams(useLocation().search);

export const Signup: React.FC = () => {
  const q = useQuery();
  const plan = q.get('plan') || 'starter';

  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company, password })
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (res.status === 409) throw new Error(data.message || 'Email already in use');
        if (res.status === 400) throw new Error(data.message || 'Missing or invalid fields');
        throw new Error(data.message || `Failed to create account (code ${res.status})`);
      }
      const data = await res.json();
      await login(data.token);
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    }
  };

  if (submitted) {
    return (
      <section style={{ padding: '60px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>🎉</div>
        <GothicH1 text="You're in!" style={{ margin: '0 0 12px', fontSize: '2.5rem' }} />
        <DrippingText 
          text={`We created your ${plan} trial. Check your email to verify your account.`}
          style={{ color: '#4a5568', fontSize: '1rem' }}
        />
        <div style={{ marginTop: 24 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#667eea' }}>Go to home</Link>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: '60px 24px' }}>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <Link to="/pricing" style={{ textDecoration: 'none', color: '#667eea' }}>← Back to Pricing</Link>
        </div>
        <GothicH1 text={`Start your ${plan} trial`} style={{ margin: '0 0 12px', fontSize: '2.5rem' }} />
        <DrippingText 
          text="No credit card required."
          style={{ color: '#4a5568', margin: '0 0 24px', fontSize: '1rem' }}
        />
        {error && (
          <div style={{ background: '#FED7D7', color: '#742A2A', padding: '10px 12px', borderRadius: 8, marginBottom: 12 }}>
            {error}
          </div>
        )}
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: 16 }}>
          <input
            type="email"
            required
            placeholder="Work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '12px 14px', border: '1px solid #e2e8f0', borderRadius: 8 }}
          />
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            style={{ padding: '12px 14px', border: '1px solid #e2e8f0', borderRadius: 8 }}
          />
          <input
            type="password"
            required
            minLength={6}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '12px 14px', border: '1px solid #e2e8f0', borderRadius: 8 }}
          />
          <button type="submit" className="btn btn-primary">
            Create account
          </button>
        </form>
      </div>
    </section>
  );
};
