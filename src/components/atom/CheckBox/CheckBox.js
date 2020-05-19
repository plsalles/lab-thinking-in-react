import React, { Component } from 'react';
import './CheckBox.css';

class Checkbox extends Component {
  
  
  render() {
    const { placeholder, type, name } = this.props;
    
    return (
        <>
            <input placeholder={placeholder} type={type} value={this.props.checkboxValue} name={name} onClick={this.props.method}></input>
            <label>{name}</label>
        </>
    );
  }
}

export default Checkbox;