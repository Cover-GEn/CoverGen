import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [education, setEducation] = useState('');
  const [output, setOutput] = useState('');

  const generateResume = () => {
    const resume = `
Name: ${name}

Professional Summary:
${summary}

Skills:
${skills}

Experience:
${experience}

Education:
${education}
    `;
    setOutput(resume.trim());
  };

  return (
    <div className="app">
      <h1>📑 Resume Builder</h1>
      <p>Create a professional resume tailored to your job field.</p>

      <div className="form-section">
        <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
        <input placeholder="Skills (comma-separated)" value={skills} onChange={(e) => setSkills(e.target.value)} />
        <input placeholder="Experience Details" value={experience} onChange={(e) => setExperience(e.target.value)} />
        <input placeholder="Education" value={education} onChange={(e) => setEducation(e.target.value)} />

        <button onClick={generateResume}>📄 Generate Resume</button>
      </div>

      {output && (
        <div className="output-section">
          <h3>Your Generated Resume:</h3>
          <textarea readOnly value={output} rows={16} />
          <button onClick={() => navigator.clipboard.writeText(output)}>
            📋 Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
