import { useEffect, useRef, useState } from "react";
import "./styles/index.css";
import "./styles/fixed.css";
import "./styles/cards.css";
import "./styles/responsive.css";
import "./styles/overlay.css";

import FixedName from "./components/FixedName";
import FixedCV from "./components/FixedCV";
import FixedSkills from "./components/FixedSkills";
import Card from "./components/Card";
import Popup from "./components/Popup";

function App() {
  const [activeSection, setActiveSection] = useState("data-science");
  const [activeCard, setActiveCard] = useState(null);

  const dataScienceRef = useRef(null);
  const dataVisRef = useRef(null);
  const designRef = useRef(null);

  useEffect(() => {
    const sections = [
      { id: "data-science", ref: dataScienceRef },
      { id: "data-vis", ref: dataVisRef },
      { id: "design", ref: designRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section);
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeCard]);

  return (
    <div className={activeCard ? "app app--popup-open" : "app"}>
      <FixedName />

      <div className="flow-layout">
        <FixedSkills activeSection={activeSection} />

        <main className="content">
          <section
            ref={dataScienceRef}
            data-section="data-science"
            className="cards-section"
          >
            <div className="section-heading">
              <p className="section-label">Data Science</p>
            </div>

            <Card
              title="Project 01"
              onClick={() => setActiveCard("Project 01")}
            />
            <Card
              title="Project 02"
              onClick={() => setActiveCard("Project 02")}
            />
            <Card
              title="Project 03"
              onClick={() => setActiveCard("Project 03")}
            />
          </section>

          <section
            ref={dataVisRef}
            data-section="data-vis"
            className="cards-section"
          >
            <div className="section-heading">
              <p className="section-label">Data Visualisation</p>
            </div>

            <Card
              title="Project 04"
              onClick={() => setActiveCard("Project 04")}
            />
            <Card
              title="Project 05"
              onClick={() => setActiveCard("Project 05")}
            />
            <Card
              title="Project 06"
              onClick={() => setActiveCard("Project 06")}
            />
          </section>

          <section
            ref={designRef}
            data-section="design"
            className="cards-section"
          >
            <div className="section-heading">
              <p className="section-label">Design</p>
            </div>

            <Card
              title="Project 07"
              onClick={() => setActiveCard("Project 07")}
            />
            <Card
              title="Project 08"
              onClick={() => setActiveCard("Project 08")}
            />
            <Card
              title="Project 09"
              onClick={() => setActiveCard("Project 09")}
            />
          </section>
        </main>
      </div>

      {!activeCard && <FixedCV />}

      {activeCard && (
        <Popup title={activeCard} onClose={() => setActiveCard(null)} />
      )}
    </div>
  );
}

export default App;