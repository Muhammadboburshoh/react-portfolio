import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar () {

  return (
    <>
      <ul className="menu">
        <li className="menu-item">
          <Link to="/" className="menu-link">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="/about" className="menu-link">About</Link>
        </li>
      </ul>
    </>
  )
}

export default Navbar