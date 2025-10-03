import React from 'react';
import PageHero from '../components/PageHero';

const sectionStyle: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: 16,
  padding: 24,
  border: '1px solid rgba(0,0,0,0.08)',
  boxShadow: '0 16px 36px rgba(26,26,26,0.08)'
};

const Security: React.FC = () => {
  const pillars = [
    {
      title: 'Data protection',
      points: [
        'AES-256 encryption at rest with managed keys',
        'TLS 1.3 enforced for all traffic',
        'Field-level encryption for sensitive records'
      ]
    },
    {
      title: 'Identity & access',
      points: [
        'Single Sign-On with SAML 2.0 and OAuth',
        'Granular role-based access controls',
        'Adaptive MFA across web and mobile'
      ]
    },
    {
      title: 'Compliance & trust',
      points: [
        'ISO 27001 and SOC 2 Type II certified data centers',
        'GDPR, HIPAA, and PCI readiness programs',
        'Independent third-party penetration testing twice yearly'
      ]
    }
  ];

  return (
    <main>
      <PageHero
        title="Enterprise-grade Security"
        subtitle="BizSuite safeguards your business with layered security controls, continuous monitoring, and auditable compliance." 
        emphasize="none"
      />

      <section style={{ padding: '32px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {pillars.map((pillar) => (
            <div key={pillar.title} style={sectionStyle}>
              <h3 style={{ margin: '0 0 16px', fontSize: '1.25rem' }}>{pillar.title}</h3>
              <ul style={{ margin: 0, paddingLeft: 20, color: '#4a5568', lineHeight: 1.6 }}>
                {pillar.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: 24, gridTemplateColumns: '1.2fr 1fr', alignItems: 'stretch' }}>
          <div style={sectionStyle}>
            <h3 style={{ margin: '0 0 16px', fontSize: '1.3rem' }}>Security operations</h3>
            <ul style={{ margin: 0, paddingLeft: 20, color: '#4a5568', lineHeight: 1.6 }}>
              <li>24/7 monitoring with automated alerting and on-call response.</li>
              <li>SIEM ingestion across application, network, and infrastructure logs.</li>
              <li>Quarterly tabletop exercises and incident response rehearsals.</li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={{ margin: '0 0 16px', fontSize: '1.3rem' }}>Customer controls</h3>
            <ul style={{ margin: 0, paddingLeft: 20, color: '#4a5568', lineHeight: 1.6 }}>
              <li>Custom data residency with regional hosting options.</li>
              <li>Audit logs streamed to your SIEM of choice.</li>
              <li>Bring-your-own-key options for highly regulated workloads.</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ padding: '48px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: 16 }}>Security resources</h3>
          <p style={{ color: '#4a5568', lineHeight: 1.7, marginBottom: 24 }}>
            Need our latest security whitepaper, signed agreements, or penetration-test summary? Our trust team can help.
          </p>
          <a
            href="mailto:security@bizsuite.app"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 28px',
              borderRadius: 9999,
              textDecoration: 'none',
              background: 'var(--color-primary)',
              color: '#fff',
              fontWeight: 700,
              boxShadow: '0 12px 28px rgba(255,107,0,0.25)'
            }}
          >
            Contact our security team →
          </a>
        </div>
      </section>
    </main>
  );
};

export default Security;
