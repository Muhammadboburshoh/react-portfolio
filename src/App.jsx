import HomePage from "./Pages/Home/Home"
import AboutPage from "./Pages/About/About"

import {Switch, Route} from "react-router-dom"

import "./App.css"
function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/about" exact>
          <AboutPage/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
