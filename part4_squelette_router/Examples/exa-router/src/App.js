import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './Home';  
import Post from './Post';

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
            <li><Link to="/posts">Les articles</Link></li>
            <li><Link to="/post/1">React présentation</Link></li>
            <li><Link to="/post/2">React les fondamentaux</Link></li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/posts"  >
              <ul>
                <li>Article 1</li>
                <li>Article 2</li>
              </ul>
            </Route>
            {/* 
              On peut également monter un composant de la manière suivante 
            */}
            <Route exact path="/post/:id" component={ Post } />

            <Route 
              render={() => }
            />

            {/** gestiond de la page 404 */}
            <Route path="*" component={ () => <p>404 Page Not Found</p> } />

          </Switch>
        </Router>
      </>
    )
  }
}

export default App;