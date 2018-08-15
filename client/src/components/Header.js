import React, { Component } from 'react';
import { NavLink,Redirect } from 'react-router-dom'
class Header extends Component {
  state = {
    isLoggedIn: false
  }
  onLogout(){
    console.log('logout btn clicked');
    localStorage.clear();
    window.location.assign("http://localhost:8882/")
  }

  render(){
    console.log("header component");
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={'/about'}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to={'/users/'}>Dashboard</NavLink>
        </li>
       {localStorage.getItem('token') ? 
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link">{localStorage.getItem("name")}</a>
        </li>
        <li className="nav-item">
          <button onClick={this.logout} className="btn btn-warning">Logout</button>
        </li>
      </ul>  : null }

      </ul>
    </nav>
  }
}

const LogoutBtn = (props) => {
  return <div>
  <button onClick={this.onLogout} className="btn btn-danger">Logout</button>  
  </div>
}

const DisplayName = (props) => {
  return <div>
  <h4>{localStorage.getItem("name")}</h4>
  </div>
}


export default Header;