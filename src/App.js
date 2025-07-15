import React, { useState } from 'react';
import './styles.css';

function App() {
  const [jobTitle, setJobTitle] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [result, setResult] = useState('');

  const generateContent = () => {
    const content = `
Dear Hiring Manager,

I am writing to express my strong interest in the position of ${jobTitle}. With a background in ${experience}, I bring a proven ability to apply ${skills} in professional environments. My passion for innovation and my dedication to excellence make me a strong match for your team.

I am confident that my experience and skill set will allow me to contribute meaningfully to your goals. I welcome the opportunity to further discuss how I can support your team.

Thank you for your consideration.

Sincerely,  
[Your Name]
    `;
    setResult(content.trim());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert('Cover letter copied to clipboard!');
  };

  return (
    <div className="app">
      <header>
        <h1>📄 CoverGEN</h1>
        <p>AI-Powered Resume & Cover Letter Generator</p>
      </header>

      <section className="form-section">
        <label>
          Job Title:
          <input
            type="text"
            placeholder="e.g. Software Engineer"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </label>

        <label>
          Experience Summary:
          <input
            type="text"
            placeholder="e.g. 2 years in full-stack web development"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </label>

        <label>
          Key Skills (comma-separated):
          <input
            type="text"
            placeholder="e.g. JavaScript, teamwork, leadership"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </label>

        <button className="generate-btn" onClick={generateContent}>
          ✨ Generate Cover Letter
        </button>
      </section>

      {result && (
        <section className="output-section">
          <h3>Your Cover Letter:</h3>
          <textarea readOnly value={result} rows={12} />
          <button className="copy-btn" onClick={copyToClipboard}>
            📋 Copy to Clipboard
          </button>
        </section>
      )}
    </div>
  );
}

export default App;
