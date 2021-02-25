import "./Main.css"
import { useLanguage } from "../../../Context/LanguageContext"

import Localization from "../../../data"

function Main () {

  const [ language ] = useLanguage()

  const TEXT = Localization[language]
  console.log(TEXT);

  return (
    <main className="about-main">
      <h2>⚡️ {TEXT.about_hedaer}</h2>

      <p>{TEXT.about_main}</p>
      
    </main>
  )
}

export default Main