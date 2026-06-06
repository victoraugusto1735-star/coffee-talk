import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import { Home } from "./pages/Home"
import { Cart } from "./pages/Cart"
import { Favorites } from "./pages/Favorites"
import { Login } from "./pages/Login"
import { ProductDetails } from "./pages/ProductDetails"

function App() {
  const [logged, setLogged] = useState(() => {
    return localStorage.getItem("logged") === "true"
  })

  const [cartCount, setCartCount] = useState(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    return cart.length
  })

  function handleLogin() {
    localStorage.setItem("logged", "true")
    setLogged(true)
  }

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCartCount(cart.length)
  }

  if (!logged) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <>
      <Header cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home onCartUpdate={updateCartCount} />} />
        <Route path="/cart" element={<Cart onCartUpdate={updateCartCount} />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/coffee/:id"
          element={<ProductDetails onCartUpdate={updateCartCount} />}
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App