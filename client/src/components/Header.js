import React, { Component } from 'react';
import { NavLink,Redirect } from 'react-router-dom'
class Header extends Component {
  state = {
    isLoggedIn: false
  }
  onLogout(){
    localStorage.clear();
    window.location.assign("http://localhost:3000/")
  }
  render(){
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={'/about'}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={'/users/'}>Dashboard</NavLink>
        </li >
        <li className="nav-item">
          {localStorage.getItem("name")}
        </li>
        <li className="nav-item">
        <button onClick={this.onLogout} className="btn btn-danger">Logout</button>
        </li>
      </ul>
    </nav>
  }
}

export default Header;