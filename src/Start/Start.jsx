import React, { Component } from 'react';
import './Start.css';
import Result from '../Result/Result';

class Start extends Component {
  constructor() {
    super();
    this.getData = this.getData.bind(this);
  }

  state = {
    user: {},
    repos: []
  };

  getData(event) {
    event.preventDefault();
    const name = this.refs.name.value;
    fetch(`https://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => {
        if (data.name) {
          this.setState({
            user: {
              login: <h1 className="login">{data.login}</h1>,
              name: <h5 className="name">({data.name})</h5>,
              avatar: <img className="shadow" src={data.avatar_url} alt="User avatar" />,
              followers: <p>Followers: {data.followers}</p>,
              following: <p>Following: {data.following}</p>,
              reposNum: <h4>Public repos: <span class="badge badge-pill badge-primary">{data.public_repos}</span></h4>
            }
          })
        } else {
          this.setState({
            user: {
              login: <h1 className="login">{data.login}</h1>,
              avatar: <img className="shadow" src={data.avatar_url} alt="User avatar" />,
              followers: <p>Followers: {data.followers}</p>,
              following: <p>Following: {data.following}</p>,
              reposNum: <h4 className="repos">Public repos: <span class="badge badge-pill badge-primary">{data.public_repos}</span></h4>
            }
          })
        }
      });
      fetch(`https://api.github.com/users/${name}/repos`)
      .then(response => response.json())
      .then(data => {
        let foundRepos = [];
        data.forEach(repo => 
          foundRepos.push(<li>{repo.name}</li>)
          );
        this.setState({
          repos: foundRepos
        })
      })
    this.refs.name.value = "";
  }

  render() { 
    return (
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg"></div>
          <div className="col-md">
            <form className="form-inline" onSubmit={this.getData}>
              <div className="input-group mb-3">
                <input className="form-control" type="search" placeholder="Enter username" aria-label="Search" ref="name" />
                <div className="input-group-append">
                  <button className="btn btn-outline-primary" type="submit"><i className="fas fa-search" id="btn-search"></i></button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg"></div>
        </div>
        <Result userData={this.state.user} reposData={this.state.repos} />
      </div>
    );
  }
}
 
export default Start;