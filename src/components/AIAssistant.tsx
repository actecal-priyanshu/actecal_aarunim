import React, { useEffect, useMemo, useRef, useState } from 'react';
import { searchSite } from '../data/siteIndex';
import { Link } from 'react-router-dom';
import './AIAssistant.css';

export const AIAssistant: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof searchSite>>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Hotkey: Ctrl+K or / to open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || (e as any).isComposing) return;
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
      } else if (e.key === '/') {
        e.preventDefault();
        setOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    const t = setTimeout(() => {
      setResults(searchSite(q));
      setLoading(false);
    }, 150);
    return () => clearTimeout(t);
  }, [q, open]);

  return (
    <>
      <button className="ai-fab" aria-label="Open AI Assistant" onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 0); }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="11" cy="11" r="7"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
      {open && (
        <div className="ai-overlay" onClick={() => setOpen(false)}>
          <div className="ai-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="AI Assistant">
            <div className="ai-header">
              <div className="ai-search">
                <input
                  ref={inputRef}
                  type="search"
                  placeholder="Search the site... (Ctrl+K)"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  aria-label="Search the site"
                />
              </div>
              <button className="ai-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            </div>
            <div className="ai-results">
              {loading ? (
                <div className="ai-loading">Searching...</div>
              ) : (
                <ul>
                  {results.length === 0 && q && (
                    <li className="ai-empty">No results. Try different keywords.</li>
                  )}
                  {results.map((r, i) => (
                    <li key={i} className="ai-result">
                      <Link to={r.doc.path} reloadDocument>
                        <div className="ai-doc-title">{r.doc.title}</div>
                        <div className="ai-doc-meta">{r.doc.category}</div>
                        {r.doc.description && <div className="ai-doc-desc">{r.doc.description}</div>}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="ai-footer">
              <span>Tip: Press / anywhere to open search on the Community page, or Ctrl+K for assistant.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
