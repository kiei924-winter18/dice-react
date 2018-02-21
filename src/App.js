import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    // Sets the initial state object
    this.state = {
      die1: 3,
      die2: 4
    }
  }

  rollTheDice() {
    // Changes the state object when the "roll" is clicked
    this.setState({
      die1: Math.floor(Math.random()*6+1),
      die2: Math.floor(Math.random()*6+1)
    })
  }

  render() {
    let die1Image = "http://golearntocode.com/images/dice/" + this.state.die1 + ".png";
    let die2Image = "http://golearntocode.com/images/dice/" + this.state.die2 + ".png";
    return (
      <div className="App">
        <h1>
          <img src={die1Image} />
          <img src={die2Image} />
        </h1>
        <p><a href="#" onClick={() => this.rollTheDice()}>Roll</a></p>
      </div>
    );
  }
}

export default App;
