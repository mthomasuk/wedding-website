import React, { Component } from "react";
import Form from "./components/form/Form";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Mark<span className="span-small-amp">&</span>Rhiannon
          </h1>
          <h3>Are Getting</h3>
          <h1>Married</h1>
        </header>
        <div className="App-intro">
          <p className="p-date">
            7th September<br />2019
          </p>
          <p>We'd love to have you there!</p>
          <p>
            Just enter your postal address below and we'll send you an
            invitation...
          </p>
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
