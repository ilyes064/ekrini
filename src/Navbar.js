import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">Ekrini</h2>

      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/annonces">Annonces</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
