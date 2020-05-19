import React, { Component } from 'react';
import './FilterableProductTable.css';

import { ProductTable } from '../../molecules'
import { SearchBar } from '../../molecules'

class FilterableProductTable extends Component {
  
  state = {
    stockOnly: false,
  }

  updateStockProperty = () => {
    console.log('chamou')
    this.setState({
      stockOnly: !this.state.stockOnly
    })
  }

  render() {
    console.log(this.props.data)
    return (
      <div className="FilterableProductTable">
        <SearchBar filter={this.props.filter} stockOnlyState={this.state.stockOnly} checkboxValue={this.state.stockOnly} method={this.updateStockProperty}/>
        <ProductTable data={this.props.data} stockOnly={this.state.stockOnly}/>
      </div>
    );
  }
}

export default FilterableProductTable;
