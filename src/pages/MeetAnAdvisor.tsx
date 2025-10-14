import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';

export const MeetAnAdvisor: React.FC = () => {
  const advisors = [
    { name: 'Priya Sharma', focus: 'Manufacturing & Inventory', tz: 'GMT+5:30' },
    { name: 'Daniel Kim', focus: 'Finance & Reporting', tz: 'GMT-8' },
    { name: 'Ana García', focus: 'CRM & Sales', tz: 'GMT+1' },
    { name: 'Mariam Al-Farsi', focus: 'Procurement & Suppliers', tz: 'GMT+4' },
    { name: 'Lucas Moretti', focus: 'HR & Payroll', tz: 'GMT-3' },
  ];
  return (
    <main>
      <PageHero
        title="Meet an advisor"
        subtitle="Book time with a BizSuite expert to discuss solutions, scope projects, and get guidance."
        emphasize="none"
      />
      <section style={{ padding: '10px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: 12 }}>
            <Link to="/community" style={{ textDecoration: 'none', color: '#667eea' }} reloadDocument>← Back to Community</Link>
          </div>
          <h2 style={{ margin: '0 0 16px' }}>Advisors</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {advisors.map((a) => (
              <div key={a.name} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
                <h4 style={{ margin: '0 0 6px' }}>{a.name}</h4>
                <p style={{ margin: 0, color: '#4a5568' }}>{a.focus}</p>
                <p style={{ margin: '6px 0 10px', color: '#4a5568' }}><strong>Time zone:</strong> {a.tz}</p>
                <button className="btn btn-primary" type="button">Book a session</button>
              </div>
            ))}
          </div>
          <h2 style={{ margin: '24px 0 12px' }}>How it works</h2>
          <ol style={{ margin: 0, paddingLeft: 18, color: '#4a5568' }}>
            <li>Tell us about your use case and goals.</li>
            <li>We match you with an advisor for a 30–45 min call.</li>
            <li>Receive a summary with recommendations and next steps.</li>
          </ol>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
            <Link to="/find-a-partner" className="btn btn-outline-primary" reloadDocument>Find a Partner</Link>
            <Link to="/implementation-services" className="btn btn-outline-primary" reloadDocument>Implementation Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
};
