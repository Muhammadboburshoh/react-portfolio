import { useLanguage } from "../../Context/LanguageContext"
import Languages  from "../../data"
import "./Footer.css"

function Footer () {

  const [ language ] = useLanguage()
  const TEXT = Languages[language]

  return (
    <footer className="home-footer">
      <h2><span>💡𝗡𝗮𝗷𝗼𝘁 𝗧𝗮'𝗹𝗶𝗺 - </span>{TEXT.footer}</h2>
      <p className="copyright">© Copyright 2020 {TEXT.copyright}</p>
    </footer>
  )
}

export default Footer