import React, { useState } from "react";
import Header from "./components/header";
import Courses from "./components/courses";
import Coursedetail from "./components/courseDetail";
import CreateCourse from "./components/createCourse";
import UpdateCourse from "./components/updateCourse";
import UserSignIn from "./components/userSignIn";
import UserSignUp from "./components/userSignUp";
import UserSignOut from "./components/userSignOut";
import { AuthContext } from "./authContext";
import { Provider } from "./context";
import PrivateRoute from "./privateRoutes";
import "./global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = (props) => {

	const [globalState, setGlobalState] = useState({
		isLoggedIn: false,
		isError: false,
		userName: "",
		password: "",
	});
	const existingTokens = JSON.parse(localStorage.getItem("tokens"));
	const [authTokens, setAuthTokens] = useState(existingTokens);

	const setTokens = (data) => {
		localStorage.setItem("tokens", JSON.stringify(data));
		setAuthTokens(data);
	}

	return (
		<AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
			<Provider value={{globalState, setGlobalState}}>
				<Router>
					<div id="root">
						<div>
							<Header />
							<Switch>
								<Route exact path="/" component={Courses}></Route>
								<PrivateRoute path="/courses/create" component={() => <CreateCourse />}></PrivateRoute>
								<PrivateRoute path="/courses/:id/update" component={() => <UpdateCourse />}></PrivateRoute>
								<Route path="/courses/:id" component={Coursedetail}></Route>
								<Route path="/signin" component={() => <UserSignIn />}></Route>
								<Route path="/signup" component={() => <UserSignUp />}></Route>
								<Route path="/signout" component={() => <UserSignOut />}></Route>
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		</AuthContext.Provider>
	);
};

export default App;
