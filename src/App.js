import React, { useState } from 'react';
import './styles.css';

const coverLetterTemplates = {
  IT: ({ jobTitle, experience, skills }) => `
Dear Hiring Manager,

I am excited to apply for the ${jobTitle} position. With over ${experience} and expertise in ${skills}, I have developed strong problem-solving skills and a passion for cutting-edge technologies.

I am confident my background aligns well with your needs, and I look forward to contributing to your innovative team.

Thank you for considering my application.

Sincerely,
[Your Name]
`,
  Marketing: ({ jobTitle, experience, skills }) => `
Dear Hiring Team,

As a passionate marketer with ${experience} experience in ${skills}, I am eager to bring creativity and data-driven strategies to the ${jobTitle} role.

My ability to craft compelling campaigns and engage audiences will add value to your company.

I appreciate your time and consideration.

Best regards,
[Your Name]
`,
  Healthcare: ({ jobTitle, experience, skills }) => `
Dear Hiring Manager,

I am applying for the ${jobTitle} position, bringing ${experience} of healthcare experience and strong skills in ${skills}.

My dedication to patient care and teamwork makes me a perfect fit for your organization.

Thank you for your consideration.

Sincerely,
[Your Name]
`,
};

const resumeTemplates = {
  IT: ({ jobTitle, experience, skills, education, achievements }) => `
[Your Name]
[Your Contact Information]

Objective
---------
Seeking the ${jobTitle} role to leverage ${experience} and skills in ${skills}.

Education
---------
${education}

Experience & Achievements
-------------------------
${achievements}
`,
  Marketing: ({ jobTitle, experience, skills, education, achievements }) => `
[Your Name]
[Your Contact Information]

Profile
--------
Creative and data-driven marketer with ${experience} in ${skills}.

Education
---------
${education}

Key Achievements
-----------------
${achievements}
`,
  Healthcare: ({ jobTitle, experience, skills, education, achievements }) => `
[Your Name]
[Your Contact Information]

Summary
--------
Experienced healthcare professional with ${experience} and expertise in ${skills}.

Education
---------
${education}

Professional Highlights
------------------------
${achievements}
`,
};

function App() {
  const [activeTab, setActiveTab] = useState('coverLetter');
  const [jobTitle, setJobTitle] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [education, setEducation] = useState('');
  const [achievements, setAchievements] = useState('');
  const [industry, setIndustry] = useState('IT');
  const [result, setResult] = useState('');

  const generateContent = () => {
    if (activeTab === 'coverLetter') {
      const templateFn = coverLetterTemplates[industry];
      if (!templateFn) {
        setResult('Sorry, template not available for this industry.');
        return;
      }
      const content = templateFn({ jobTitle, experience, skills });
      setResult(content.trim());
    } else {
      // Resume
      const templateFn = resumeTemplates[industry];
      if (!templateFn) {
        setResult('Sorry, template not available for this industry.');
        return;
      }
      const content = templateFn({ jobTitle, experience, skills, education, achievements });
      setResult(content.trim());
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert(`${activeTab === 'coverLetter' ? 'Cover letter' : 'Resume'} copied to clipboard!`);
  };

  return (
    <div className="app">
      <header>
        <h1>📄 CoverGEN</h1>
        <p>AI-Powered Resume & Cover Letter Generator</p>
      </header>

      <nav className="tab-nav">
        <button
          className={activeTab === 'coverLetter' ? 'active' : ''}
          onClick={() => {
            setActiveTab('coverLetter');
            setResult('');
          }}
        >
          Cover Letter
        </button>
        <button
          className={activeTab === 'resume' ? 'active' : ''}
          onClick={() => {
            setActiveTab('resume');
            setResult('');
          }}
        >
          Resume
        </button>
      </nav>

      <section className="form-section">
        <label>
          Select Industry:
          <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
            <option value="IT">Information Technology</option>
            <option value="Marketing">Marketing</option>
            <option value="Healthcare">Healthcare</option>
          </select>
        </label>

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
            placeholder="e.g. 3 years developing web applications"
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

        {activeTab === 'resume' && (
          <>
            <label>
              Education:
              <textarea
                placeholder="e.g. B.Sc. Computer Science, University XYZ, 2021"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                rows={3}
              />
            </label>

            <label>
              Achievements & Experience Details:
              <textarea
                placeholder="e.g. Led project X, improved sales by 20%"
                value={achievements}
                onChange={(e) => setAchievements(e.target.value)}
                rows={4}
              />
            </label>
          </>
        )}

        <button className="generate-btn" onClick={generateContent}>
          ✨ Generate {activeTab === 'coverLetter' ? 'Cover Letter' : 'Resume'}
        </button>
      </section>

      {result && (
        <section className="output-section">
          <h3>Your {activeTab === 'coverLetter' ? 'Cover Letter' : 'Resume'}:</h3>
          <textarea readOnly value={result} rows={activeTab === 'coverLetter' ? 12 : 18} />
          <button className="copy-btn" onClick={copyToClipboard}>
            📋 Copy to Clipboard
          </button>
        </section>
      )}
    </div>
  );
}

export default App;
