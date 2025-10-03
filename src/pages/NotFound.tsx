import React from 'react';
import { Link } from 'react-router-dom';
import { GothicH1 } from '../components/GothicHeading';

export const NotFound: React.FC = () => {
  return (
    <main style={{ padding: '32px 24px', textAlign: 'center' }}>
      <GothicH1 text="404 - Page not found" style={{ fontSize: '2.5rem', marginBottom: '1rem' }} />
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to="/" style={{ color: '#6e56cf' }}>Go home</Link>
    </main>
  );
};


