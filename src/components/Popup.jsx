function Popup({ card, onClose }) {
  if (!card) return null;

  return (
    <div className="popup">
      <button onClick={onClose}>Close</button>
      <h2>{card.title}</h2>
      <p>{card.category}</p>
    </div>
  );
}

export default Popup;