import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import Dashboard from '../dashboard'

class Users extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" render={
          (props) => {
            const isLoggedin = localStorage.getItem("token");
            if(isLoggedin){
              return <Dashboard />
            } else {
              return <Login />
            }
          }
        }/>
      </Switch>
    );
  }
}
export default Users;
