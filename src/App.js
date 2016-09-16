import React, { Component } from 'react';
import BarbellWeights from './BarbellWeights.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context) {
        super(props, context);
        this.state = {
          weight: 0
        }
    }
  
  render() {
    return (
      <div className="App">
        <input placeholder="total weight" onChange={ e => this.setState({weight: parseFloat(e.currentTarget.value) }) }></input>
        
        <BarbellWeights useImperial={ false } weight={ this.state.weight }/>
      </div>
    );
  }
}

export default App; 
