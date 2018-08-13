import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Login extends Component {
  render() {
    return(
      <div>
          <h1 align="center">LOGIN PAGE</h1>
          <br/>
          <br/>
          <div align="center">
            <form method="POST" action="users/login">
              <label>Email : </label>
              <input name="email" type="text"/><br/>
              <label>Password : </label>
              <input name="password" type="password"/><br/>
              <button type="submit">Log In</button>
            </form>
          </div>
      </div>
    );
  }
}

export default Login
