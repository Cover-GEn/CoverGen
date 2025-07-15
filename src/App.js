import React, { useState } from 'react';
import './styles.css';

// Industry templates (expandable)
const coverLetterTemplates = {
  IT: ({ jobTitle, experience, skills, company }) => `
Dear Hiring Manager at ${company},

I'm excited to apply for the ${jobTitle} role. With ${experience} and a skill set including ${skills}, I excel at solving complex technical problems and delivering scalable software.

Your company's commitment to innovation aligns with my drive to stay ahead of tech trends. I’d love the opportunity to contribute.

Sincerely,
[Your Name]
`,
  Finance: ({ jobTitle, experience, skills, company }) => `
Dear Hiring Manager at ${company},

As a finance professional with ${experience}, I’m interested in the ${jobTitle} role. I bring proficiency in ${skills} and a proven record of improving fiscal performance.

I’m confident I can deliver results that align with ${company}’s financial objectives.

Sincerely,
[Your Name]
`,
  Education: ({ jobTitle, experience, skills, company }) => `
Dear Hiring Committee,

I’m writing to express interest in the ${jobTitle} role at ${company}. With ${experience} and strong abilities in ${skills}, I believe I’m well-equipped to support student development and educational excellence.

Thank you for your time and consideration.

Sincerely,
[Your Name]
`,
};

const resumeTemplates = {
  IT: ({ jobTitle, experience, skills, education, achievements }) => `
[Your Name] | [Email] | [Phone]

Objective:
----------
Seeking a ${jobTitle} role to apply ${experience}. Skilled in ${skills}.

Education:
----------
${education}

Experience:
-----------
${achievements}
`,
  Finance: ({ jobTitle, experience, skills, education, achievements }) => `
[Your Name] | [Email] | [Phone]

Summary:
--------
Experienced finance professional applying for ${jobTitle}. Strengths: ${skills}.

Education:
----------
${education}

Key Projects & Results:
------------------------
${achievements}
`,
  Education: ({ jobTitle, experience, skills, education, achievements }) => `
[Your Name] | [Email] | [Phone]

Professional Summary:
---------------------
Education specialist with ${experience}, applying for ${jobTitle}. Strengths include ${skills}.

Education:
----------
${education}

Experience:
-----------
${achievements}
`,
};

function App() {
  const [activeTab, setActiveTab] = useState('coverLetter');
  const [industry, setIndustry] = useState('IT');
  const [jobTitle, setJobTitle] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [company, setCompany] = useState('');
  const [education, setEducation] = useState('');
  const [achievements, setAchievements] = useState('');
  const [result, setResult] = useState('');

  const generateContent = () => {
    const isResume = activeTab === 'resume';
    const templateFn = isResume ? resumeTemplates[industry] : coverLetterTemplates[industry];
    if (!templateFn) return setResult('❌ Sorry, that industry is not yet supported.');

    const content = templateFn({ jobTitle, experience, skills, company, education, achievements });
    setResult(content.trim());
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert(`${activeTab === 'resume' ? 'Resume' : 'Cover Letter'} copied to clipboard!`);
  };

  return (
    <div className="app">
      <header>
        <h1>📄 CoverGEN</h1>
        <p>Your AI-powered cover letter & resume builder</p>
      </header>

      <div className="tab-buttons">
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
      </div>

      <section className="form-section">
        <label>
          Industry:
          <select value={industry} onChange={(e) => setIndustry(e.target.value)}>
            <option value="IT">Information Technology</option>
            <option value="Finance">Finance</option>
            <option value="Education">Education</option>
            <!-- Add more options here -->
          </select>
        </label>

        <label>
          Job Title:
          <input
            type="text"
            placeholder="e.g. Frontend Developer"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </label>

        <label>
          Company Name:
          <input
            type="text"
            placeholder="e.g. Google"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>

        <label>
          Experience Summary:
          <input
            type="text"
            placeholder="e.g. 3+ years in SaaS product development"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </label>

        <label>
          Key Skills (comma-separated):
          <input
            type="text"
            placeholder="e.g. Python, Agile, APIs"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </label>

        {activeTab === 'resume' && (
          <>
            <label>
              Education:
              <textarea
                placeholder="e.g. BSc in Computer Science, MIT, 2022"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                rows={2}
              />
            </label>

            <label>
              Key Achievements:
              <textarea
                placeholder="e.g. Built a CRM system that increased sales by 35%"
                value={achievements}
                onChange={(e) => setAchievements(e.target.value)}
                rows={3}
              />
            </label>
          </>
        )}

        <button className="generate-btn" onClick={generateContent}>
          ⚡ Generate {activeTab === 'coverLetter' ? 'Cover Letter' : 'Resume'}
        </button>
      </section>

      {result && (
        <section className="output-section">
          <h3>Your {activeTab === 'coverLetter' ? 'Cover Letter' : 'Resume'}:</h3>
          <textarea readOnly value={result} rows={activeTab === 'resume' ? 18 : 14} />
          <button className="copy-btn" onClick={copyToClipboard}>📋 Copy to Clipboard</button>
        </section>
      )}
    </div>
  );
}

export default App;
