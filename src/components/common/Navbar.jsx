import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
      <Link to="/">Home</Link>
      <Link to="/products">Produkty</Link>
      <Link to="/contact-us">Kontaktujte nás</Link>
    </nav>
  )
}