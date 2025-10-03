import React from 'react';
import { useParams, Link } from 'react-router-dom';

const tiers = {
  starter: {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 team members',
      'Basic analytics',
      '10 workflow automations',
      'Email support',
      'Mobile apps',
      'Basic integrations'
    ]
  },
  professional: {
    name: 'Professional',
    price: 79,
    description: 'Ideal for growing businesses',
    features: [
      'Up to 25 team members',
      'Advanced analytics',
      'Unlimited automations',
      'Priority support',
      'Advanced integrations',
      'Custom branding',
      'API access',
      'Advanced security'
    ]
  },
  enterprise: {
    name: 'Enterprise',
    price: 199,
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Custom analytics',
      'White-label solution',
      'Dedicated support',
      'Custom integrations',
      'Advanced compliance',
      'SLA guarantee',
      'On-premise option'
    ]
  }
} as const;

const money = (n: number) => `$${new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n)}`;

export const Plan: React.FC = () => {
  const { planId = 'starter' } = useParams();
  const key = (planId as keyof typeof tiers) || 'starter';
  const tier = tiers[key] || tiers.starter;

  return (
    <section style={{ padding: '60px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <Link to="/pricing" style={{ textDecoration: 'none', color: '#667eea' }}>← Back to Pricing</Link>
        </div>

        <h1 style={{ margin: '0 0 8px' }}>{tier.name}</h1>
        <p style={{ color: '#4a5568', margin: '0 0 16px' }}>{tier.description}</p>

        <div style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          alignItems: 'center',
          marginBottom: 24
        }}>
          <div style={{
            fontSize: '2rem',
            fontWeight: 800,
            color: '#667eea'
          }}>
            {money(tier.price)} <span style={{ fontSize: '1rem', color: '#4a5568' }}>/month</span>
          </div>
          <Link to={`/billing?plan=${planId}&price=${tier.price}`} style={{ color: '#667eea', textDecoration: 'none' }}>
            View billing breakdown
          </Link>
        </div>

        <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 20, marginBottom: 24 }}>
          <h3 style={{ margin: '0 0 12px' }}>What you get</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#4a5568' }}>
            {tier.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {planId === 'enterprise' ? (
            <Link to={`/contact-sales?plan=${planId}`} style={{
              display: 'inline-block',
              padding: '12px 24px',
              borderRadius: 8,
              border: '2px solid #667eea',
              color: '#667eea',
              textDecoration: 'none',
              fontWeight: 700
            }}>
              Contact Sales
            </Link>
          ) : (
            <Link to={`/signup?plan=${planId}`} style={{
              display: 'inline-block',
              padding: '12px 24px',
              borderRadius: 8,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 700
            }}>
              Start Free Trial
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
