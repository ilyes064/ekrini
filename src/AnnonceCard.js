function AnnonceCard({ title, city, price }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "20px",
      width: "250px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    }}>
      <h3 style={{ color: "#4da8da" }}>{title}</h3>
      <p>📍 {city}</p>
      <p>💰 {price} DT / شهر</p>

      <button style={{
        marginTop: "10px",
        padding: "8px 16px",
        backgroundColor: "#4da8da",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}>
        شوف التفاصيل
      </button>
    </div>
  );
}

export default AnnonceCard;
