import React from 'react';
import { User, Lock } from 'react-feather';

const Login = () => (
  <div className="login-wrapper">
    <div className="o-box-container login-wrapper--container">
      <form action="">
        <h1>Welcome</h1>
        <div className="input-field">
          <User className="fa" />
          <input type="email" id="email" />
        </div>
        <div className="input-field">
          <Lock className="fa" />
          <input type="password" id="password" />
        </div>
        <button type="submit" className="btn">
          Log in
        </button>
      </form>
    </div>
  </div>
);

export default Login;
