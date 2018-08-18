import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import { isLoggedIn } from '../../helpers/authentication';
import Dashboard from '../dashboard';

class Users extends Component {
  render() {
    return (
      <Switch>
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
