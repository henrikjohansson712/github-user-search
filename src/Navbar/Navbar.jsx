import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
  render() { 
    return (
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" href="#">
          <i className="fab fa-github fa-2x align-middle"></i>
          {this.props.pageTitle}
        </span>
      </nav>
    );
  }
}
 
export default Navbar;