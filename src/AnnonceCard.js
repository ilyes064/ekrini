export default function AnnonceCard({ annonce }) {
  return (
    <div className="annonce-card">
      <img src={annonce.image} alt={annonce.title} />

      <div className="annonce-content">
        <h3>{annonce.title}</h3>
        <p className="price">{annonce.price} €</p>
        <p className="location">{annonce.location}</p>
      </div>
    </div>
  );
}
