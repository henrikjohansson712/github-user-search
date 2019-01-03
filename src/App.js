import React, { Component } from 'react';
import Start from './Start/Start';
import Navbar from './Navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    const config = {
      pageTitle: "Github User Search"
    }
    return (
        <div className="App">
          <Navbar pageTitle={config.pageTitle} />
          <Start />
        </div>
    );
  }
}

export default App;
