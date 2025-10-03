import React from 'react';
import PageHero from '../components/PageHero';

const cardStyle: React.CSSProperties = {
  background: '#ffffff',
  borderRadius: 16,
  padding: 24,
  border: '1px solid rgba(0,0,0,0.08)',
  boxShadow: '0 16px 36px rgba(0,0,0,0.06)',
  transition: 'transform .2s ease, box-shadow .2s ease'
};

const Integrations: React.FC = () => {
  const suites = [
    {
      title: 'Productivity Suite',
      description: 'Connect Google Workspace, Microsoft 365, Slack, and Zoom to synchronize calendars, automate meetings, and keep conversations in one place.',
      badges: ['Calendars', 'Chat', 'Automation']
    },
    {
      title: 'Finance & Accounting',
      description: 'Sync sales, invoices, and expenses directly with QuickBooks, Xero, Zoho Books, Razorpay, and Stripe for real-time ledgers.',
      badges: ['Billing', 'Payments', 'Compliance']
    },
    {
      title: 'E-commerce & CRM',
      description: 'Bring Shopify, WooCommerce, HubSpot, Salesforce, and Mailchimp together so customer data is always up to date.',
      badges: ['Commerce', 'CRM', 'Marketing']
    },
    {
      title: 'Developer Tools',
      description: 'Ship faster with GitHub, GitLab, Jira, Linear, and Notion automation blocks tailored to your engineering workflows.',
      badges: ['DevOps', 'Planning', 'Docs']
    }
  ];

  const steps = [
    {
      title: 'Plug-and-play connectors',
      description: 'Prebuilt connectors with guided setup let teams launch integrations in minutes, not weeks.'
    },
    {
      title: 'Unified data model',
      description: 'Normalize data across apps automatically so reporting stays consistent and reliable.'
    },
    {
      title: 'Secure automation',
      description: 'Granular permissions, audit logs, and encryption keep every integration enterprise-ready.'
    }
  ];

  return (
    <main>
      <PageHero
        title="Seamless Integrations"
        subtitle="Bring every tool into a single operating system. BizSuite connects the apps your teams love with point-and-click simplicity."
        emphasize="none"
      />

      <section style={{ padding: '32px 24px', background: 'var(--surface)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
          {suites.map((suite) => (
            <article
              key={suite.title}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.06)';
              }}
            >
              <h3 style={{ margin: '0 0 12px', fontSize: '1.2rem' }}>{suite.title}</h3>
              <p style={{ margin: '0 0 16px', color: '#4a5568', lineHeight: 1.6 }}>{suite.description}</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {suite.badges.map((badge) => (
                  <span key={badge} style={{
                    background: 'rgba(255,107,0,0.12)',
                    color: 'var(--color-primary)',
                    padding: '6px 12px',
                    borderRadius: 999,
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}>
                    {badge}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ padding: '48px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {steps.map((step) => (
            <div key={step.title} style={{
              background: '#ffffff',
              borderRadius: 16,
              padding: 24,
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 10px 30px rgba(26,26,26,0.08)'
            }}>
              <h4 style={{ margin: '0 0 12px', fontSize: '1.05rem' }}>{step.title}</h4>
              <p style={{ margin: 0, color: '#4a5568', lineHeight: 1.6 }}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '48px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: 16 }}>Build your own integration</h3>
          <p style={{ color: '#4a5568', lineHeight: 1.7, marginBottom: 24 }}>
            Developers can use our REST and GraphQL APIs to orchestrate bespoke workflows. Webhooks, SDKs, and event streams help you push and pull data securely.
          </p>
          <a
            href="/api-reference"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              textDecoration: 'none',
              background: 'var(--color-primary)',
              color: '#fff',
              borderRadius: 9999,
              fontWeight: 700,
              boxShadow: '0 12px 28px rgba(255,107,0,0.25)'
            }}
          >
            View API reference →
          </a>
        </div>
      </section>
    </main>
  );
};

export default Integrations;
