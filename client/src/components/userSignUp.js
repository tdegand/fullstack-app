import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserSignUp extends Component {
	constructor() {
		super();

		this.state = {
			firstName: "",
			lastName: "",
			emailAddress: "",
			password: "",
			confirmPassword: "",
			errors: [],
		};
	}

	handleFirstNameChange = (event) => {
		event.persist();
		this.setState({ firstName: event.target.value });
	};
	handleLastNameChange = (event) => {
		event.persist();
		this.setState({ lastName: event.target.value });
	};
	handleEmailChange = (event) => {
		event.persist();
		this.setState({ emailAddress: event.target.value });
	};
	handlePasswordChange = (event) => {
		event.persist();
		this.setState({ password: event.target.value });
	};
	handleConfirmPasswordChange = (event) => {
		event.persist();
		this.setState({ confirmPassword: event.target.value });
	};

	createUser = () => {
		const { context } = this.props;

		const firstName = this.state.firstName;
		const lastName = this.state.lastName;
		const password = this.state.password;
		const emailAddress = this.state.emailAddress;

		const user = {
			firstName,
			lastName,
			password,
			emailAddress,
		};

		context.data.createUser(user).then((res) => {
			context.actions.signIn(emailAddress, password).then((res) => {
				this.props.history.push("/");
			});
		});
	};

	render() {
		return (
			<div className="bounds">
				<div className="grid-33 centered signin">
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
									// value={values.firstName}
									onChange={this.handleFirstNameChange}
								/>
							</div>
							<div>
								<input
									id="lastName"
									name="lastName"
									type="text"
									className=""
									placeholder="Last Name"
									// value={values.lastName}
									onChange={this.handleLastNameChange}
								/>
							</div>
							<div>
								<input
									id="emailAddress"
									name="emailAddress"
									type="text"
									className=""
									placeholder="Email Address"
									// value={values.emailAddress}
									onChange={this.handleEmailChange}
								/>
							</div>
							<div>
								<input
									id="password"
									name="password"
									type="password"
									className=""
									placeholder="Password"
									// value={values.password}
									onChange={this.handlePasswordChange}
								/>
							</div>
							<div>
								<input
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									className=""
									placeholder="Confirm Password"
									// value={values.confirmPass}
									onChange={this.handleConfirmPasswordChange}
								/>
							</div>
							<div className="grid-100 pad-bottom">
								<Link
									className="button"
									type="submit"
									to="/"
									onClick={this.createUser}
								>
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
	}
}
