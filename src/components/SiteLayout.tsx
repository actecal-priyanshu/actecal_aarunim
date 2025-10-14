import React from 'react';
import Navbar from './Navbar';
import { AIAssistant } from './AIAssistant';

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
      <AIAssistant />
    </div>
  );
};

export default SiteLayout;


