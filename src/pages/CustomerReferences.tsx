import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

export const CustomerReferences: React.FC = () => {
  const [active, setActive] = React.useState<string>('All');
  const cases = [
    { name: 'SmallBiz Solutions', summary: 'Unified sales and inventory, reduced manual work by 40%.', industry: 'Retail' },
    { name: 'TechStart Inc.', summary: 'Automated billing and reporting, saving 20 hrs/week.', industry: 'SaaS' },
    { name: 'LogiCorp', summary: 'Streamlined procurement and warehouse operations.', industry: 'Logistics' },
    { name: 'GreenFoods', summary: 'Improved traceability across suppliers and batches.', industry: 'Food & Beverage' },
    { name: 'Sunrise Clinics', summary: 'Consolidated billing and inventory across 12 clinics.', industry: 'Healthcare' },
    { name: 'QuickShip', summary: 'Optimized picking routes and reduced delivery time by 15%.', industry: 'Logistics' },
  ];
  return (
    <main>
      <PageHero
        title="Customer References"
        subtitle="See how teams use BizSuite to simplify operations and grow."
        emphasize="none"
      />
      <section style={{ padding: '10px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 12 }}>
            <Link to="/community" style={{ textDecoration: 'none', color: '#667eea' }} reloadDocument>← Back to Community</Link>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '0 0 16px' }}>
            {['All','Retail','SaaS','Logistics','Healthcare','Food & Beverage','Manufacturing','Services'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActive(tag)}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: 999,
                  padding: '6px 10px',
                  fontSize: 12,
                  background: active === tag ? '#edf2ff' : '#fff',
                  color: active === tag ? '#2b6cb0' : '#2d3748',
                  cursor: 'pointer'
                }}
              >{tag}</button>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {cases
              .filter((c) => active === 'All' || c.industry === active)
              .map((c) => (
              <div key={c.name} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
                <h4 style={{ margin: '0 0 6px' }}>{c.name}</h4>
                <p style={{ margin: 0, color: '#718096' }}>{c.industry}</p>
                <p style={{ margin: '8px 0 0', color: '#4a5568' }}>{c.summary}</p>
                <div style={{ marginTop: 10 }}>
                  <Link to="/blog" className="btn btn-outline-primary" reloadDocument>Read story</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
            <Link to="/contact-sales" className="btn btn-primary" reloadDocument>Talk to sales</Link>
            <Link to="/features" className="btn btn-outline-primary" reloadDocument>Explore features</Link>
            <Link to="/customer-references" className="btn btn-outline-primary" reloadDocument>Submit your story</Link>
          </div>
        </div>
      </section>
    </main>
  );
};
