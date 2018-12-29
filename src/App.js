import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';

class App extends Component {
  render() {
    const config = {
      pageTitle: "Github User Search"
    }
    return (
      <div className="App">
        <Navbar pageTitle={config.pageTitle} />
      </div>
    );
  }
}

export default App;
