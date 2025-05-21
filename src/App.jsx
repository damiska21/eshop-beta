import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Navbar from './components/common/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
