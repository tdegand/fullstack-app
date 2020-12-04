import React, { Component, useState } from "react";
import Header from "./components/header";
import Courses from "./components/courses";
import Coursedetail from "./components/courseDetail";
import CreateCourse from "./components/createCourse";
import UpdateCourse from "./components/updateCourse";
import UserSignIn from "./components/userSignIn";
import UserSignUp from "./components/userSignUp";
import UserSignOut from "./components/userSignOut";
import "./global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";

const App = () => {

  const [values, setValues] = useState({
    //use stored authenticated user from cookie or set it to null
		authenticatedUser: ""
	});

  //signIn method is going to need some work here to authenticate and retrun the ser and then store it in a cookie
	const signIn = (emailAddress, password) => {
    Axios.get('http://localhost:5000/api/users')
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
  };
  signIn("tylerdegand@gmail.com", "password")

	return (
		<Router>
			<div id="root">
				<div>
					<Header />
					<Switch>
						<Route exact path="/" component={Courses}></Route>
						<Route path="/courses/create" component={CreateCourse}></Route>
						<Route path="/courses/:id/update" component={UpdateCourse}></Route>
						<Route path="/courses/:id" component={Coursedetail}></Route>
						<Route path="/signin" component={UserSignIn}></Route>
						<Route path="/signup" component={UserSignUp}></Route>
						<Route path="/signout" component={UserSignOut}></Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
