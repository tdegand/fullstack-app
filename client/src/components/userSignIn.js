import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../context";
import axios from "axios";

const UserSignIn = () => {
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [isError, setIsError] = useState(false);
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const { setAuthTokens } = useAuth();
	const encodedCredentials = btoa(`${userName.userName}:${password.password}`);

	const options = {
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Basic ${encodedCredentials}`,
		},
	};

	const getLogin = () => {
		axios
			.get("http://localhost:5000/api/users", options, {})
			.then((result) => {
				if (result.status === 200) {
					setAuthTokens(result.data);
					setLoggedIn(true);
				} else {
					setIsError(true);
				}
			})
			.catch((e) => {
				setIsError(true);
			});
	};

	if (isLoggedIn) {
		return <Redirect to="/" />;
	}

	const handleUsername = (event) => {
		event.persist();
		setUserName((values) => ({
			...values,
			userName: event.target.value,
		}));
	};

	const handlePassword = (event) => {
		event.persist();
		setPassword((values) => ({
			...values,
			password: event.target.value,
		}));
	};

	return (
		<div className="bounds">
			<div className="grid-33 centered signin">
				<h1>Sign In</h1>
				<div>
					<form>
						<div>
							<input
								id="emailAddress"
								name="emailAddress"
								type="text"
								className=""
								placeholder="Email Address"
								onChange={handleUsername}
							/>
						</div>
						<div>
							<input
								id="password"
								name="password"
								type="password"
								className=""
								placeholder="Password"
								onChange={handlePassword}
							/>
						</div>
						<div className="grid-100 pad-bottom">
							<Link className="button" type="submit" onClick={getLogin} to="/">
								Sign In
							</Link>
							<Link className="button button-secondary" to="/">
								Cancel
							</Link>
						</div>
					</form>
				</div>
				<p>&nbsp;</p>
				<p>
					Don't have a user account? <a href="sign-up.html">Click here</a> to
					sign up!
				</p>
			</div>
		</div>
	);
};

export default UserSignIn;
