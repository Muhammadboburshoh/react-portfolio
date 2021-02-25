import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

function Navbar () {

  return (
    <>
      <nav className="site-navbar">
        <h2 className="header-logo">
          <Link className="haeder-link" to="/">NAJOT TA'LIM</Link>
        </h2>

        <ul className="menu">
          <li className="menu-item">
            <NavLink to="/" activeClassName="menu-linkk">Home</NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/about" activeClassName="menu-linkk">About</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar