import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Users from './routes/users/index';
import Landing from './views/landing'
import Login from './views/login'
import NotFound from './views/notFound'
import Signup from "./views/signup";

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <main>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/users" component={Users} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
