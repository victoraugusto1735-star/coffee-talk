import { coffees } from "../lib/api"
import { CoffeeCard } from "../components/CoffeeCard"

type Coffee = {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export function Home() {
  function addToFavorites(coffee: Coffee) {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")

    const exists = favorites.some((item: Coffee) => item.id === coffee.id)

    if (!exists) {
      favorites.push(coffee)
      localStorage.setItem("favorites", JSON.stringify(favorites))
      alert(`${coffee.name} foi para favoritos ❤️`)
    } else {
      alert(`${coffee.name} já está nos favoritos`)
    }
  }

  function addToCart(coffee: Coffee) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    cart.push(coffee)

    localStorage.setItem("cart", JSON.stringify(cart))

    alert(`${coffee.name} foi para o carrinho 🛒`)
  }

  return (
    <main className="app-container">
      <section className="hero">
        <div className="hero-text">
          <span className="mini-title">BEM-VINDO À COFFEE TALK</span>

          <h1>
            Cafés especiais
            <br />
            para o seu dia.
          </h1>

          <p>
            Selecionamos os melhores grãos e preparamos experiências únicas.
          </p>

          <a href="#cafes">
            <button className="hero-btn">Ver cafés →</button>
          </a>
        </div>
      </section>

      <section id="cafes" className="section-title">
        <h2>Nossos Cafés</h2>
        <p>Escolha o seu favorito.</p>
      </section>

      <section className="coffee-grid">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            coffee={coffee}
            onFavorite={addToFavorites}
            onCart={addToCart}
          />
        ))}
      </section>
    </main>
  )
}