import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Apps.css';

const appCategories = {
  FINANCE: [
    'Accounting', 'Invoicing', 'Expenses', 'Documents', 'Spreadsheet (BI)', 'Sign'
  ],
  SALES: [
    'CRM', 'Sales', 'POS Shop', 'POS Restaurant', 'Subscriptions', 'Rental'
  ],
  WEBSITES: [
    'Website Builder', 'eCommerce', 'Blog', 'Forum', 'Live Chat', 'eLearning'
  ],
  'SUPPLY CHAIN': [
    'Inventory', 'Manufacturing', 'PLM', 'Purchase', 'Maintenance', 'Quality'
  ],
  'HUMAN RESOURCES': [
    'Employees', 'Recruitment', 'Time Off', 'Appraisals', 'Referrals', 'Fleet'
  ],
  MARKETING: [
    'Social Marketing', 'Email Marketing', 'SMS Marketing', 'Events', 'Marketing Automation', 'Surveys'
  ],
  SERVICES: [
    'Project', 'Timesheets', 'Field Service', 'Helpdesk', 'Planning', 'Appointments'
  ],
  PRODUCTIVITY: [
    'Discuss', 'Approvals', 'IoT', 'VoIP', 'Knowledge', 'WhatsApp'
  ]
};

export const Apps: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category') as keyof typeof appCategories | null;
  const [activeCategory, setActiveCategory] = useState<keyof typeof appCategories>(
    categoryFromUrl && categoryFromUrl in appCategories ? categoryFromUrl : 'FINANCE'
  );

  useEffect(() => {
    if (categoryFromUrl && categoryFromUrl in appCategories) {
      setActiveCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  return (
    <div className="apps-page">
      {/* Category Tabs */}
      <div className="category-tabs">
        <div className="category-tabs-container">
          {(Object.keys(appCategories) as Array<keyof typeof appCategories>).map((category) => (
            <button
              key={category}
              className={`category-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(category);
                setSearchParams({ category });
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Apps Grid */}
      <div className="apps-content">
        <div className="apps-grid-container">
          {appCategories[activeCategory].map((app, index) => (
            <Link 
              key={index} 
              to={`/apps/${app.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}?category=${activeCategory}`} 
              className="app-link"
            >
              {app}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      <div className="apps-footer-links">
        <a href="#" className="footer-link">
          <span className="footer-icon"><i className="fa-solid fa-plug" aria-hidden="true"></i></span> Third party apps
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Apps;
