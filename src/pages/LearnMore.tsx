import React from 'react';
import { PageHero } from '../components/PageHero';
import { HandBullets } from '../components/CreativeBits';

export const LearnMore: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Learn More About BizSuite"
        subtitle="Understand our platform's capabilities, architecture, and how it fits your business."
        imageUrl="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop"
      />
      <section style={{ padding: '0 24px 40px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 16px' }}>What you'll discover</h2>
          <HandBullets
            items={[
              'How modular apps reduce risk and speed up adoption',
              'Security model, data ownership, and compliance',
              'Integration patterns and API-first design',
              'Example rollouts for SMBs and mid-market',
              'Total cost of ownership vs. traditional suites'
            ]}
          />

          <h2 style={{ margin: '28px 0 12px' }}>Why teams choose BizSuite</h2>
          <HandBullets
            items={[
              'Start small, grow fast: add apps as needs evolve',
              'Unified UX: one login, one data model, one experience',
              'Lower TCO: fewer vendors, simpler integration, faster onboarding',
              'Enterprise‑grade security with role‑based access and audit trails'
            ]}
          />

          <h2 style={{ margin: '28px 0 12px' }}>Architecture at a glance</h2>
          <HandBullets
            items={[
              'API‑first: REST + webhooks for real‑time workflows',
              'Extensible schema: custom fields and views without code',
              'Automation engine: triggers, conditions, actions',
              'Integrations: email, payments, storage, messaging'
            ]}
          />

          <h2 style={{ margin: '28px 0 12px' }}>Modules overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { title: 'CRM', desc: 'Leads, pipeline, quotes' },
              { title: 'Finance', desc: 'Invoices, expenses, reporting' },
              { title: 'HR', desc: 'Directory, time off, reviews' },
              { title: 'Operations', desc: 'Projects, tasks, field service' },
              { title: 'Marketing', desc: 'Email, social, automation' },
              { title: 'Support', desc: 'Helpdesk, SLAs, knowledge base' }
            ].map(m => (
              <div key={m.title} style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 16, background: '#fff' }}>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>{m.title}</div>
                <div style={{ color: '#475569', fontSize: '.95rem' }}>{m.desc}</div>
              </div>
            ))}
          </div>

          <h2 style={{ margin: '28px 0 12px' }}>Security & compliance</h2>
          <HandBullets
            items={[
              'Encryption in transit and at rest',
              'Granular RBAC and SSO (OAuth/SAML)',
              'Audit logs and IP allowlisting',
              'Backups and regional data residency options'
            ]}
          />

          <h2 style={{ margin: '28px 0 12px' }}>Customer snapshots</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { name: 'Acme Retail', impact: 'Consolidated 7 tools → 1 platform; 22% faster order cycle' },
              { name: 'Northwind Labs', impact: 'Closed‑loop analytics; +18% sales productivity' },
              { name: 'Globex Services', impact: 'Cut onboarding from weeks to days; CSAT +14 pts' }
            ].map(c => (
              <div key={c.name} style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 16, background: '#fff' }}>
                <div style={{ fontWeight: 700 }}>{c.name}</div>
                <div style={{ color: '#475569', marginTop: 6 }}>{c.impact}</div>
              </div>
            ))}
          </div>

          <h2 style={{ margin: '28px 0 12px' }}>FAQs</h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              { q: 'How do migrations work?', a: 'Import from CSV or via API. Our team provides migration playbooks and optional services.' },
              { q: 'Can we host data in our region?', a: 'Yes. Regional data residency options are available on select plans.' },
              { q: 'What about custom workflows?', a: 'Use the automation builder or build extensions with the API & webhooks.' }
            ].map(f => (
              <div key={f.q} style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 16, background: '#fff' }}>
                <div style={{ fontWeight: 700 }}>{f.q}</div>
                <div style={{ color: '#475569', marginTop: 6 }}>{f.a}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
            <a href="/get-started" style={{ padding: '12px 20px', borderRadius: 10, background: '#4f46e5', color: '#fff', textDecoration: 'none', fontWeight: 700 }}>Get started now</a>
            <a href="/contact-sales" style={{ padding: '12px 20px', borderRadius: 10, border: '2px solid #4f46e5', color: '#4f46e5', textDecoration: 'none', fontWeight: 700 }}>Contact sales</a>
          </div>

          <h3 style={{ marginTop: 24 }}>Explore next</h3>
          <p style={{ color: '#475569' }}>
            Compare features on the <a href="/features" style={{ color: '#667eea', textDecoration: 'none' }}>Features</a> page or dive into the <a href="/api-reference" style={{ color: '#667eea', textDecoration: 'none' }}>API Reference</a>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default LearnMore;
