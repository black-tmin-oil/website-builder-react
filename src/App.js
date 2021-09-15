import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Dashboard from "./pages/Builder/components/"
import TopBar from './components/TopBar'
function App () {
  return (
    <>
      <TopBar />
      <Dashboard />
      {/* <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/Home">Start</Link></li>
            <li><Link to="/Builder">Build</Link></li>
            <li><Link to="/Dash">dash</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Home">
            <Start />
          </Route>
          <Route path="/Builder">
            <BuilderIndex />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter> */}
    </>
  )
}

export default App
