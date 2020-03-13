import React, { Component } from 'react';
import './App.css';
import Denomination from './Denomination';

const TOKENS = [200, 100, 50, 20, 10, 5, 1] ;

class App extends Component{

  render(){

    return (
      <>
      <h2>Dénomination</h2>
        <Denomination tokens={TOKENS} />
      </>
    )
  }
}

export default App;