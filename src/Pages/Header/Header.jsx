import { useLanguage } from "../../Context/LanguageContext"

import Navbar from "../../Navbar/Navbar"
import "./Header.css"

function Header () {

  const [language, setLanguage] = useLanguage()

  const languageChange = e => {
    setLanguage(e.target.value)
  }

  return (
    <header className="home-header">
      <Navbar />

      <select
      className="select"
        defaultValue={language}
        onChange={languageChange}
      >
        <option value="uz">O'zbekcha</option>
        <option value="tr">Turkcha</option>
      </select>
    </header>
  )
}

export default Header