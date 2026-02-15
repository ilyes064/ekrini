export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Inscription</h2>

        <input type="text" placeholder="Nom complet" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />

        <button className="btn-primary">Créer un compte</button>

        <p className="auth-switch">
          Déjà un compte ? <a href="/login">Se connecter</a>
        </p>
      </div>
    </div>
  );
}
