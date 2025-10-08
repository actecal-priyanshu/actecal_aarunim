import React from 'react';
import { useParams } from 'react-router-dom';
import { industryCategories } from '../data/industries';
import { PageHero } from '../components/PageHero';
import { appModules } from '../data/appModules';

export const Industry: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const industry = industryCategories
    .flatMap((category) => category.industries)
    .find((industry) => industry.slug === slug);

  if (!industry) {
    return (
      <div style={{ padding: '60px 24px', textAlign: 'center' }}>
        <h2>Industry not found</h2>
        <p>The industry you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <main>
      <PageHero
        title={industry.name}
        subtitle={industry.description}
        imageUrl={industry.imageUrl}
      />
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}>
            <div>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '24px', fontWeight: 700 }}>
                Key Features for {industry.name}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '24px' }}>
                {industry.keyFeatures.map((feature, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginTop: '4px' }}>
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <p style={{ margin: 0, color: '#4A5568', fontSize: '1.1rem', lineHeight: 1.6 }}>
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={industry.imageUrl}
                alt={industry.name}
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
              />
            </div>
          </div>

          {industry.testimonial && industry.testimonial.quote && (
            <div style={{
              marginTop: '80px',
              padding: '40px',
              backgroundColor: '#F9FAFB',
              borderRadius: '12px',
              borderLeft: '4px solid var(--color-primary)',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#4A5568', margin: 0 }}>
                "{industry.testimonial.quote}"
              </p>
              <p style={{ marginTop: '16px', fontWeight: 600, color: '#2D3748' }}>
                - {industry.testimonial.author}, {industry.testimonial.company}
              </p>
            </div>
          )}

          {industry.relatedApps && industry.relatedApps.length > 0 && (
            <div style={{ marginTop: '80px' }}>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '24px', fontWeight: 700, textAlign: 'center' }}>
                Related Apps for {industry.name}
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '24px',
              }}>
                {industry.relatedApps.map((appSlug) => {
                  const app = appModules.find((app) => app.slug === appSlug);
                  if (!app) return null;
                  return (
                    <a href={`/apps/${app.slug}`} key={app.slug} className="related-app-card" style={{
                      display: 'block',
                      padding: '24px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px' }}>{app.name}</h4>
                      <p style={{ color: '#4A5568', margin: 0 }}>{app.description}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          <div style={{
            textAlign: 'center',
            marginTop: '80px',
            padding: '40px',
            backgroundColor: '#F7FAFC',
            borderRadius: '12px',
          }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>
              Ready to Streamline Your {industry.name} Business?
            </h3>
            <p style={{ color: '#4A5568', marginBottom: '24px' }}>
              Discover how BizSuite can be tailored to fit your unique needs.
            </p>
            <a href="/contact-sales" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
              Get Started
            </a>
          </div>
        </div>
      </section>
      <style>{`
        .related-app-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </main>
  );
};
