import React, { Component } from 'react';
import './SearchBar.css';

import { Input } from '../../atom';
import { CheckBox } from '../../atom';

class SearchBar extends Component {
  
  render() {
    return (
      <div className="SearchBar">
        <Input placeholder="" name="Search" type="text" filter={this.props.filter}/>
        <CheckBox placeholder="" name="Only show products in stock" type="checkbox" method={this.props.method} checkboxValue={this.props.checkboxValue}/>
      </div>
    );
  }
}

export default SearchBar;
