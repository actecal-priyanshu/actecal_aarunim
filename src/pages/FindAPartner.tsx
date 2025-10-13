import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

export const FindAPartner: React.FC = () => {
  const partners = [
    { name: 'Acme Solutions', city: 'San Francisco, USA', tier: 'Gold', services: ['Implementation','Training'] },
    { name: 'Northwind Tech', city: 'Berlin, DE', tier: 'Silver', services: ['Customization','Support'] },
    { name: 'Delta Systems', city: 'Mumbai, IN', tier: 'Registered', services: ['Implementation','Accounting'] },
  ];
  return (
    <main>
      <PageHero
        title="Find a Partner"
        subtitle="Work with certified partners for implementation, training, and support."
        emphasize="none"
      />
      <section style={{ padding: '10px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {partners.map((p) => (
              <div key={p.name} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
                <h4 style={{ margin: '0 0 6px' }}>{p.name}</h4>
                <p style={{ margin: 0, color: '#4a5568' }}>{p.city}</p>
                <p style={{ margin: '6px 0 10px', color: '#4a5568' }}><strong>Tier:</strong> {p.tier}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
                  {p.services.map((s) => (
                    <span key={s} style={{ border: '1px solid #e2e8f0', borderRadius: 999, padding: '4px 8px', fontSize: 12 }}>{s}</span>
                  ))}
                </div>
                <button className="btn btn-outline-primary" type="button">Contact</button>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
            <Link to="/become-a-partner" className="btn btn-outline-primary">Become a Partner</Link>
            <Link to="/services-for-partners" className="btn btn-outline-primary">Partner Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
};
