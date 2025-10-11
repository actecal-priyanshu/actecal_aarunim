import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

export const Tutorials: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Tutorials"
        subtitle="Step-by-step guides to help you set up, integrate, and ship faster with BizSuite."
        emphasize="none"
      />

      <section style={{ padding: '10px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 16px' }}>Quick starts</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 32 }}>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
              <h4 style={{ margin: '0 0 8px' }}>Set up your first app</h4>
              <p style={{ margin: '0 0 12px', color: '#4a5568' }}>Install core modules and configure your workspace.</p>
              <Link to="/apps" className="btn btn-outline-primary">Open Apps</Link>
            </div>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
              <h4 style={{ margin: '0 0 8px' }}>Integrate via API</h4>
              <p style={{ margin: '0 0 12px', color: '#4a5568' }}>Authenticate and make your first API call.</p>
              <Link to="/api-reference" className="btn btn-outline-primary">API Reference</Link>
            </div>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
              <h4 style={{ margin: '0 0 8px' }}>Secure your workspace</h4>
              <p style={{ margin: '0 0 12px', color: '#4a5568' }}>Best practices for roles, SSO, and data protection.</p>
              <Link to="/security" className="btn btn-outline-primary">Read Security</Link>
            </div>
          </div>

          <h2 style={{ margin: '24px 0 16px' }}>Featured tutorials</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 32 }}>
            {[{
              t: 'Onboarding checklist', d: 'Invite your team, set permissions, and launch fast.', link: '/help-center'
            },{
              t: 'Connect integrations', d: 'Enable key integrations and automate workflows.', link: '/integrations'
            },{
              t: 'Track deployments', d: 'Monitor health and releases with Status.', link: '/status'
            }].map((it, i) => (
              <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
                <h4 style={{ margin: '0 0 8px' }}>{it.t}</h4>
                <p style={{ margin: '0 0 12px', color: '#4a5568' }}>{it.d}</p>
                <Link to={it.link} className="btn btn-outline-primary">Open</Link>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/docs" className="btn btn-primary">Browse all Docs</Link>
            <Link to="/help-center" className="btn btn-outline-primary">Get Help</Link>
          </div>
        </div>
      </section>
    </main>
  );
};
