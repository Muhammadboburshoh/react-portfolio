import { createContext, useState, useEffect, useContext} from "react"

const LanguageContext = createContext()

function LanguageProvider ({children}) {

  const [ language, setLanguage ] = useState(window.localStorage.getItem("language") || "uz")

  useEffect(() => {
    window.localStorage.setItem("language", language)
  }, [language])

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  )
}

function useLanguage () {

  const {language, setLanguage} = useContext(LanguageContext)

  return [language, setLanguage]
}

export {
  LanguageProvider,
  LanguageContext,
  useLanguage
}