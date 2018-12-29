import React, { Component } from 'react';
import './Start.css';

class Start extends Component {
  render() { 
    return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col"></div>
        <div className="col">
          <form className="form-inline">
            <div className="input-group mb-3">
              <input className="form-control" name="searchword" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-outline-primary" type="submit"><i className="fas fa-search" id="btn-search"></i></button>
              </div>
            </div>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
    );
  }
}
 
export default Start;