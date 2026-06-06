import { useEffect, useState } from "react"
import { formatPrice } from "../lib/formatPrice"
import type { Coffee } from "../lib/api"

type Props = {
  onCartUpdate: () => void
}

export function Cart({ onCartUpdate }: Props) {
  const [cart, setCart] = useState<Coffee[]>([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCart(savedCart)
  }, [])

  function removeCart(id: number) {
    const newCart = cart.filter((coffee) => coffee.id !== id)

    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
    onCartUpdate()
  }

  const total = cart.reduce((sum, coffee) => sum + coffee.price, 0)

  return (
    <main className="app-container">
      <section className="section-title">
        <h2>Meu Carrinho 🛒</h2>
        <p>Cafés adicionados ao carrinho.</p>
      </section>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <section className="coffee-grid">
            {cart.map((coffee) => (
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
                    onClick={() => removeCart(coffee.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </section>

          <div className="cart-total">
            Total: {formatPrice(total)}
          </div>
        </>
      )}
    </main>
  )
}