import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AnnonceCard from "./AnnonceCard";

/* ================= HOME ================= */
function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0b1c2d",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ color: "#4da8da", fontSize: "52px" }}>Ekrini</h1>

      <p style={{ fontSize: "22px", marginTop: "10px" }}>
        دارك تلقاها بسهولة
      </p>

      <Link to="/annonces">
        <button style={{
          marginTop: "30px",
          padding: "12px 30px",
          fontSize: "18px",
          backgroundColor: "#4da8da",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Voir les annonces
        </button>
      </Link>
    </div>
  );
}

/* ================= ANNONCES ================= */
function Annonces() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>📢 الإعلانات</h2>
      <p>هنا باش يطلعوا الإعلانات متاع الكراء</p>

      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "30px",
        flexWrap: "wrap"
      }}>
        <AnnonceCard title="Appatement" city="Tunis" price="800" />
        <AnnonceCard title="STUDIO" city="bizete" price="500" />
        <AnnonceCard title="maisonء" city="Sousse" price="650" />
      </div>
    </div>
  );
}

/* ================= ROUTER ================= */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/annonces" element={<Annonces />} />
      </Routes>
    </BrowserRouter>
  );
}
