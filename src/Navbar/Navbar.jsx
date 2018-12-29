import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
  render() { 
    return (
      <nav className="navbar fixed-top navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      <i className="fab fa-github fa-2x align-middle"></i>
      {this.props.pageTitle}
    </a>
  </nav>
    );
  }
}
 
export default Navbar;