import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  state = {
    value: '',
  };

  onChange = e => {
      console.log(e.target)
    this.setState({
      value: e.target.value,
    }, () => {
      this.props.filter(this.state.value);
    });
  }

  render() {
    const { placeholder, type, name } = this.props;
    
    return (
        <>
            <label>{name}</label>
            <input placeholder={placeholder} type={type} value={this.state.value} name={name} onChange={(e) => this.onChange(e)}></input>
        </>
    );
  }
}

export default Input;