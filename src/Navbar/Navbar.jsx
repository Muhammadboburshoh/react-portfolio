import { Link } from "react-router-dom"

function Navbar () {

  return (
    <>
      <ul className="menu">
        <li className="item">
          <Link to="/" className="menu-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="menu-link">About</Link>
        </li>
      </ul>
    </>
  )
}

export default Navbar