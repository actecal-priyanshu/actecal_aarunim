import React from 'react';

export const FindAnAccountant: React.FC = () => {
  const accountants = [
    { name: 'LedgerPro Associates', city: 'London, UK', specialties: ['SMB Accounting','VAT','Payroll'] },
    { name: 'BrightBooks LLP', city: 'Toronto, CA', specialties: ['Tax','Audit','Reporting'] },
    { name: 'Harmony Finance', city: 'Sydney, AU', specialties: ['Bookkeeping','Automation','Advisory'] },
  ];
  return (
    <main>
      <section style={{ padding: '40px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h1 style={{ margin: 0 }}>Find an Accountant</h1>
          <p style={{ color: '#4a5568', marginTop: 10 }}>Work with BizSuite‑ready accountants for bookkeeping, tax, and advisory.</p>
        </div>
      </section>
      <section style={{ padding: '10px 24px 60px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {accountants.map((a) => (
              <div key={a.name} style={{ border: '1px solid #e2e8f0', borderRadius: 10, padding: 18 }}>
                <h4 style={{ margin: '0 0 6px' }}>{a.name}</h4>
                <p style={{ margin: 0, color: '#4a5568' }}>{a.city}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 10 }}>
                  {a.specialties.map((s) => (
                    <span key={s} style={{ border: '1px solid #e2e8f0', borderRadius: 999, padding: '4px 8px', fontSize: 12 }}>{s}</span>
                  ))}
                </div>
                <button className="btn btn-outline-primary" type="button" style={{ marginTop: 10 }}>Contact</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
