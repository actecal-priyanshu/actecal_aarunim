import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

export const Github: React.FC = () => {
  return (
    <main>
      <PageHero
        title="GitHub"
        subtitle="Explore the source, contribute, and track development."
        emphasize="none"
      />
      <section style={{ padding: '10px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 12 }}>
            <Link to="/community" style={{ textDecoration: 'none', color: '#667eea' }}>← Back to Community</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[{t:'Repository', d:'Browse code, branches, and tags.'}, {t:'Issues', d:'Report bugs or request features.'}, {t:'Pull Requests', d:'Contribute improvements.'}].map((it, i) => (
              <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
                <h4 style={{ margin: '0 0 8px' }}>{it.t}</h4>
                <p style={{ margin: 0, color: '#4a5568' }}>{it.d}</p>
              </div>
            ))}
          </div>
          <h2 style={{ margin: '24px 0 12px' }}>Quick links</h2>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#4a5568' }}>
            <li>Security policy and responsible disclosure</li>
            <li>Code of conduct</li>
            <li>Release workflow and versioning</li>
          </ul>
          <h2 style={{ margin: '24px 0 12px' }}>Contributing</h2>
          <ol style={{ margin: 0, paddingLeft: 18, color: '#4a5568' }}>
            <li>Fork the repository</li>
            <li>Create a branch (feature/fix)</li>
            <li>Open a PR with context and screenshots</li>
          </ol>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
            <Link to="/docs" className="btn btn-outline-primary">Contributing Guide</Link>
            <Link to="/releases" className="btn btn-outline-primary">Release notes</Link>
          </div>
        </div>
      </section>
    </main>
  );
};
