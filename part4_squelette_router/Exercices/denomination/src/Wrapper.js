import React, { Component } from 'react';

class Wrapper extends Component{

render(){
    const { classes } = this.props;

    return (
        <div className={classes.join(' ')}>
            {this.props.children}
        </div>
    )
}
}

export default Wrapper;