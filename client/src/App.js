import React, {Component} from 'react';
import Header from './components/header';
import Courses from './components/courses';
import Coursedetail from './components/courseDetail';
import CreateCourse from './components/createCourse';
import UpdateCourse from './components/updateCourse';
import UserSignIn from './components/userSignIn';
import UserSignUp from './components/userSignUp';
import UserSignOut from './components/userSignOut';
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
              <Route path="/courses/:id">
                <Coursedetail />
              </Route>
              <Route path="/courses/create">
                <CreateCourse />
              </Route>
              <Route path="/courses/:id/update">
                <UpdateCourse />
              </Route>
              <Route path="/signin">
                <UserSignIn />
              </Route>
              <Route path="/signup">
                <UserSignUp />
              </Route>
              <Route path="/signout">
                <UserSignOut />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
  


export default App;
