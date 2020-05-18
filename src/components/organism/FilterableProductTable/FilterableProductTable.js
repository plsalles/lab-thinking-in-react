import React, { Component } from 'react';
import './FilterableProductTable.css';

import { ProductTable } from '../../molecules'
import { SearchBar } from '../../molecules'

class FilterableProductTable extends Component {
  


  render() {
    return (
      <div className="FilterableProductTable">
        <SearchBar/>
        <ProductTable data={this.props.data}/>
      </div>
    );
  }
}

export default FilterableProductTable;
