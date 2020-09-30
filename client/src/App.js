import React, {Component} from 'react';
import Header from './components/header';
import Courses from './components/courses';
import Coursedetail from './components/courseDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './global.css';


class App extends Component{
  

  render() {
    return (
      <Router>
        <div id="root">
          <div>
            <Header />
            <Switch>
              <Route exact path="/">
                <Courses />
              </Route>
              <Route exact path="/courses/:id">
                <Coursedetail />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
  


export default App;
