import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

// Simple Error Boundary component to catch rendering errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h2>Oops! Something went wrong. Please refresh or try again later.</h2>;
    }
    return this.props.children; 
  }
}

// Entry point of CoverGEN React app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

/*
🚀 Future improvements you can add here:

1. Integrate React Router for multi-page navigation:
   - e.g., /about, /faq, /resume-builder, /cover-letter-builder
   
2. Add Analytics integrations:
   - Google Analytics (via React GA or gtag)
   - Vercel Analytics for traffic insights

3. Add global context providers if needed (Auth, Theme, etc.)

4. Set up performance monitoring and error reporting services
*/
