import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import '../styles/Community.css';

const communitySections = [
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

export const Community: React.FC = () => {
  return (
    <main>
      <PageHero 
        title="Join Our Community"
        subtitle="Connect with other BizSuite users, get help, and share your ideas. Explore our resources to learn, collaborate, and get the most out of our software."
        emphasize='none'
      />
      <div className="community-page">
        <div className="community-container">
          <div className="community-grid">
            {communitySections.map((section) => (
              <div key={section.title} className="community-section">
                <h4 className="community-section-title" style={{ color: section.color, borderBottom: `2px solid ${section.color}` }}>{section.title}</h4>
                <div className="community-links">
                  {section.links.map((link) => (
                    <Link key={link} to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="community-link">
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
