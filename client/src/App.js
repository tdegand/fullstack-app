import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Courses from "./components/courses";
import Coursedetail from "./components/courseDetail";
import CreateCourse from "./components/createCourse";
import UpdateCourse from "./components/updateCourse";
import UserSignIn from "./components/userSignIn";
import UserSignUp from "./components/userSignUp";
import UserSignOut from "./components/userSignOut";
import "./global.css";

import withContext from "./context";
import PrivateRoute from "./privateRoutes";

const HeaderWithContext = withContext(Header);
const CourseWithContext = withContext(Courses);
const CoursedetailWithContext = withContext(Coursedetail);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);

const App = () => {
	return (
		<Router>
			<div id="root">
				<div>
					<HeaderWithContext />
					<Switch>
						<Route exact path="/" component={CourseWithContext}></Route>
						<Route path="/signup" component={UserSignUpWithContext}></Route>
						<Route path="/signin" component={UserSignInWithContext}></Route>
						<Route path="/signout" component={UserSignOutWithContext}></Route>
						<PrivateRoute
							path="/courses/create"
							component={CreateCourseWithContext}
						></PrivateRoute>
						<PrivateRoute
							path="/courses/:id/update"
							component={UpdateCourseWithContext}
						></PrivateRoute>
						<Route
							path="/courses/:id"
							component={CoursedetailWithContext}
						></Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
