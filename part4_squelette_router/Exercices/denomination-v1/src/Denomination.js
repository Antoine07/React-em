import React, { Component } from 'react';

class Denomination extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      message: ''
    }
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      amount: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { amount } = this.state;

    if ( isNaN(parseInt(amount)) === true ) {

      this.setState({
        message : `Ce que vous avez saisi n'est pas un nombre`
      })

      return;
    }

    this.setState({
      message : '',
      amount : ''
    })

  }

  render() {

    const { amount, message } = this.state;

    return (
      <>
      { message && <p>{message}</p> }
      <form onSubmit={this.handleSubmit} >
        <p>
          <input
            type="text"
            value={amount}
            onChange={this.handleChange}
          />
        </p>
        <p><button type="submit" >Ok</button></p>
      </form>
      </>
    )
  }
}

export default Denomination;
