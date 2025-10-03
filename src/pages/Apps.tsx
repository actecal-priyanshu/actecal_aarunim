import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { appCategories, appModules } from '../data/appModules';

interface AppModuleCard {
  slug: string;
  name: string;
  category: string;
  description: string;
  href: string;
  badge?: string;
  icon?: string;
}

const brandPalette = [
  '#7757FF',
  '#FF9F1C',
  '#0FA3B1',
  '#F86624',
  '#2D7FF9',
  '#FF4D6D',
  '#6A994E',
  '#3D3B8E'
];

const assignIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('crm')) return '🤝';
  if (lower.includes('account')) return '📊';
  if (lower.includes('inventory')) return '📦';
  if (lower.includes('website') || lower.includes('ecommerce')) return '🌐';
  if (lower.includes('marketing') || lower.includes('sms')) return '📣';
  if (lower.includes('project')) return '📁';
  if (lower.includes('hr') || lower.includes('recruit')) return '🧑‍💼';
  if (lower.includes('knowledge') || lower.includes('documents')) return '📚';
  return '🧩';
};

export const Apps: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All apps');

  const modules: AppModuleCard[] = useMemo(() => {
    return appModules.map((module, index) => ({
      slug: module.slug,
      name: module.name,
      category: module.category,
      description: module.description,
      href: `/apps/${module.slug}`,
      badge: index % 4 === 0 ? 'Popular' : undefined,
      icon: assignIcon(module.name)
    }));
  }, []);

  const categories = useMemo(() => ['All apps', ...appCategories.map((c) => c.title)], []);

  const filteredModules = modules.filter((module) => {
    const matchesCategory = categoryFilter === 'All apps' || module.category === categoryFilter;
    const matchesSearch = module.name.toLowerCase().includes(searchTerm.toLowerCase()) || module.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main style={{ background: '#f5f3ff', minHeight: '100vh', padding: '72px 0 96px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <section style={{ marginBottom: 48, display: 'grid', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <span style={{ textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.12em', color: '#6366f1', fontSize: '0.75rem' }}>Apps catalog</span>
            <h1 style={{ margin: 0, fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, color: '#1f2937' }}>Everything you need to run your business</h1>
            <p style={{ margin: 0, maxWidth: 640, color: '#4b5563', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Explore configurable applications inspired by the Odoo suite. Mix and match modules across departments—each one integrates out of the box.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              alignItems: 'center'
            }}
          >
            <div style={{ position: 'relative', flex: '1 1 320px', maxWidth: 420 }}>
              <input
                type="search"
                placeholder="Search by module or capability"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 16px 14px 44px',
                  borderRadius: 14,
                  border: '1px solid rgba(99, 102, 241, 0.35)',
                  background: '#fff',
                  fontSize: '1rem',
                  color: '#111827',
                  outline: 'none',
                  boxShadow: '0 12px 30px rgba(99, 102, 241, 0.08)'
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '1.1rem',
                  color: '#6366f1'
                }}
              >
                🔍
              </span>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {categories.map((category) => {
                const isActive = categoryFilter === category;
                return (
                  <button
                    key={category}
                    onClick={() => setCategoryFilter(category)}
                    style={{
                      borderRadius: 999,
                      padding: '10px 18px',
                      border: isActive ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid rgba(148, 163, 184, 0.4)',
                      background: isActive ? 'rgba(99, 102, 241, 0.12)' : '#fff',
                      color: isActive ? '#4338ca' : '#475569',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '260px minmax(0, 1fr)', gap: 32 }}>
          <aside
            style={{
              display: 'grid',
              gap: 18,
              alignSelf: 'flex-start'
            }}
          >
            <div style={{ background: '#fff', borderRadius: 20, border: '1px solid rgba(148, 163, 184, 0.28)', padding: 24, display: 'grid', gap: 12 }}>
              <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#1f2937' }}>Browse by category</h2>
              <div style={{ display: 'grid', gap: 8 }}>
                {appCategories.map((category, index) => {
                  const color = brandPalette[index % brandPalette.length];
                  const isActive = categoryFilter === category.title;
                  return (
                    <button
                      key={category.title}
                      onClick={() => setCategoryFilter(category.title)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: 'none',
                        background: isActive ? 'rgba(99, 102, 241, 0.12)' : 'transparent',
                        borderRadius: 12,
                        padding: '10px 12px',
                        cursor: 'pointer',
                        color: isActive ? '#4338ca' : '#475569',
                        fontWeight: 600
                      }}
                    >
                      <span>{category.title}</span>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 24,
                          height: 24,
                          borderRadius: '50%',
                          background: color,
                          color: '#fff',
                          fontSize: '0.75rem',
                          fontWeight: 700
                        }}
                      >
                        {category.modules.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ background: '#fff', borderRadius: 20, border: '1px solid rgba(148, 163, 184, 0.28)', padding: 24, display: 'grid', gap: 16 }}>
              <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#1f2937' }}>Need help choosing?</h3>
              <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Talk with a BizSuite expert to design a stack tailored to your workflows.
              </p>
              <a
                href="mailto:aarunim.nn.pant@gmail.com?subject=Apps%20catalog%20consultation"
                style={{
                  textDecoration: 'none',
                  padding: '11px 18px',
                  borderRadius: 14,
                  background: '#6366f1',
                  color: '#fff',
                  fontWeight: 600,
                  textAlign: 'center'
                }}
              >
                Contact advisor
              </a>
            </div>
          </aside>

          <div style={{ display: 'grid', gap: 24 }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 12 }}>
              <span style={{ fontSize: '0.95rem', color: '#475569' }}>{filteredModules.length} modules</span>
              <div style={{ display: 'flex', gap: 12 }}>
                <select
                  aria-label="Sort apps"
                  defaultValue="popular"
                  style={{
                    borderRadius: 12,
                    border: '1px solid rgba(148, 163, 184, 0.4)',
                    padding: '10px 14px',
                    background: '#fff',
                    color: '#1f2937',
                    fontWeight: 500
                  }}
                  onChange={() => {
                    // Placeholder for future sort logic
                  }}
                >
                  <option value="popular">Most popular</option>
                  <option value="new">Recently updated</option>
                  <option value="name">Alphabetical</option>
                </select>
              </div>
            </header>

            <div
              style={{
                display: 'grid',
                gap: 18,
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))'
              }}
            >
              {filteredModules.map((module) => (
                <Link
                  to={module.href}
                  key={`${module.category}-${module.name}`}
                  style={{
                    display: 'grid',
                    gap: 12,
                    padding: '22px 24px',
                    borderRadius: 20,
                    border: '1px solid rgba(148, 163, 184, 0.25)',
                    background: '#fff',
                    textDecoration: 'none',
                    color: '#1f2937',
                    boxShadow: '0 16px 32px rgba(15, 23, 42, 0.08)',
                    transition: 'transform 0.18s ease, box-shadow 0.18s ease'
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.transform = 'translateY(-4px)';
                    event.currentTarget.style.boxShadow = '0 22px 40px rgba(15, 23, 42, 0.12)';
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.transform = 'translateY(0)';
                    event.currentTarget.style.boxShadow = '0 16px 32px rgba(15, 23, 42, 0.08)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '1.6rem' }}>{module.icon}</span>
                    {module.badge && (
                      <span
                        style={{
                          borderRadius: 999,
                          padding: '4px 10px',
                          background: 'rgba(99, 102, 241, 0.12)',
                          color: '#4338ca',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          letterSpacing: '0.06em'
                        }}
                      >
                        {module.badge}
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'grid', gap: 6 }}>
                    <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700 }}>{module.name}</h3>
                    <p style={{ margin: 0, color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.6 }}>{module.description}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#6366f1', fontWeight: 600, fontSize: '0.95rem' }}>View details →</span>
                    <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{module.category}</span>
                  </div>
                </Link>
              ))}
              {filteredModules.length === 0 && (
                <div
                  style={{
                    gridColumn: '1 / -1',
                    borderRadius: 18,
                    border: '1px solid rgba(148, 163, 184, 0.3)',
                    background: '#fff',
                    padding: '36px 32px',
                    textAlign: 'center',
                    color: '#475569'
                  }}
                >
                  No apps match your filters. Try another search or category.
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};


