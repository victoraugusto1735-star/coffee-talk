import { NavLink } from "react-router-dom"

export function Header() {
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
            Carrinho
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              `nav-btn ${isActive ? "active" : ""}`
            }
          >
            Favoritos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}