import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const useQuery = () => new URLSearchParams(useLocation().search);

const format = (n: number) => new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

export const Billing: React.FC = () => {
  const q = useQuery();
  const plan = (q.get('plan') || 'starter').toLowerCase();
  const baseMonthly = parseFloat(q.get('price') || '29') || 0;
  const annual = q.get('annual') === 'true';

  const monthlyPrice = annual ? baseMonthly * 0.8 : baseMonthly;
  const yearlyTotal = baseMonthly * 0.8 * 12;

  const title = plan.charAt(0).toUpperCase() + plan.slice(1);

  return (
    <section style={{ padding: '60px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 24 }}>
          <Link to="/pricing" style={{ textDecoration: 'none', color: '#667eea' }}>← Back to Pricing</Link>
        </div>

        <h1 style={{ margin: '0 0 12px' }}>Billing Details</h1>
        <p style={{ color: '#4a5568', margin: '0 0 24px' }}>
          Plan: <strong>{title}</strong>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 20 }}>
            <h3 style={{ margin: '0 0 8px' }}>Monthly billing</h3>
            <p style={{ margin: 0, color: '#4a5568' }}>
              ${format(baseMonthly)} / month
            </p>
          </div>

          <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 20 }}>
            <h3 style={{ margin: '0 0 8px' }}>Annual billing</h3>
            <p style={{ margin: 0, color: '#4a5568' }}>
              ${format(baseMonthly * 0.8)} / month (20% off)
            </p>
            <p style={{ margin: '8px 0 0', color: '#4a5568' }}>
              Billed annually: <strong>${format(yearlyTotal)}</strong>
            </p>
          </div>
        </div>

        <div style={{ marginTop: 32, borderTop: '1px solid #eee', paddingTop: 24 }}>
          <h3 style={{ margin: '0 0 12px' }}>Your selection</h3>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#4a5568' }}>
            <li>Billing cycle: {annual ? 'Annual (20% discount)' : 'Monthly'}</li>
            <li>Monthly charge: ${format(monthlyPrice)}</li>
            {annual && <li>Annual charge (once per year): ${format(yearlyTotal)}</li>}
          </ul>
        </div>

        <div style={{ marginTop: 32 }}>
          <Link to={`/signup?plan=${plan}`} style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '12px 24px',
            borderRadius: 8,
            textDecoration: 'none',
            fontWeight: 700
          }}>
            Continue to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};
