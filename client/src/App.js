import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';

import Landing from './views/landing'
import Login from './views/login'
import NotFound from './views/notFound'

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <main>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
