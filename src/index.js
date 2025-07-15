import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

// ✅ Entry point of CoverGEN: AI Resume & Cover Letter Generator

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 🚀 Future Improvements:
// - Add error boundaries
// - Integrate analytics (e.g. Google Analytics, Vercel Insights)
// - Add React Router for multi-page features (e.g. Resume Builder, FAQ, About)
