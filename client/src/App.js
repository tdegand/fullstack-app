import React, { Component } from "react";
import Header from "./components/header";
import Courses from "./components/courses";
import Coursedetail from "./components/courseDetail";
import CreateCourse from "./components/createCourse";
import UpdateCourse from "./components/updateCourse";
import UserSignIn from "./components/userSignIn";
import UserSignUp from "./components/userSignUp";
import UserSignOut from "./components/userSignOut";
import withContext from "./context";
import "./global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);

class App extends Component {
	render() {
		return (
			<Router>
				<div id="root">
					<div>
						<Header />
						<Switch>
							<Route exact path="/" component={Courses}></Route>
              <Route path="/courses/create" component={CreateCourse}></Route>
							<Route path="/courses/:id"component={Coursedetail}></Route>
							<Route path="/courses/:id/update" component={UpdateCourse}></Route>
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
