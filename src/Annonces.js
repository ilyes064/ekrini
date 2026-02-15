
const annoncesData = [
  {
    id: 1,
    title: "Appartement moderne",
    price: 1200,
    location: "Paris",
    image: "https://source.unsplash.com/600x400/?apartment"
  },
  {
    id: 2,
    title: "Villa avec piscine",
    price: 3500,
    location: "Nice",
    image: "https://source.unsplash.com/600x400/?villa"
  },
  {
    id: 3,
    title: "Studio cosy",
    price: 800,
    location: "Lyon",
    image: "https://source.unsplash.com/600x400/?studio"
  }
];

export default function Annonces() {
  const annonces = [
    {
      id: 1,
      title: "Appartement moderne",
      price: "1200 €",
      city: "Paris",
      image:
        "https://images.unsplash.com/photo-1501183638710-841dd1904471"
    },
    {
      id: 2,
      title: "Villa avec piscine",
      price: "3500 €",
      city: "Nice",
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
    },
    {
      id: 3,
      title: "Studio cosy",
      price: "800 €",
      city: "Lyon",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    }
  ];

  return (
    <div className="annonces-container">
      <h2 className="annonces-title">Nos Annonces</h2>

      <div className="annonces-grid">
        {annonces.map((annonce) => (
          <div className="annonce-card" key={annonce.id}>
            <img
              src={annonce.image}
              alt={annonce.title}
              className="annonce-image"
            />
            <div className="annonce-content">
              <h3>{annonce.title}</h3>
              <p>{annonce.city}</p>
              <div className="annonce-price">{annonce.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

