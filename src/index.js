import React from 'react';
import ReactDOM from 'react-dom'

import { BrowserRouter } from "react-router-dom"

import App from './App.jsx'
import { LanguageProvider } from "./Context/LanguageContext"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)