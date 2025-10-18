import React from 'react';
import { PageHero } from '../components/PageHero';
import { HandBullets } from '../components/CreativeBits';

export const GetStarted: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Get Started with Nexora"
        subtitle="Set up your workspace in minutes. Start small and expand as you grow."
        imageUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop"
      />
      <section style={{ padding: '0 24px 40px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ margin: '0 0 16px' }}>Quick start</h2>
          <HandBullets
            items={[
              'Create your account and invite your team',
              'Pick your first app (CRM, Accounting, HR, or Operations)',
              'Connect integrations (email, payments, cloud storage)',
              'Customize fields, views, and automations',
              'Go live and add modules as you scale'
            ]}
          />

          <h2 style={{ margin: '28px 0 12px' }}>Starter templates</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16
          }}>
            {[{
              title: 'Sales CRM',
              desc: 'Leads, opportunities, pipeline, deals'
            }, {
              title: 'Finance Suite',
              desc: 'Invoices, expenses, reconciliation'
            }, {
              title: 'HR Core',
              desc: 'Employees, time off, reviews'
            }, {
              title: 'Operations',
              desc: 'Projects, tasks, field service'
            }].map((t) => (
              <div key={t.title} style={{
                border: '1px solid #e2e8f0', borderRadius: 12, padding: 16,
                background: '#fff'
              }}>
                <div style={{ fontWeight: 700, marginBottom: 6 }}>{t.title}</div>
                <div style={{ color: '#475569', fontSize: '.95rem' }}>{t.desc}</div>
              </div>
            ))}
          </div>

          <h2 style={{ margin: '28px 0 12px' }}>Onboarding timeline (typical)</h2>
          <HandBullets
            items={[
              'Day 1: Invite team, import data, connect email/calendar',
              'Days 2–3: Configure roles, views, and automations',
              'Week 1: Pilot with one team, gather feedback',
              'Weeks 2–4: Roll out second app, refine dashboards'
            ]}
          />

          <h2 style={{ margin: '28px 0 12px' }}>FAQs</h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {[{
              q: 'How long does setup take?',
              a: 'Most teams complete initial setup in under a day using a starter template.'
            }, {
              q: 'Can we migrate later to more modules?',
              a: 'Yes. Start with one app and add more anytime—no migrations needed between BizSuite apps.'
            }, {
              q: 'Is there a free trial?',
              a: 'Yes. You can explore core features and invite teammates during the trial.'
            }].map((f) => (
              <div key={f.q} style={{ border: '1px solid #e2e8f0', borderRadius: 12, padding: 16, background: '#fff' }}>
                <div style={{ fontWeight: 700 }}>{f.q}</div>
                <div style={{ color: '#475569', marginTop: 6 }}>{f.a}</div>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: 24 }}>Need help?</h3>
          <p style={{ color: '#475569' }}>
            Visit our <a href="/help-center" style={{ color: '#667eea', textDecoration: 'none' }}>Help Center</a> or
            read the <a href="/docs" style={{ color: '#667eea', textDecoration: 'none' }}>Documentation</a> for deeper guides.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
            <a href="/signup" style={{
              padding: '12px 20px', borderRadius: 10, background: '#4f46e5', color: '#fff', textDecoration: 'none', fontWeight: 700
            }}>Create free account</a>
            <a href="/contact-sales" style={{
              padding: '12px 20px', borderRadius: 10, border: '2px solid #4f46e5', color: '#4f46e5', textDecoration: 'none', fontWeight: 700
            }}>Talk to sales</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetStarted;
