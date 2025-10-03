import React from 'react';
import { PageHero } from '../components/PageHero';
import { HandBullets } from '../components/CreativeBits';

export const Solutions: React.FC = () => {
  return (
    <main>
      <PageHero
        title="Solutions for Every Business Need"
        subtitle="BizSuite keeps your company connected—from sales and finance to HR and operations."
        imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
      />
      <section style={{ padding: '0 24px 40px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 12,
            marginBottom: 20
          }}>
            {[
              'https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop'
            ].map((src, i) => (
              <img key={i} src={src} alt="" style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 12 }} />
            ))}
          </div>
          <h2>1. Sales & Customer Success</h2>
          <p style={{ color: '#475569' }}><strong>Challenge:</strong> Sales teams juggle CRMs and spreadsheets; data is scattered.</p>
          <p style={{ color: '#475569' }}><strong>Our Solution:</strong> BizSuite CRM unifies pipeline and interactions.</p>
          <HandBullets items={['Track every lead and deal in real time','Automate follow‑ups and reminders','Share insights across teams']} />
          <p style={{ color: '#475569' }}><strong>Result:</strong> Shorter cycles, higher win rates, happier customers.</p>

          <h2 style={{ marginTop: 24 }}>2. Finance & Accounting</h2>
          <p style={{ color: '#475569' }}><strong>Challenge:</strong> Disjointed tools and manual spreadsheets create errors.</p>
          <p style={{ color: '#475569' }}><strong>Our Solution:</strong> BizSuite Finance automates money management with a 360° view.</p>
          <HandBullets items={['Instant invoices with recurring billing','Seamless expense tracking and approvals','Real‑time cash flow and reports']} />
          <p style={{ color: '#475569' }}><strong>Result:</strong> Fewer errors, better forecasting, faster decisions.</p>

          <h2 style={{ marginTop: 24 }}>3. Human Resources & People Ops</h2>
          <p style={{ color: '#475569' }}><strong>Challenge:</strong> Scattered records and clunky payroll; low visibility.</p>
          <p style={{ color: '#475569' }}><strong>Our Solution:</strong> BizSuite HR puts people at the center.</p>
          <HandBullets items={['Centralized records and digital onboarding','Leave and attendance management','Performance reviews and payroll integrations']} />
          <p style={{ color: '#475569' }}><strong>Result:</strong> Engaged employees and efficient processes.</p>

          <h2 style={{ marginTop: 24 }}>4. Operations & Workflow Management</h2>
          <p style={{ color: '#475569' }}><strong>Challenge:</strong> Projects lost in emails; tools fragmented; unclear ownership.</p>
          <p style={{ color: '#475569' }}><strong>Our Solution:</strong> BizSuite Operations keeps teams aligned.</p>
          <HandBullets items={['Assign, track, and manage projects in real time','Automate repetitive workflows','Company‑wide visibility into progress and ownership']} />
          <p style={{ color: '#475569' }}><strong>Result:</strong> Faster execution, less chaos, crystal‑clear accountability.</p>

          <h2 style={{ marginTop: 24 }}>5. Leadership & Strategy</h2>
          <p style={{ color: '#475569' }}><strong>Challenge:</strong> No single source of truth across tools.</p>
          <p style={{ color: '#475569' }}><strong>Our Solution:</strong> BizSuite is the operating system for your company.</p>
          <HandBullets items={['Unified dashboards across teams','AI‑powered insights for better decisions','Customizable reports for boardrooms and investors']} />
          <p style={{ color: '#475569' }}><strong>Result:</strong> Clarity, confidence, and speed.</p>

          <h2 style={{ marginTop: 24 }}>Solutions by Business Size</h2>
          <h3>For Startups</h3>
          <p style={{ color: '#475569' }}>Move fast without chaos—start with one module and add more as you grow.</p>
          <h3>For Small & Mid‑Sized Businesses</h3>
          <p style={{ color: '#475569' }}>Enterprise power without enterprise complexity. Modular apps and simple integrations.</p>
          <h3>For Enterprises</h3>
          <p style={{ color: '#475569' }}>Unify global teams, automate large‑scale workflows, and integrate with existing systems.</p>

          <h2 style={{ marginTop: 24 }}>Solutions by Industry</h2>
          <h3>Tech & SaaS</h3>
          <p style={{ color: '#475569' }}>Track customers, manage subscriptions, streamline product ops.</p>
          <h3>Professional Services</h3>
          <p style={{ color: '#475569' }}>Simplify invoicing, project management, and client relationships.</p>
          <h3>Retail & E‑commerce</h3>
          <p style={{ color: '#475569' }}>Unify sales, finance, and HR for smoother operations.</p>
          <h3>Manufacturing & Logistics</h3>
          <p style={{ color: '#475569' }}>Coordinate supply chain, workforce, and financials in one place.</p>

          <h2 style={{ marginTop: 24 }}>Why BizSuite Solutions Work</h2>
          <HandBullets items={['Modular by design – start with what you need, expand as you grow','Open and connected – integrates with your existing tools','Delightfully usable – intuitive design for faster adoption','Built for humans – a system your team will love']} />

          <h2 style={{ marginTop: 24 }}>The BizSuite Advantage</h2>
          <p style={{ color: '#475569' }}>Most software is a patchwork of apps. BizSuite is a coherent system—modular, open, and user‑friendly—so you can run your entire business without tool overload.</p>
          <p style={{ marginTop: 12 }}>👉 Whether you’re closing a deal, running payroll, or managing a project, BizSuite keeps your company connected.</p>

          <h2 style={{ marginTop: 24 }}>Closing CTA</h2>
          <p style={{ color: '#0f172a' }}>Simplify your business. Empower your people. Future‑proof your growth.</p>
          <p>👉 <a href="/contact" style={{ color: '#667eea', textDecoration: 'none' }}>Discover BizSuite solutions today</a>.</p>
        </div>
      </section>
    </main>
  );
};


