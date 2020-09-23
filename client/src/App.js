import React, {Component, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Coursedetail from './components/courseDetail'
import './global.css';
import Header from './components/home';
import Courses from './components/courses';

class App extends Component{

  render() {
    return (
      <Router>
        <div id="root">
          <div>
            <Header />
            <Switch>
              <Route path="/">
                <Courses />
              </Route>
              <Route path="/courses/:id">
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
