import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './Home';

class App extends Component {

  render() {

    return (
      <>
        <h1>Router</h1>

        <Router>
          {/* 
            On définit les routes cliquables 
            Puis dans le Switch on définit les composants à monter en fonction 
            de ces routes
          */}
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>

      </>
    )
  }
}

export default App;
