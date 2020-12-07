import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context";

function PrivateRoute({ component: Component, ...rest }) {
	let isAuthenticated = useAuth().authTokens;
	let loggedIn

	if (isAuthenticated === null) {
		loggedIn = false
	} else {
		loggedIn = true
	}

	return (
		<Route
			{...rest}
			render={(props) =>
				loggedIn ? <Component {...props} /> : <Redirect to="/signin" />
			}
		/>
	);
}

export default PrivateRoute;
