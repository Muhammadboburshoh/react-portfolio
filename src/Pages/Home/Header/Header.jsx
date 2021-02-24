import Navbar from "../../../Navbar/Navbar"
import "./Header.css"

function Header () {

  return (
    <header className="home-header">
      <Navbar />
      <h1>Site Header</h1>
      <h2>Home page</h2>
    </header>
  )
}

export default Header