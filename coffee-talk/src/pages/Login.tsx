type Props = {
  onLogin: () => void
}

export function Login({ onLogin }: Props) {
  function handleLogin() {
    localStorage.setItem("logged", "true")
    onLogin()
  }

  return (
    <main className="login-page">
      <div className="login-overlay"></div>

      <div className="login-card">
        <div className="login-logo">☕</div>

        <span className="login-tag">PREMIUM COFFEE EXPERIENCE</span>

        <h1>Coffee Talk</h1>

        <p>
          Descubra cafés especiais, sabores únicos e uma experiência criada para
          apaixonados por café.
        </p>

        <button onClick={handleLogin}>Entrar Agora</button>

        <small>Desde 2026 • Cafés Selecionados</small>
      </div>
    </main>
  )
}