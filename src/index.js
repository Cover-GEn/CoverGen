import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import CoverLetter from './pages/CoverLetter';
import ResumeBuilder from './pages/ResumeBuilder';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './styles.css';

// Future: Theme & Auth context can go here
// import { ThemeProvider } from './context/ThemeContext';
// import { AuthProvider } from './context/AuthContext';

// 🔐 Error Boundary: Catches fatal rendering errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('❌ Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>🚨 Something went wrong.</h2>
          <p>Please refresh the page or contact support.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// 🌐 React Entry Point
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      {/* <ThemeProvider> */}
      {/* <AuthProvider> */}
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cover-letter" element={<CoverLetter />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/* </AuthProvider> */}
      {/* </ThemeProvider> */}
    </ErrorBoundary>
  </React.StrictMode>
);
