import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : '',
      token : false
    }
  }

  componentDidMount(){
    if( localStorage.getItem('token') )
      this.setState({token : localStorage.getItem('token') === 'true'});
  }

  handleChange = e => {
    const { value, name } = e.target ;
    this.setState({[name] : value})
  }

  handSubmit = e => {
    e.preventDefault();

    if(this.state.email === 'alan@alan.fr' && this.state.password === '123'){
      localStorage.setItem('token', 'true');

      this.setState({ token : true });

      this.props.history.push('/login')
    }else{
      localStorage.setItem('token', 'false');
    }
  }

  render() {

    if(this.state.token === true)

      return (
          <Redirect 
            to={{pathname : '/dashboard', state : { from : "/login", message : "Welcome Dashboard"}}} 
          />
      )
    
    return (
        <form onSubmit={this.handSubmit}>
          <p>Email <input onChange={this.handleChange} type="email" name="email" value={this.state.email} /></p>
          <p>Pass <input onChange={this.handleChange} type="password" name="password" value={this.state.password} /></p>
          <p> <button>Valider</button>  </p>
        </form>
      )
    }
  }
  
  export default Login;
  