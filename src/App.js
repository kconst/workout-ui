import React, { Component } from 'react';
import BarbellWeights from './BarbellWeights.js';
import PlatesSelect from './PlatesSelect.js';
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
        <h2>Weight by Plates</h2>
      
        <PlatesSelect useImperial={ false }/>
        
        <hr/>
        
        <h2>Weight by Total</h2>
        
        <input placeholder="total weight" onChange={ e => this.setState({weight: parseFloat(e.currentTarget.value) }) }></input>
        
        <BarbellWeights useImperial={ false } weight={ this.state.weight }/>
      </div>
    );
  }
}

export default App; 
