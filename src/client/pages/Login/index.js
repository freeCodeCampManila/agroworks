import React from 'react';
import { Link } from 'react-router-dom';
import { User, Lock } from 'react-feather';

const Login = () => (
  <div className="login-wrapper">
    <div className="o-box-container login-wrapper--container">
      <h1>Welcome</h1>
      <div className="input-field">
        <User className="fa" />
        <input type="email" id="email" />
      </div>
      <div className="input-field">
        <Lock className="fa" />
        <input type="password" id="password" />
      </div>
      <Link to="/dashboard" className="btn">
        Log in
      </Link>
    </div>
  </div>
);

export default Login;
