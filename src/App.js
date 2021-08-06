import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import TopBar from "./components/TopBar"
import About from "./pages/About"
import Start from "./pages/Start"
function App() {
  return (
    <>
    <TopBar />
    <Start />
    </>
  );
}

export default App;
