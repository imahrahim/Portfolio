function Card({ title, onClick }) {
  return (
    <article className="card" onClick={onClick}>
      <h2>{title}</h2>
    </article>
  );
}

export default Card;