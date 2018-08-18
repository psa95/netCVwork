import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Users from './routes/users/index';
import Landing from './views/landing';
import NotFound from './views/notFound';
import Signup from './routes/users/signup';

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <main>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/users" component={Users} />
              <Route path="/signup" component={Signup} />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
