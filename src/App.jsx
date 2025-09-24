import React, { useState } from 'react'
import Navbar from './Components/navbar/Navbar.jsx'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home.jsx'
import Cart from './Pages/cart/Cart.jsx'
import PlaceOrder from './Pages/placeOrder/PlaceOrder.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Login from './Components/Login/Login.jsx'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {/* ✅ Only one Navbar */}
      <Navbar setShowLogin={setShowLogin} />   

      {/* ✅ Show login modal if true */}
      {showLogin && <Login setShowLogin={setShowLogin} />}

      {/* Main Content */}
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </div>

      {/* Footer always visible */}
      <Footer />
    </>
  )
}

export default App
