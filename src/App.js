import React, { Component } from 'react';
import data from './data.json';
import './App.css';


import { FilterableProductTable } from './components/organism';


class App extends Component {
  
  state = {
    filtered: data,
    products: data,
  }


  render() {
    return (
      <div className="App">
        <FilterableProductTable data={data}/>
      </div>
    );
  }
}

export default App;
