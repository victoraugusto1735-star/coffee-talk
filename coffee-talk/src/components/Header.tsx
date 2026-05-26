import { Link } from "react-router-dom"

export function Header() {
  return (
    <header>
      <div className="header-content">
        <Link to="/" className="logo">
          ☕ Coffee Talk
        </Link>

        <nav>
          <Link to="/" className="nav-btn active">
            Home
          </Link>

          <Link to="/cart" className="nav-btn">
            Carrinho
          </Link>

          <Link to="/favorites" className="nav-btn">
            Favoritos
          </Link>
        </nav>
      </div>
    </header>
  )
}