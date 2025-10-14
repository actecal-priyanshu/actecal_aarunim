import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

export const Support: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Support"
        subtitle="Need help? Browse docs, open a ticket, or contact our team."
        emphasize="none"
      />
      <section style={{ padding: '10px 24px 60px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ marginBottom: 12 }}>
            <Link to="/community" style={{ textDecoration: 'none', color: '#667eea' }} reloadDocument>← Back to Community</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
              <h4 style={{ margin: 0 }}>Knowledge Base</h4>
              <p style={{ margin: '8px 0 12px', color: '#4a5568' }}>Guides, FAQs, and troubleshooting articles.</p>
              <Link to="/help-center" className="btn btn-outline-primary" reloadDocument>Open Help Center</Link>
            </div>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
              <h4 style={{ margin: 0 }}>Documentation</h4>
              <p style={{ margin: '8px 0 12px', color: '#4a5568' }}>Technical docs, API reference, and examples.</p>
              <Link to="/docs" className="btn btn-outline-primary" reloadDocument>Browse Docs</Link>
            </div>
            <div style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
              <h4 style={{ margin: 0 }}>Open a Ticket</h4>
              <p style={{ margin: '8px 0 12px', color: '#4a5568' }}>Report an issue or request assistance.</p>
              <Link to="/support" className="btn btn-primary" reloadDocument>Submit Ticket</Link>
            </div>
          </div>
          <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/forum" className="btn btn-outline-primary" reloadDocument>Ask the Community</Link>
            <Link to="/status" className="btn btn-outline-primary" reloadDocument>System Status</Link>
          </div>
        </div>
      </section>
    </main>
  );
};


