import React, { Component } from 'react';

class Input extends Component{

    render(){

        return (
            <>
                <label  >{this.props.title}</label>
                <input 
                    type={this.props.type}
                    onChange={this.props.handleChange}
                    value = {this.props.value}
                    name={this.props.name}
                />
            </>
        )
    }
}

export default Input;