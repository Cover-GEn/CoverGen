import React, { useState } from 'react';

const CoverLetter = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [result, setResult] = useState('');

  const generateContent = () => {
    const content = `
Dear Hiring Manager,

I am writing to express my interest in the ${jobTitle} position. With a background in ${experience}, and proficiency in ${skills}, I am confident in my ability to contribute effectively to your team.

Thank you for considering my application.

Sincerely,  
[Your Name]
    `;
    setResult(content.trim());
  };

  return (
    <div className="app">
      <h1>📄 Cover Letter Generator</h1>
      <p>Craft a compelling, tailored cover letter in seconds using AI.</p>

      <div className="form-section">
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Experience Summary"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <input
          type="text"
          placeholder="Skills (comma-separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <button onClick={generateContent}>✨ Generate Cover Letter</button>
      </div>

      {result && (
        <div className="output-section">
          <h3>Your Generated Cover Letter:</h3>
          <textarea readOnly value={result} rows={12} />
          <button onClick={() => navigator.clipboard.writeText(result)}>
            📋 Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
};

export default CoverLetter;
