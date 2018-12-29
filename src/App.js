import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Start from './Start/Start';

class App extends Component {
  render() {
    const config = {
      pageTitle: "Github User Search"
    }
    return (
      <div className="App align-middle">
        <Navbar pageTitle={config.pageTitle} />
        <Start />
      </div>
    );
  }
}

export default App;
