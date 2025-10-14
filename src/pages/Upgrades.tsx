import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

export const Upgrades: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Upgrades"
        subtitle="Plan your upgrade with confidence: assess, test, migrate, and go live with minimal downtime."
        emphasize="none"
      />
      <section style={{ padding: '10px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 12 }}>
            <Link to="/community" style={{ textDecoration: 'none', color: '#667eea' }} reloadDocument>← Back to Community</Link>
          </div>
          <h2 style={{ margin: '0 0 16px' }}>Recommended path</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 24 }}>
            {[{t:'1) Assess', d:'Review current version, customizations, and integrations.'}, {t:'2) Sandbox', d:'Spin up a test environment and import sample data.'}, {t:'3) Validate', d:'Run critical workflows, data checks, and performance tests.'}, {t:'4) Migrate', d:'Schedule cutover, back up data, and monitor post‑go‑live.'}].map((it, i) => (
              <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
                <h4 style={{ margin: 0 }}>{it.t}</h4>
                <p style={{ margin: '8px 0 0', color: '#4a5568' }}>{it.d}</p>
              </div>
            ))}
          </div>

          <h2 style={{ margin: '24px 0 16px' }}>Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[{t:'Release notes', link:'/releases', d:'See what changed in each version.'}, {t:'Security', link:'/security', d:'Review security changes and hardening steps.'}, {t:'Implementation services', link:'/implementation-services', d:'Get expert help for complex upgrades.'}].map((card) => (
              <Link key={card.t} to={card.link} className="blog-card" style={{ textDecoration: 'none' }} reloadDocument>
                <h4 style={{ margin: 0 }}>{card.t}</h4>
                <p style={{ margin: '8px 0 0', color: '#4a5568' }}>{card.d}</p>
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
            <Link to="/contact-sales" className="btn btn-primary" reloadDocument>Talk to sales</Link>
            <Link to="/support" className="btn btn-outline-primary" reloadDocument>Open a support ticket</Link>
            <Link to="/customer-references" className="btn btn-outline-primary" reloadDocument>Read customer stories</Link>
          </div>
        </div>
      </section>
    </main>
  );
};
