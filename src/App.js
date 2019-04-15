import React, { Component } from 'react';
import logo from './silcon-systems-logo.png';
import './App.css';

// const phoneNumber = "02887723861";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Our new site is under construction. In the mean time...
          </p>
          <div id="contact">
            <h3>
              <a href="mailto:silcon@btconnect">email us</a> | <a href="tel:+442887723861" > call us </a>
            </h3>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
