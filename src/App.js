import React,{createContext,useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/home/Home';
import Resume from'./components/resume/Resume';

function App() {
  return (
     <Router>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/resume">
        <Resume></Resume>
      </Route>
    </Switch>
  </Router>
     
  );
}

export default App;
