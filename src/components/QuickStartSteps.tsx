import React from 'react';

export const QuickStartSteps: React.FC = () => {
  const steps = [
    { num: 1, title: 'Sign up', text: 'Create your account in seconds.' },
    { num: 2, title: 'Pick your apps', text: 'CRM, Finance, HR and more.' },
    { num: 3, title: 'Go live', text: 'Invite your team and start working.' }
  ];

  return (
    <section style={{ padding: '36px 24px 20px', background: '#ffffff' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', margin: '0 0 18px', fontSize: '1.3rem', color: '#0f172a' }}>
          Get started in minutes
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 18
        }}>
          {steps.map((s) => (
            <div key={s.num} style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: 16
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: '#7c3aed', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{s.num}</div>
                <div style={{ fontWeight: 700, color: '#0f172a' }}>{s.title}</div>
              </div>
              <div style={{ marginTop: 8, color: '#475569', fontSize: '0.95rem' }}>{s.text}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 16, color: '#64748b', fontSize: '0.9rem' }}>
          No credit card needed. Cancel anytime.
        </div>
      </div>
    </section>
  );
};

export default QuickStartSteps;


