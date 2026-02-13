import AnnonceCard from "./AnnonceCard";

export default function Annonces() {
  return (
    <div style={{ padding: "80px 60px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
        Nos annonces premium
      </h2>

      <div className="card-container">
        <AnnonceCard title="Villa moderne" city="Tunis" price="800" />
        <AnnonceCard title="Studio cosy" city="Bizerte" price="500" />
        <AnnonceCard title="Maison de luxe" city="Sousse" price="1500" />
      </div>
    </div>
  );
}
