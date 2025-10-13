import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

export const Download: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Download"
        subtitle="Get BizSuite for your platform. Choose the edition that fits your needs."
        emphasize="none"
      />
      <section style={{ padding: '10px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 16px' }}>Choose platform</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32 }}>
            {['Windows','macOS','Linux','Docker'].map((p) => (
              <div key={p} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
                <h4 style={{ margin: 0 }}>{p}</h4>
                <button className="btn btn-primary" type="button" style={{ marginTop: 10 }}>Download</button>
              </div>
            ))}
          </div>
          <h2 style={{ margin: '24px 0 16px' }}>Before you download</h2>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#4a5568' }}>
            <li>Compare features in different editions.</li>
            <li>Review latest release notes.</li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
            <Link to="/compare-editions" className="btn btn-outline-primary">Compare Editions</Link>
            <Link to="/releases" className="btn btn-outline-primary">View Releases</Link>
          </div>
        </div>
      </section>
    </main>
  );
};
