import React, { useState } from 'react';

function App() {
  const [jobTitle, setJobTitle] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [result, setResult] = useState('');

  const generateContent = () => {
    const content = `
Dear Hiring Manager,

I am writing to express my interest in the ${jobTitle} position. With a background in ${experience}, I have developed strong ${skills} skills that make me a strong fit for this role.

I am confident that my qualifications align perfectly with your expectations. I look forward to the opportunity to contribute to your team.

Sincerely,
[Your Name]
    `;
    setResult(content.trim());
  };

  return (
    <div className="container">
      <h1>CoverGEN</h1>
      <p>AI Resume & Cover Letter Generator</p>
      <div className="form">
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Experience Summary"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <input
          type="text"
          placeholder="Key Skills (comma-separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <button onClick={generateContent}>Generate Cover Letter</button>
      </div>
      {result && (
        <div className="output">
          <h3>Your Cover Letter:</h3>
          <textarea readOnly value={result} rows={12}></textarea>
          <button onClick={() => navigator.clipboard.writeText(result)}>
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
