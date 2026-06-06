import { NavLink } from "react-router-dom"

type Props = {
  cartCount: number
}

export function Header({ cartCount }: Props) {
  function toggleTheme() {
    document.body.classList.toggle("dark")
  }

  return (
    <header>
      <div className="header-content">
        <NavLink to="/" className="logo">
          ☕ Coffee Talk
        </NavLink>

        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-btn ${isActive ? "active" : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `nav-btn ${isActive ? "active" : ""}`
            }
          >
            Carrinho ({cartCount})
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `nav-btn ${isActive ? "active" : ""}`
            }
          >
            Favoritos
          </NavLink>

          <button className="nav-btn" onClick={toggleTheme}>
            🌙
          </button>
        </nav>
      </div>
    </header>
  )
}