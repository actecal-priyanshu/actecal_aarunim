import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import '../styles/Community.css';

type CommunitySection = {
  title: string;
  links: string[];
  color: string;
};

const communitySections: CommunitySection[] = [
  {
    title: 'Learn',
    links: ['Tutorials', 'Documentation', 'Certifications', 'Training', 'Blog', 'Podcast'],
    color: '#E97326',
  },
  {
    title: 'Empower Education',
    links: ['Education Program', 'Scale Up! Business Game', 'Visit Odoo'],
    color: '#E97326',
  },
  {
    title: 'Get the Software',
    links: ['Download', 'Compare Editions', 'Releases'],
    color: '#00A09D',
  },
  {
    title: 'Collaborate',
    links: ['Github', 'Forum', 'Events', 'Translations', 'Become a Partner', 'Services for Partners', 'Register your Accounting Firm'],
    color: '#6B5B95',
  },
  {
    title: 'Get Services',
    links: ['Find a Partner', 'Find an Accountant', 'Meet an advisor', 'Implementation Services', 'Customer References', 'Support', 'Upgrades'],
    color: '#007A87',
  },
];

// Map known labels to real routes to avoid 404s. Fallback to slugified label.
const pathOverrides: Record<string, string> = {
  'Tutorials': '/tutorials',
  'Certifications': '/certifications',
  'Training': '/training',
  'Find a Partner': '/partners',
  'Find an Accountant': '/find-an-accountant',
  'Meet an advisor': '/meet-an-advisor',
  'Implementation Services': '/implementation-services',
  'Customer References': '/customer-references',
  'Support': '/support',
  'Upgrades': '/upgrades',
};

const featuredEvents = [
  {
    title: 'BizSuite Annual Conference 2025',
    date: 'March 15-17, 2025',
    location: 'San Francisco, CA',
    description: 'Join us for three days of workshops, networking, and keynote speeches from industry leaders.',
    link: '/events/annual-conference',
  },
  {
    title: 'Community Meetup - New York',
    date: 'November 20, 2024',
    location: 'New York, NY',
    description: 'A casual meetup to connect with local BizSuite users and share best practices.',
    link: '/events/ny-meetup',
  },
];

const testimonials = [
  {
    quote: 'Joining the BizSuite community has transformed the way I run my business. The support and resources are invaluable.',
    author: 'Jane Doe',
    company: 'SmallBiz Solutions',
  },
  {
    quote: 'The forums and events have helped me solve complex issues and learn from others’ experiences.',
    author: 'John Smith',
    company: 'TechStart Inc.',
  },
];

const getSectionIcon = (title: string) => {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 } as const;
  switch (title.toLowerCase()) {
    case 'learn':
      return (
        <svg {...common} aria-hidden="true"><path d="M4 19.5V6.8a1 1 0 0 1 .6-.9l6.7-3a1 1 0 0 1 .8 0l6.7 3a1 1 0 0 1 .6.9V19.5"/><path d="M12 22V7"/></svg>
      );
    case 'get the software':
      return (
        <svg {...common} aria-hidden="true"><path d="M12 3v12"/><path d="M8 11l4 4 4-4"/><path d="M20 21H4"/></svg>
      );
    case 'collaborate':
      return (
        <svg {...common} aria-hidden="true"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M10 21a7 7 0 0 1 12 0"/></svg>
      );
    case 'get services':
      return (
        <svg {...common} aria-hidden="true"><path d="M12 1v6"/><path d="M5.22 6.22l4.24 4.24"/><path d="M1 12h6"/><path d="M6.22 18.78l4.24-4.24"/><path d="M12 23v-6"/><path d="M18.78 17.78l-4.24-4.24"/><path d="M23 12h-6"/><path d="M17.78 6.22l-4.24 4.24"/></svg>
      );
    case 'empower education':
    default:
      return (
        <svg {...common} aria-hidden="true"><path d="M22 12l-10 7L2 12l10-7 10 7z"/><path d="M6 15v3a10 10 0 0 0 12 0v-3"/></svg>
      );
  }
};

export const Community: React.FC = () => {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    () => Object.fromEntries(communitySections.map(s => [s.title, true])) as Record<string, boolean>
  );
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return communitySections;
    return communitySections
      .map((sec) => ({ ...sec, links: sec.links.filter((l) => l.toLowerCase().includes(q)) }))
      .filter((sec) => sec.links.length > 0);
  }, [query]);

  const highlight = (text: string) => {
    const q = query.trim();
    if (!q) return text;
    const esc = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${esc})`, 'ig'));
    return parts.map((p, i) => (p.toLowerCase() === q.toLowerCase() ? <mark key={i}>{p}</mark> : <span key={i}>{p}</span>));
  };

  // Focus search with '/'
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // ignore if focused on input/textarea/select
      const tag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select' || (e as any).isComposing) return;
      if (e.key === '/') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Persist expand/collapse state
  useEffect(() => {
    try {
      const raw = localStorage.getItem('community_expanded_v1');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          setExpanded((prev) => ({ ...prev, ...parsed }));
        }
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('community_expanded_v1', JSON.stringify(expanded));
    } catch {}
  }, [expanded]);

  const resultsCount = useMemo(
    () => filteredSections.reduce((sum, s) => sum + s.links.length, 0),
    [filteredSections]
  );
  return (
    <main>
      <PageHero 
        title="Join Our Community"
        subtitle="Connect with other BizSuite users, get help, and share your ideas. Explore our resources to learn, collaborate, and get the most out of our software."
        emphasize='none'
      />
      <section className="community-page-section">
        <div className="community-container">
          <h2 className="section-title center">Explore Our Community Resources</h2>
          <div className="community-search">
            <input
              type="search"
              placeholder="Search tutorials, docs, events..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search community resources"
              ref={searchRef}
            />
            {query && (
              <button type="button" className="clear-btn" onClick={() => setQuery('')} aria-label="Clear search">Clear</button>
            )}
          </div>
          <div className="community-controls">
            <div className="results-meta" aria-live="polite">
              {resultsCount} result{resultsCount === 1 ? '' : 's'} in {filteredSections.length} section{filteredSections.length === 1 ? '' : 's'}
            </div>
            <div className="spacer" />
          </div>
          <div className="community-grid">
            {filteredSections.map((section: CommunitySection) => (
              <div
                key={section.title}
                className="community-section"
                style={{ '--accent-color': section.color } as React.CSSProperties}
              >
                <button
                  className="community-section-title collapsible-toggle"
                  aria-expanded={!!expanded[section.title]}
                  onClick={() => setExpanded((prev) => ({ ...prev, [section.title]: !prev[section.title] }))}
                  aria-controls={section.title.toLowerCase().replace(/\s+/g, '-') + '-links'}
                >
                  <span className="section-icon">{getSectionIcon(section.title)}</span>
                  <span className="title-text">{section.title}</span>
                  <span className="count-badge" aria-label={`${section.links.length} links`}>{section.links.length}</span>
                  <span className={`chevron ${expanded[section.title] ? 'open' : ''}`}></span>
                </button>
                {expanded[section.title] && (
                  <div className="community-links" id={section.title.toLowerCase().replace(/\s+/g, '-') + '-links'}>
                    {section.links.map((link: string) => (
                      <Link
                        key={link}
                        to={pathOverrides[link] ?? `/${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="community-link"
                      >
                        {highlight(link)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {query && filteredSections.length === 0 && (
            <p className="no-results">No results for “{query}”. Try another term.</p>
          )}
        </div>
      </section>
      
      <section className="events-section">
        <div className="community-container">
          <h2 className="section-title center">Upcoming Community Events</h2>
          <div className="events-grid">
            {featuredEvents.map((event) => (
              <div key={event.title} className="event-card">
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p>{event.description}</p>
                <Link to={event.link} className="btn btn-outline-primary">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="testimonial-section">
        <div className="community-container">
          <h2 className="section-title center">What Our Community Says</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-author">- {testimonial.author}, {testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="social-strip">
        <div className="community-container">
          <ul className="social-list">
            <li><a href="#" aria-label="GitHub">GH</a></li>
            <li><a href="#" aria-label="YouTube">YT</a></li>
            <li><a href="#" aria-label="X Twitter">X</a></li>
            <li><a href="#" aria-label="LinkedIn">IN</a></li>
            <li><a href="#" aria-label="Instagram">IG</a></li>
            <li><a href="#" aria-label="Facebook">FB</a></li>
            <li><a href="#" aria-label="Spotify">SP</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
};
