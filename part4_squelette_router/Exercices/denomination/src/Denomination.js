import React, { Component } from 'react';


const denominations = [200, 100, 50, 20, 10, 5, 1];

class Denomination extends Component{


  calcul = (number) =>{
    let count = 0;
    let result = [];

    for(const d of denominations){
      if (number === 0) 
        break;
      
      while( number > d ){
        number -= d ;
        count++;
      }

      if(count > 0)
        result.push({ 'denomination' : d, 'count' : count })
      
      count = 0;
    }

    return result;
  }

  render(){

    const tokens = this.calcul(this.props.number);

      return(
        <>
        <h2>Dénomination pour votre token : {this.props.number }</h2>
        {tokens.map((token, i) =>(
            <p className="lead" key={i}>Token : {token.denomination} unité(s) {token.count}</p>
        ))}
        <p><button className="btn btn-dark" onClick={this.props.handleClick}>Un autre nombre ?</button></p>
        </>
      )
    
  }
}

export default Denomination;
