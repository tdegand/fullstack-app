import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "../form";

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

	//handles input elements and updates state
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

	//creates a user and submits the data to a databse using the context data createUser
	//then it signs the created user into the site
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

		context.data
			.createUser(user)
			.then((errors) => {
				if (errors.length) {
					this.setState({ errors });
				} else {
					context.actions.signIn(emailAddress, password).then((res) => {
						this.props.history.push("/");
					});
				}
			})
			.catch((errors) => {
				console.log(errors);
			});
	};

	cancel = () => {
		this.props.history.push("/");
	};

	render() {
		return (
			<div className="bounds">
				<div className="grid-33 centered signin">
					<h1>Sign Up</h1>
					<Form
						cancel={this.cancel}
						errors={this.state.errors}
						submit={this.createUser}
						submitButtonText="Sign Up"
						elements={() => (
							<React.Fragment>
								<div>
									<input
										id="firstName"
										name="firstName"
										type="text"
										className=""
										placeholder="First Name"
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
										onChange={this.handleConfirmPasswordChange}
									/>
								</div>
							</React.Fragment>
						)}
					/>
					<p>
						Already have a user account?
						<Link to="/signin">Click here</Link> to sign in!
					</p>
				</div>
			</div>
		);
	}
}
