import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

export const Forum: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Forum"
        subtitle="Ask questions, share solutions, and learn from the community."
        emphasize="none"
      />
      <section style={{ padding: '10px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 12 }}>
            <Link to="/community" style={{ textDecoration: 'none', color: '#667eea' }} reloadDocument>← Back to Community</Link>
          </div>
          <h2 style={{ margin: '0 0 16px' }}>Popular topics</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 24 }}>
            {['Getting Started','Integrations','Accounting','Inventory','HR & Payroll','Reporting'].map((t) => (
              <div key={t} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
                <h4 style={{ margin: 0 }}>{t}</h4>
              </div>
            ))}
          </div>
          <h2 style={{ margin: '24px 0 12px' }}>Guidelines</h2>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#4a5568' }}>
            <li>Search before posting; include steps and screenshots.</li>
            <li>Be respectful and keep discussions on-topic.</li>
            <li>Mark the best answer to help others.</li>
          </ul>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
            <button type="button" className="btn btn-primary">Ask a question</button>
            <Link to="/docs" className="btn btn-outline-primary" reloadDocument>Browse Docs</Link>
            <Link to="/support" className="btn btn-outline-primary" reloadDocument>Contact Support</Link>
          </div>
        </div>
      </section>
    </main>
  );
};
