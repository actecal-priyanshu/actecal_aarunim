import React from 'react';

type AppItem = {
  name: string;
  emoji: string;
};

interface AppDirectoryProps {
  items?: AppItem[];
  title?: string;
  subtitle?: string;
}

const DEFAULT_APPS: AppItem[] = [
  { name: 'Accounting', emoji: '📒' },
  { name: 'Knowledge', emoji: '📘' },
  { name: 'Sign', emoji: '✍️' },
  { name: 'CRM', emoji: '🤝' },
  { name: 'Studio', emoji: '🧩' },
  { name: 'Subscriptions', emoji: '🔁' },
  { name: 'Rental', emoji: '🧷' },
  { name: 'Point of Sale', emoji: '🧾' },
  { name: 'Discuss', emoji: '💬' },
  { name: 'Documents', emoji: '🗂️' },
  { name: 'Project', emoji: '📌' },
  { name: 'Timesheets', emoji: '⏱️' },
  { name: 'Field Service', emoji: '🛠️' },
  { name: 'Planning', emoji: '🗓️' },
  { name: 'Helpdesk', emoji: '🆘' },
  { name: 'Website', emoji: '🌐' },
  { name: 'Social Marketing', emoji: '📣' },
  { name: 'Email Marketing', emoji: '✉️' },
  { name: 'Purchase', emoji: '🛒' },
  { name: 'Inventory', emoji: '📦' },
  { name: 'Manufacturing', emoji: '🏭' },
  { name: 'Sales', emoji: '📈' },
  { name: 'HR', emoji: '👥' },
  { name: 'Dashboard', emoji: '📊' }
];

export const AppDirectory: React.FC<AppDirectoryProps> = ({ items = DEFAULT_APPS, title = 'Choose your apps', subtitle = 'Start with one. Add more anytime.' }) => {
  return (
    <section style={{ background: '#f8fafc', padding: '28px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto 10px', textAlign: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '1.4rem', color: '#0f172a' }}>{title}</h3>
        <p style={{ margin: '6px 0 16px', color: '#64748b' }}>{subtitle}</p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: 24,
        maxWidth: 1100,
        margin: '0 auto'
      }}>
        {items.map((app, idx) => (
          <div key={idx} style={{ textAlign: 'center', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 14px 30px rgba(0,0,0,0.08)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
          >
            <div style={{
              width: 72,
              height: 72,
              margin: '0 auto 10px',
              borderRadius: 12,
              background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: 28 }}>{app.emoji}</span>
            </div>
            <div style={{ fontSize: 12, color: '#111827' }}>{app.name}</div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 1100, margin: '16px auto 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b' }}>
          <span style={{ display: 'inline-block', width: 36, height: 18, background: '#e5e7eb', borderRadius: 9999, position: 'relative' }}>
            <span style={{ position: 'absolute', top: 2, left: 2, width: 14, height: 14, background: 'white', borderRadius: '50%' }} />
          </span>
          <span style={{ fontSize: 13 }}>Imagine without bizsuite</span>
        </div>
        <a href="/apps" style={{ color: '#0f766e', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          View all Apps <span>→</span>
        </a>
      </div>
    </section>
  );
};

export default AppDirectory;


