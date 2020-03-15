import React, { Component } from 'react';

class Form extends Component{

   handleSubmit = (e) => {
       e.preventDefault();

       this.props.handleSubmit();
   }

  render(){

    return(
      <form onSubmit={this.handleSubmit}>
          {this.props.children}
          <p><button className="btn btn-dark">Ok</button></p>
      </form>
    )
  }
}


export default Form;
