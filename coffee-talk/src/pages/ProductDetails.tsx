import { useState } from "react"
import { useParams } from "react-router-dom"
import { coffees } from "../lib/api"
import { formatPrice } from "../lib/formatPrice"

type Props = {
  onCartUpdate: () => void
}

export function ProductDetails({ onCartUpdate }: Props) {
  const { id } = useParams()
  const [toast, setToast] = useState("")

  const coffee = coffees.find((item) => item.id === Number(id))

  function addToCart() {
    if (!coffee) return

    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    cart.push(coffee)

    localStorage.setItem("cart", JSON.stringify(cart))

    onCartUpdate()

    setToast(`${coffee.name} foi para o carrinho`)

    setTimeout(() => {
      setToast("")
    }, 2500)
  }

  if (!coffee) {
    return (
      <main className="app-container page-empty">
        <h1>Café não encontrado</h1>
      </main>
    )
  }

  return (
    <main className="app-container details-page">
      {toast && (
        <div className="coffee-toast">
          <span>☕</span>
          <p>{toast}</p>
        </div>
      )}

      <img src={coffee.image} alt={coffee.name} />

      <div>
        <span className="mini-title">CAFÉ ESPECIAL</span>

        <h1>{coffee.name}</h1>

        <p className="stars">⭐⭐⭐⭐⭐ (4.9)</p>

        <p>{coffee.description}</p>

        <div className="coffee-info">
          <h3>☕ Origem</h3>
          <p>{coffee.origin}</p>

          <h3>🌱 Torra</h3>
          <p>{coffee.roast}</p>

          <h3>👃 Notas Aromáticas</h3>
          <p>{coffee.notes}</p>

          <h3>🔥 Intensidade</h3>
          <p>{coffee.intensity}</p>

          <h3>🥛 Harmonização</h3>
          <p>{coffee.pairing}</p>
        </div>

        <strong>{formatPrice(coffee.price)}</strong>

        <button className="buy-details-btn" onClick={addToCart}>
          Comprar Agora ☕
        </button>
      </div>
    </main>
  )
}