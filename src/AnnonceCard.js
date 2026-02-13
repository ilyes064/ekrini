export default function AnnonceCard({ title, city, price }) {
  return (
    <div className="card">
      <div className="card-image">
        <span className="price-badge">{price} DT / nuit</span>
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>📍 {city}</p>
        <button className="btn-secondary">
          Voir détails
        </button>
      </div>
    </div>
  );
}
