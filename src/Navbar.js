import { Link } from "react-router-dom";
import logo from "./assets/logo.jpeg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Ekrini Logo" className="logo-img" />

      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/annonces">Annonces</Link>
        <Link to="/contact">Contact</Link>
        <button className="nav-btn">Publier une annonce</button>
      </div>
    </nav>
  );
}
