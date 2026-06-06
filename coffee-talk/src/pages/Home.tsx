import { useState } from "react"
import { coffees, type Coffee } from "../lib/api"
import { CoffeeCard } from "../components/CoffeeCard"

type Props = {
  onCartUpdate: () => void
}

export function Home({ onCartUpdate }: Props) {
  const [toast, setToast] = useState("")

  const [favorites, setFavorites] = useState<Coffee[]>(() => {
    return JSON.parse(localStorage.getItem("favorites") || "[]")
  })

  function addToFavorites(coffee: Coffee) {
    const exists = favorites.some((item) => item.id === coffee.id)

    const updatedFavorites = exists
      ? favorites.filter((item) => item.id !== coffee.id)
      : [...favorites, coffee]

    setFavorites(updatedFavorites)
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
  }

  function addToCart(coffee: Coffee) {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    cart.push(coffee)

    localStorage.setItem("cart", JSON.stringify(cart))

    onCartUpdate()

    setToast(`${coffee.name} foi para o carrinho`)

    setTimeout(() => {
      setToast("")
    }, 2500)
  }

  return (
    <main className="app-container">
      {toast && (
        <div className="coffee-toast">
          <span>☕</span>
          <p>{toast}</p>
        </div>
      )}

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
            isFavorite={favorites.some((item) => item.id === coffee.id)}
            onFavorite={addToFavorites}
            onCart={addToCart}
          />
        ))}
      </section>
    </main>
  )
}