import React, { Component } from 'react';

class ListTokens extends Component {

  tokens = () => {
    const { changes } = this.props;

  }

  render() {

    const { changes } = this.props;

    return (
      <>
        <h2>Change(s)</h2>
        <ul>
          {changes.map((change, k) =>(
            <p key={k}>{change}</p>
          ))}
        </ul>
      </>
    )
  }
}

export default ListTokens;