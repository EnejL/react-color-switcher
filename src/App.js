import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
      return (
          <div className="react-root">
              <div className="centered">
                  <h1>Colour picker</h1>
                  <button className="red">red</button>
                  <button className="blue">blue</button>
                  <button className="yellow">yellow</button>
              </div>
          </div>
    );
  }
}

export default App;
