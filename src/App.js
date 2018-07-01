import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Mark<span className="small-amp">&</span>Rhiannon
          </h1>
          <h3>Are Getting</h3>
          <h1>Married</h1>
        </header>
        <div className="App-intro">
          <p>7th September</p>
          <p>2019</p>
        </div>
      </div>
    );
  }
}

export default App;
