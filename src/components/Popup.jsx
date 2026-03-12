function Popup({ title, onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          Close
        </button>

        <p className="popup-label">Project</p>
        <h2 className="popup-title">{title}</h2>

        <div className="popup-content">
          <p>Project content goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;