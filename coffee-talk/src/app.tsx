import { Routes, Route } from "react-router-dom"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

import { Home } from "./pages/Home"
import { Cart } from "./pages/Cart"
import { Favorites } from "./pages/Favorites"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App