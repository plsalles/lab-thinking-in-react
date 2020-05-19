import React, { Component } from 'react';
import data from './data.json';
import './App.css';


import { FilterableProductTable } from './components/organism';


class App extends Component {
  
  state = {
    filtered: data.data,
    products: data.data,
  }

  filterProducts = (searchValue) => {
    const filteredProducts = this.state.products.filter(product => (
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    ));
    this.setState({ filtered: filteredProducts })
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable data={this.state.filtered} filter={this.filterProducts}/>
      </div>
    );
  }
}

export default App;
