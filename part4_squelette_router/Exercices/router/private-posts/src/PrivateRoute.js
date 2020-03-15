import React from 'react';
import './App.css';

import { Route, Redirect } from "react-router-dom";
import Dashboard from './Dashboard';

class PrivateRoute extends React.Component {

  render() {

    const { children, ...rest } = this.props;
    const token = localStorage.getItem('token') === 'true';

      return (
        <Route 
          { ...rest }
          render={ (rest) => 
            token ? <Dashboard  { ...rest } /> :
            <Redirect 
              to={{pathname : '/login', state : { from : "/"}}} 
            />
          }
        />
      );
  }
}

export default PrivateRoute;