import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class UserSignIn extends Component {
	constructor() {
		super();

		this.state = {
			emailAddress: "",
			password: "",
			errors: [],
		};
	}

	//handles input fields and updates state
	handleEmailChange = (event) => {
		event.persist();
		this.setState({ emailAddress: event.target.value });
	};
	handlePasswordChange = (event) => {
		event.persist();
		this.setState({ password: event.target.value });
	};

	//handles the sign in function and calls the context method signin to authenticate a user
	signIn = () => {
		const { context } = this.props;

		context.actions
			.signIn(this.state.emailAddress, this.state.password)
			.then((res) => {
				this.props.history.push("/");
			});
	};

	render() {
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
							<div className="grid-100 pad-bottom">
								<Link
									className="button"
									type="submit"
									to="/"
									onClick={this.signIn}
								>
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
						Don't have a user account? <Link to="/signUp">Click here</Link> to
						sign up!
					</p>
				</div>
			</div>
		);
	}
}
