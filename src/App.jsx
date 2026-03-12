import "./index.css";
import FixedName from "./components/FixedName";
import FixedCV from "./components/FixedCV";
import FixedSkills from "./components/FixedSkills";
import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <FixedName />
      <FixedCV />
      <FixedSkills />

      <main className="content">
        <section className="cards-section">
          <Card title="Project 01" />
          <Card title="Project 02" />
          <Card title="Project 03" />
          <Card title="Project 04" />
          <Card title="Project 05" />
          <Card title="Project 06" />
        </section>
      </main>
    </div>
  );
}

export default App;