import { useEffect, useState } from "react"
import { formatPrice } from "../lib/formatPrice"

type Coffee = {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export function Favorites() {
  const [favorites, setFavorites] = useState<Coffee[]>([])

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setFavorites(savedFavorites)
  }, [])

  function removeFavorite(id: number) {
    const newFavorites = favorites.filter((coffee) => coffee.id !== id)

    setFavorites(newFavorites)

    localStorage.setItem("favorites", JSON.stringify(newFavorites))
  }

  return (
    <main className="app-container">
      <section className="section-title">
        <h2>Meus Favoritos ❤️</h2>
        <p>Seus cafés favoritos aparecem aqui.</p>
      </section>

      {favorites.length === 0 ? (
        <p>Nenhum café favoritado ainda.</p>
      ) : (
        <section className="coffee-grid">
          {favorites.map((coffee) => (
            <div className="coffee-card" key={coffee.id}>
              <img
                src={coffee.image}
                alt={coffee.name}
                className="coffee-image"
              />

              <div className="card-content">
                <h2>{coffee.name}</h2>

                <p className="description">{coffee.description}</p>

                <p className="price">{formatPrice(coffee.price)}</p>

                <button
                  className="btn-secondary"
                  onClick={() => removeFavorite(coffee.id)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  )
}