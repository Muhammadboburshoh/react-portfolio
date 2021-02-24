import HomePage from "./Pages/Home/Home"
import AboutPage from "./Pages/About/About"

import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/about" exact>
          <AboutPage/>
        </Route>
      </Switch>
    </>
  )
}

export default App;
