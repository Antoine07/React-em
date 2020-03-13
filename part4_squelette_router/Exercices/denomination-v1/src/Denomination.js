import React, { Component } from 'react';

import ListTokens from './ListTokens';

class Denomination extends Component {

  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      message: '',
      changes: []
    }
  }

  handleChange = (e) => {
    const { value } = e.target;

    this.setState({
      amount: value,
      changes : []
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { amount } = this.state;

    if ( isNaN(parseInt(amount)) === true ) {

      this.setState({
        message: `Ce que vous avez saisi n'est pas un nombre`
      })

      return;
    }

    const { tokens } = this.props;
    
    let change = amount;

    for (let i = 0; i < tokens.length; i++) {

      while ( (change - tokens[i]) >= 0) {

        this.state.changes.push(tokens[i]);
        this.setState({ changes : this.state.changes });

        change = change - tokens[i];
      }
      
    }

    this.setState({
      message: '',
      amount: '',
    });

  }

  render() {

    const { amount, message, changes } = this.state;

    return (
      <>
        {message && <p>{message}</p>}
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
        { changes.length > 0 ? <ListTokens changes={changes} /> : null
        }
      </>
    );
  }
}

export default Denomination;