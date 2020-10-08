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
} from "react-router-dom";
import withContext from './context';

import './global.css';

const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);


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
              <Route exact path="/courses/create">
                <CreateCourse />
              </Route>
              <Route path="/courses/:id/update">
                <UpdateCourse />
              </Route>
              <Route path="/signin" component={UserSignInWithContext}></Route>
              <Route path="/signup" component={UserSignUpWithContext}></Route>
              <Route path="/signout" component={UserSignOutWithContext}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
  


export default App;
