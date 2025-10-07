import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Home.css';

const apps = [
  { name: 'Accounting', icon: '💰', color: '#FF6B6B' },
  { name: 'Knowledge', icon: '📚', color: '#4ECDC4' },
  { name: 'Sign', icon: '✍️', color: '#45B7D1' },
  { name: 'CRM', icon: '👥', color: '#96CEB4' },
  { name: 'Studio', icon: '🎨', color: '#FFEAA7' },
  { name: 'Subscriptions', icon: '🔄', color: '#DFE6E9' },
  { name: 'Rental', icon: '🔑', color: '#74B9FF' },
  { name: 'Point of Sale', icon: '🏪', color: '#A29BFE' },
  { name: 'Discuss', icon: '💬', color: '#FD79A8' },
  { name: 'Documents', icon: '📄', color: '#FDCB6E' },
  { name: 'Project', icon: '📊', color: '#6C5CE7' },
  { name: 'Timesheets', icon: '⏱️', color: '#0984E3' },
  { name: 'Field Service', icon: '⚡', color: '#E17055' },
  { name: 'Planning', icon: '📅', color: '#00B894' },
  { name: 'Helpdesk', icon: '🎧', color: '#00CEC9' },
  { name: 'Website', icon: '🌐', color: '#0984E3' },
  { name: 'Social Marketing', icon: '❤️', color: '#FD79A8' },
  { name: 'Email Marketing', icon: '📧', color: '#6C5CE7' },
  { name: 'Purchase', icon: '🛒', color: '#00B894' },
  { name: 'Inventory', icon: '📦', color: '#E17055' },
  { name: 'Manufacturing', icon: '🏭', color: '#00CEC9' },
  { name: 'Sales', icon: '📈', color: '#FDCB6E' },
  { name: 'HR', icon: '👤', color: '#A29BFE' },
  { name: 'Dashboard', icon: '📊', color: '#74B9FF' }
];

const features = [
  {
    icon: '📊',
    title: 'Analytics',
    description: 'Get detailed insights and analytics for your business.'
  },
  {
    icon: '⚡',
    title: 'Performance',
    description: 'Lightning fast performance for all your business needs.'
  },
  {
    icon: '🔒',
    title: 'Security',
    description: 'Enterprise-grade security to protect your data.'
  },
  {
    icon: '🔄',
    title: 'Integration',
    description: 'Seamlessly integrate with your favorite tools.'
  }
];

const techPlatforms = [
  {
    name: 'Shop Floor',
    image: '🏭',
    description: 'Manage your shop floor operations'
  },
  {
    name: 'Expenses',
    image: '💳',
    description: 'Track and manage expenses'
  },
  {
    name: 'Point of Sale',
    image: '🛒',
    description: 'Complete POS solution'
  },
  {
    name: 'IoT',
    image: '📡',
    description: 'IoT device integration'
  },
  {
    name: 'Kiosk',
    image: '🖥️',
    description: 'Self-service kiosk'
  },
  {
    name: 'Barcode Scanner',
    image: '📱',
    description: 'Mobile scanning solution'
  }
];

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Business Solutions Made Simple</h1>
          <p className="hero-subtitle">Streamline your operations with our powerful suite of business tools designed for modern enterprises.</p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-large">Get Started</button>
            <button className="btn btn-outline btn-large">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="dashboard-preview">
            {/* Placeholder for dashboard image */}
            <div className="dashboard-placeholder">
              <div className="dashboard-header">
                <div className="dashboard-tabs">
                  <span className="tab active">Dashboard</span>
                  <span className="tab">Analytics</span>
                  <span className="tab">Reports</span>
                </div>
              </div>
              <div className="dashboard-content">
                <div className="metric-cards">
                  <div className="metric-card">
                    <div className="metric-value">1,240</div>
                    <div className="metric-label">Active Users</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-value">89%</div>
                    <div className="metric-label">Uptime</div>
                  </div>
                </div>
                <div className="chart-placeholder">
                  <div className="chart-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Grid Section */}
      <section className="apps-section">
        <div className="apps-container">
          <div className="apps-grid">
            {apps.map((app, index) => (
              <div key={index} className="app-card">
                <div className="app-icon-wrapper" style={{ backgroundColor: app.color }}>
                  <span className="app-icon">{app.icon}</span>
                </div>
                <h3 className="app-name">{app.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Info Section */}
      <section className="apps-info-section">
        <div className="apps-info-container">
          <h2 className="apps-info-title">Imagine a vast collection of business apps at your disposal.</h2>
          <p className="apps-info-subtitle">Got something to improve? There is an app for that.</p>
          <p className="apps-info-subtitle">No complexity, no cost, just a one-click install.</p>
          
          <div className="apps-info-description">
            <p>Each app simplifies a process and empowers more people.</p>
            <p>Imagine the impact when everyone gets the right tool for the job, with perfect integration.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to grow your business</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Platform Section */}
      <section className="tech-platform-section">
        <div className="tech-platform-container">
          <h2 className="tech-platform-title">
            <span className="highlight-text">All the tech</span> in one platform
          </h2>
          <div className="tech-grid">
            {techPlatforms.map((platform, index) => (
              <div key={index} className="tech-card">
                <div className="tech-image-wrapper">
                  <div className="tech-image-bg"></div>
                  <div className="tech-image">{platform.image}</div>
                </div>
                <h3 className="tech-name">{platform.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
