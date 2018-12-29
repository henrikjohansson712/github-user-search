import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
  render() { 
    return (
      <nav class="navbar fixed-top navbar-dark bg-dark">
    <span class="navbar-brand">
      <i class="fab fa-github"></i>
      {this.props.pageTitle}
    </span>
  </nav>
    );
  }
}
 
export default Navbar;