import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import Login from './Login';

import PrivateRoute from './PrivateRoute';

class App extends React.Component {

  render() {

    const active = {
      fontWeight: "bold",
      color: "red"
    };

    return (
      <Router>
        <div>
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                activeStyle={active}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                activeStyle={active}
              >Dashboard (private)</NavLink>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <p>Bienvenu sur la page d'accueil</p>
            </Route>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" />
            <Route component={() => (<p> Page Not Found </p>)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
