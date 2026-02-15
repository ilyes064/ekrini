export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Connexion</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />

        <button className="btn-primary">Se connecter</button>

        <p className="auth-switch">
          Pas encore de compte ? <a href="/register">Créer un compte</a>
        </p>
      </div>
    </div>
  );
}
