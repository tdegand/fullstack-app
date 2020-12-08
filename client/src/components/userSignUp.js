import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const UserSignUp = () => {
	
	// const handleFirstNameChange = (event) => {
	// 	event.persist();
	// 	setValues((values) => ({
	// 		...values,
	// 		firstName: event.target.value,
	// 	}));
	// };
	// const handleLastNameChange = (event) => {
	// 	event.persist();
	// 	setValues((values) => ({
	// 		...values,
	// 		lastName: event.target.value,
	// 	}));
	// };
	// const handleEmailChange = (event) => {
	// 	event.persist();
	// 	setValues((values) => ({
	// 		...values,
	// 		emailAddress: event.target.value,
	// 	}));
	// };
	// const handlePasswordChange = (event) => {
	// 	event.persist();
	// 	setValues((values) => ({
	// 		...values,
	// 		password: event.target.value,
	// 	}));
	// };
	// const handleConfirmPasswordChange = (event) => {
	// 	event.persist();
	// 	setValues((values) => ({
	// 		...values,
	// 		confirmPass: event.target.value,
	// 	}));
	// };
	return (
		<div className="bounds">
			<div className="grid-33 centered signin">
				{/* <div id="errors" style={validationErrors}>
					<h2 className="validation--errors--label">Validation errors</h2>
					<div className="validation-errors">
						<ul>
							<li>{values.errors[0]}</li>
							<li>{values.errors[1]}</li>
							<li>{values.errors[2]}</li>
							<li>{values.errors[3]}</li>
							<li>{values.errors[4]}</li>
						</ul>
					</div>
				</div> */}
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
								// onChange={handleFirstNameChange}
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
								// onChange={handleLastNameChange}
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
								// onChange={handleEmailChange}
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
								// onChange={handlePasswordChange}
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
								// onChange={handleConfirmPasswordChange}
							/>
						</div>
						<div className="grid-100 pad-bottom">
							<Link className="button" type="submit" to="/" onClick={(e) => {
								e.preventDefault()
							}}>Sign Up
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
