import React, { Component } from 'react';
import './App.css';

import Form from './Form';
import Denomination from './Denomination';
import Input from './Input';
import Wrapper from './Wrapper';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      isSubmit : false,
      number : '',
      error : false
    }
  }

  handleSubmit = () =>{
    if( this.state.number != '' ){
        this.setState({ isSubmit : true , error : false});

        return;
    }

    this.setState({ isSubmit : false, error : true });
  }

  handleChange = (e) =>{
    const { name, value } = e.target;

    if ( isNaN(value)){
        this.setState({error : true,});
        
        return ;
    }

    this.setState({
      [name] : value,
      error : false
    })
  }

  handleClick = ()=>{
    this.setState({isSubmit : false, error : false, number : ''});
  }

  render(){

    if( this.state.isSubmit === false )
        return(
          <>
          { this.state.error && 
            <p>Attention vous devez renter un nombre entier ou votre champ est vide...</p>}
          <Wrapper classes={['container App_main']}>
            <Form handleSubmit={this.handleSubmit}>
              <Wrapper classes={['form-group']}>
                  <Input 
                      name="number"
                      title="Donnez un nombre entier"
                      type="text"
                      handleChange={this.handleChange}
                  />
              </Wrapper>
            </Form>
          </Wrapper>
          </>
        )

      if( this.state.isSubmit === true)
          return(
            <Wrapper classes={['container App_main']}>
              <Denomination number={this.state.number} handleClick={this.handleClick} />
            </Wrapper>
          )
      
    }
}


export default App;
