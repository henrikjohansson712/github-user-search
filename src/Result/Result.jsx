import React, { Component } from 'react';
import "./Result.css";

class Result extends Component {
  render() { 
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg heading">
            {this.props.userData.login} {this.props.userData.name}
          </div>
          <div className="col follow">
            {this.props.userData.followers}
          </div>
          <div className="col follow">
            {this.props.userData.following}
          </div>
        </div>
        <div className="row">
          <div className="col-lg avatar">
            {this.props.userData.avatar}
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg repos">
            {this.props.userData.reposNum}
            <ul>
              {this.props.reposData}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Result;