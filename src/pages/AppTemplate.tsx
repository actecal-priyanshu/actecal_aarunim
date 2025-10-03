import React from 'react';
import { Link } from 'react-router-dom';
import type { AppModuleMeta } from '../data/appModules';

interface AppTemplateProps {
  module: AppModuleMeta;
}

export const AppTemplate: React.FC<AppTemplateProps> = ({ module }) => {
  return (
    <main style={{ background: '#f3f4f6', minHeight: '100vh', padding: '72px 0 120px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px' }}>
        <nav style={{ marginBottom: 24 }}>
          <Link to="/apps" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 600 }}>
            ← Back to apps catalog
          </Link>
        </nav>

        <header style={{ background: '#fff', borderRadius: 28, padding: '48px 52px', display: 'grid', gap: 20, boxShadow: '0 24px 60px rgba(15, 23, 42, 0.1)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
            <div>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6366f1', fontSize: '0.75rem', fontWeight: 600 }}>{module.category}</span>
              <h1 style={{ margin: '12px 0 0', fontSize: 'clamp(2.4rem, 5vw, 3.2rem)', fontWeight: 800, color: '#1f2937' }}>{module.name}</h1>
            </div>
            <div>
              <a
                href={`mailto:aarunim.nn.pant@gmail.com?subject=${encodeURIComponent(`${module.name} demo request`)}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 24px',
                  borderRadius: 999,
                  background: '#6366f1',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 600,
                  boxShadow: '0 16px 32px rgba(99, 102, 241, 0.25)'
                }}
              >
                {module.ctaLabel ?? 'Book a demo'} ↗
              </a>
            </div>
          </div>
          <p style={{ margin: 0, color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.7 }}>{module.longDescription}</p>
          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {module.metrics.map((metric) => (
              <div key={metric.label} style={{ background: 'rgba(99, 102, 241, 0.08)', borderRadius: 18, padding: '18px 20px' }}>
                <p style={{ margin: 0, color: '#4338ca', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>{metric.label}</p>
                <p style={{ margin: '8px 0 0', fontSize: '1.4rem', fontWeight: 700, color: '#1f2937' }}>{metric.value}</p>
              </div>
            ))}
          </div>
        </header>

        <section style={{ marginTop: 48, display: 'grid', gap: 36 }}>
          <div style={{ background: '#fff', borderRadius: 24, padding: '36px 40px', boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)' }}>
            <h2 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 700, color: '#1f2937' }}>Why teams choose {module.name}</h2>
            <div style={{ display: 'grid', gap: 18, marginTop: 18 }}>
              {module.highlights.map((highlight) => (
                <div key={highlight} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.4rem' }}>✨</span>
                  <p style={{ margin: 0, color: '#4b5563', fontSize: '1rem', lineHeight: 1.7 }}>{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff', borderRadius: 24, padding: '36px 40px', boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)' }}>
            <h2 style={{ margin: '0 0 16px', fontSize: '1.5rem', fontWeight: 700, color: '#1f2937' }}>Works seamlessly with</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {module.integrations.map((tool) => (
                <span
                  key={tool}
                  style={{
                    padding: '10px 16px',
                    borderRadius: 12,
                    background: 'rgba(148, 163, 184, 0.18)',
                    color: '#334155',
                    fontWeight: 600,
                    letterSpacing: '0.02em'
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff', borderRadius: 24, padding: '36px 40px', boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)' }}>
            <h2 style={{ margin: '0 0 24px', fontSize: '1.5rem', fontWeight: 700, color: '#1f2937' }}>Implementation roadmap</h2>
            <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 16 }}>
              {[
                'Kickoff discovery to map workflows and integrations.',
                'Configure modules, import historical data, and QA automations.',
                'Train administrators and power users; launch with guided checklists.',
                'Review adoption metrics and optimize with quarterly business reviews.'
              ].map((step, index) => (
                <li key={index} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: '#6366f1',
                    color: '#fff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700
                  }}>
                    {index + 1}
                  </span>
                  <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.7 }}>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <footer style={{ marginTop: 56, textAlign: 'center' }}>
          <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem' }}>
            Looking for a custom workflow?{' '}
            <a href="mailto:aarunim.nn.pant@gmail.com?subject=Custom%20BizSuite%20apps" style={{ color: '#6366f1', textDecoration: 'none', fontWeight: 600 }}>
              Talk to our product architects
            </a>
            .
          </p>
        </footer>
      </div>
    </main>
  );
};
