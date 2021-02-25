import { useLanguage } from "../../../Context/LanguageContext"
import Languages from "../../../data"
import "./Main.css"

function Main () {

  const [ language ] = useLanguage()
  const TEXT = Languages[language]

  return (
    <main className="home-main">
      <h1>{TEXT.welcome}</h1>
      <p>{TEXT.main}</p>
    </main>
  )
}

export default Main