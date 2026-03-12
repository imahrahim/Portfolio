const skillContent = {
  "data-science": `DATA AND ANALYTICS
******************
Python
SQL
R
SAS (Base / Viya)
SPSS
Excel
Google Analytics`,

  "data-vis": `DATA VISUALISATION
******************
D3.js
Tableau
Data Visualization
Information Design
Narrative Storytelling
Interactive Experience Design`,

  design: `DESIGN AND INTERACTION
**********************
Adobe Creative Cloud
Figma
Motion & Generative Design
Cinema 4D
Blender
HTML / CSS
React.js`,
};

function FixedSkills({ activeSection }) {
  return (
    <div className="fixed-skills">
      <div className="skills-block">
        <pre>{`CORE STRENGTHS
******************
Analytical and Conceptual Thinking
Interdisciplinary Approach
Visual Communication
Problem Solving
Team Collaboration`}</pre>
      </div>

      <div key={activeSection} className="skills-block skills-dynamic">
        <pre>{skillContent[activeSection]}</pre>
      </div>
    </div>
  );
}

export default FixedSkills;