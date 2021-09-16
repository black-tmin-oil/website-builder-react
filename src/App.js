import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Builder from "./pages/Builder/components/"
import Home from "./pages/Home"
import Error from "./pages/Error"
import TopBar from './components/TopBar'
function App () {
  return (
    <>
      <TopBar />
      <BrowserRouter>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Builder">
            <Builder />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
