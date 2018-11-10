import React, { Component } from 'react';
import ReactImage from './react.png';
import './styles/main.scss';

import Login from './pages/login';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        <Login />
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
