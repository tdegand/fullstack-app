import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Error from "./error";

const UserSignUp = () => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		emailAddress: "",
		password: "",
		confirmPass: "",
		errors: {}
	});

	const user = {
		firstName: values.firstName,
		lastName: values.lastName,
		emailAddress: values.emailAddress,
		password: values.password,
	};

	let history = useHistory();

	const submit = () => {
		if (values.password === values.confirmPass) {
			axios
				.post("http://localhost:5000/api/users", user)
				.then(res => {
					console.log(res.data);
					history.push("/signin");
					localStorage.setItem("Errors", null)
				})
				.catch(err => {
					values.errors = err.response.data.errors;
					localStorage.setItem("Errors", values.errors)
				})
		}
	};

	const handleFirstNameChange = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			firstName: event.target.value,
		}));
	};
	const handleLastNameChange = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			lastName: event.target.value,
		}));
	};
	const handleEmailChange = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			emailAddress: event.target.value,
		}));
	};
	const handlePasswordChange = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			password: event.target.value,
		}));
	};
	const handleConfirmPasswordChange = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			confirmPass: event.target.value,
		}));
	};

	let errors

	if(localStorage.Errors !== null) {
		errors = <Error />
	}

	return (
		<div className="bounds">
			<div className="grid-33 centered signin">
				{errors}
				<h1>Sign Up</h1>
				<div>
					<form>
						<div>
							<input
								id="firstName"
								name="firstName"
								type="text"
								className=""
								placeholder="First Name"
								value={values.firstName}
								onChange={handleFirstNameChange}
							/>
						</div>
						<div>
							<input
								id="lastName"
								name="lastName"
								type="text"
								className=""
								placeholder="Last Name"
								value={values.lastName}
								onChange={handleLastNameChange}
							/>
						</div>
						<div>
							<input
								id="emailAddress"
								name="emailAddress"
								type="text"
								className=""
								placeholder="Email Address"
								value={values.emailAddress}
								onChange={handleEmailChange}
							/>
						</div>
						<div>
							<input
								id="password"
								name="password"
								type="password"
								className=""
								placeholder="Password"
								value={values.password}
								onChange={handlePasswordChange}
							/>
						</div>
						<div>
							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								className=""
								placeholder="Confirm Password"
								value={values.confirmPass}
								onChange={handleConfirmPasswordChange}
							/>
						</div>
						<div className="grid-100 pad-bottom">
							<Link className="button" type="submit" onClick={submit}>
								Sign Up
							</Link>
							<Link className="button button-secondary" to="/">
								Cancel
							</Link>
						</div>
					</form>
				</div>
				<p>&nbsp;</p>
				<p>
					Already have a user account? <Link to="/signin">Click here</Link> to
					sign in!
				</p>
			</div>
		</div>
	);
};

export default UserSignUp;
