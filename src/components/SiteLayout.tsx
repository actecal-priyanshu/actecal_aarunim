import React from 'react';
import Navbar from './Navbar';

interface SiteLayoutProps {
  children: React.ReactNode;
}

// Shared site layout with clean sticky navbar and cream background
export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <div style={{ background: 'var(--surface)', minHeight: '100vh' }}>
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  );
};

export default SiteLayout;


