import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignUp = () => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		emailAddress: "",
		password: "",
		confirmPass: "",
		errors: [],
	});

	const submit = () => {
		const { context } = this.props;
		const { firstName, lastName, emailAddress, password } = values;

		// Create user
		const user = {
			firstName,
			lastName,
			emailAddress,
			password,
		};

		context.data
			.createUser(user)
			.then((errors) => {
				if (errors.length) {
					this.setState({ errors });
				} else {
					context.actions.signIn(emailAddress, password).then(() => {
						this.props.history.push("/authenticated");
					});
				}
			})
			.catch((err) => {
				console.log(err);
				this.props.history.push("/error");
			});
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

	return (
		<div className="bounds">
			<div className="grid-33 centered signin">
				<h1>Sign Up</h1>
				<div>
					<form submit={submit}>
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
							<button className="button" type="submit">
								Sign Up
							</button>
							<Link
								className="button button-secondary"
								to="/"
								onclick="event.preventDefault(); location.href='index.html';"
							>
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
