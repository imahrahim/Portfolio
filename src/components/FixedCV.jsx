const cvLines = [
  { text: "EDUCATION {", indent: 0 },
  { text: "", indent: 0 },

  { text: "MSc Data Science & Business Analytics [2025–2026] {", indent: 1 },
  { text: "Specialisation: Business Intelligence", indent: 2 },
  { text: "(Asia Pacific University of Technology & Innovation, Malaysia)", indent: 2 },
  { text: "};", indent: 1 },
  { text: "", indent: 0 },

  { text: "BA Visual Communication [2021–2024] {", indent: 1 },
  { text: "Specialisation: Data Design + Art", indent: 2 },
  { text: "(Lucerne University of Applied Sciences and Arts, Switzerland)", indent: 2 },
  { text: "};", indent: 1 },
  { text: "", indent: 0 },

  { text: "Vocational Baccalaureate in Art & Design + Foundation Year[2015–2020]{", indent: 1 },
  { text: "(Fachmittelschule Basel + School of Design Basel, Switzerland)", indent: 2 },
  { text: "};", indent: 1 },
  { text: "", indent: 0 },

  { text: "Exchange Year [2016] {", indent: 1 },
  { text: "(Instituto Privado D-198 San José, Crespo, Argentina)", indent: 2 },
  { text: "};", indent: 1 },
  { text: "", indent: 0 },

  { text: "Compulsory Education [2006–2015] {", indent: 1 },
  { text: "(Basel, Switzerland)", indent: 2 },
  { text: "};", indent: 1 },
  { text: "", indent: 0 },

  { text: "};", indent: 0 },
  { text: "", indent: 0 },

  { text: "************************************************************", indent: 0 },
  { text: "", indent: 0 },

  { text: "WORK_EXPERIENCE {", indent: 0 },
  { text: "", indent: 0 },

  { text: "Freelance Graphic Designer [2021–2024] {", indent: 1 },
  { text: "(Self-employed / Collaborative Projects)", indent: 2 },
  { text: "// Created visual content for small clients and collaborations with designers", indent: 2 },
  { text: "};", indent: 1 },
  { text: "", indent: 0 },

  { text: "Part-time Employee [Sep–Nov 2020] {", indent: 1 },
  { text: "(AG für Fruchthandel, Safruits)", indent: 2 },
  { text: "// Customer orders and logistics support", indent: 2 },
  { text: "};", indent: 1 },
  { text: "", indent: 0 },

  { text: "Temporary / Seasonal Job [2013–2021] {", indent: 1 },
  { text: "(AG für Fruchthandel, Safruits)", indent: 2 },
  { text: "// Sorting, labeling and quality checking of produce", indent: 2 },
  { text: "};", indent: 1 },
  { text: "", indent: 0 },

  { text: "Sculptor Internship [Jan 2018] {", indent: 1 },
  { text: "(Stadtwerkstatt Basel)", indent: 2 },
  { text: "};", indent: 1 },
  { text: "", indent: 0 },

  { text: "Social Internship [Jun 2017] {", indent: 1 },
  { text: "(Kita Baselini)", indent: 2 },
  { text: "};", indent: 1 },
  { text: "", indent: 0 },

  { text: "};", indent: 0 },
  { text: "", indent: 0 },

  { text: "************************************************************", indent: 0 },
  { text: "", indent: 0 },

  { text: "LANGUAGES {", indent: 0 },
  { text: "", indent: 0 },

  { text: 'German  level="native";', indent: 1 },
  { text: 'English level="fluent";', indent: 1 },
  { text: 'Spanish level="very_good";', indent: 1 },
  { text: 'French  level="basic";      // 9 years in school', indent: 1 },
  { text: 'Malay   level="basic";      // conversational', indent: 1 },
  { text: "", indent: 0 },

  { text: "};", indent: 0 },
];

function FixedCV() {
  return (
    <div className="fixed-cv">
      <div className="code-block">
        {cvLines.map((line, index) => (
          <div className="code-line" key={index}>
            <span className="code-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span
              className={`code-text ${line.text.trim().startsWith("//") ? "code-comment" : ""}`}
              style={{ "--indent": line.indent }}
            >
              {line.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FixedCV;