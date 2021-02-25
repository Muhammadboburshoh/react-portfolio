import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar () {

  return (
    <>
      <nav className="site-navbar">
        <h2 className="header-logo">
          <Link className="haeder-link" to="/">MUHAMMADBOBUR</Link>
        </h2>

        <ul className="menu">
          <li className="menu-item">
            <Link to="/" className="menu-link">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/about" className="menu-link">About</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar