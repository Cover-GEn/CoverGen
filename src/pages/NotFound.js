import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="app" style={{ textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist or has been moved.</p>
      <Link to="/" style={{ color: '#3b82f6', fontWeight: 'bold' }}>
        🔙 Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
