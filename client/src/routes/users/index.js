import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import { isLoggedIn } from '../../helpers/authentication';
import Dashboard from '../dashboard';

class Users extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" render={
          (props) => {
            return <Login/>
           } }/>
        <Route path="/signup" render={
          (props) => {
            return <Signup/>
        }} />
        <Route path="" render={
          (props) => {
            if (isLoggedIn()){
              return <Dashboard />
            }
            return <Login />
          }
        }/>
      </Switch>
    );
  }
}

export default Users;
