// import React from "react";
// import { Link, useHistory } from "react-router-dom";
// import { Consumer } from "../context";

// const UserSignIn = () => {
	
// 	return (
// 		<Consumer>
// 			{(context) => {
// 				// console.log(context);
// 				// const handleUsername = (event) => {
// 				// 	// event.persist();
// 				// 	setGlobalState((values) => ({
// 				// 		...values,
// 				// 		userName: event.target.value,
// 				// 	}));
// 				// };

// 				// const handlePassword = (event) => {
// 				// 	event.persist();
// 				// 	setGlobalState((values) => ({
// 				// 		...values,
// 				// 		password: event.target.value,
// 				// 	}));
// 				// };
// 				return (
// 					<div className="bounds">
// 						<div className="grid-33 centered signin">
// 							<h1>Sign In</h1>
// 							<div>
// 								<form>
// 									<div>
// 										<input
// 											id="emailAddress"
// 											name="emailAddress"
// 											type="text"
// 											className=""
// 											placeholder="Email Address"
// 											// onChange={handleUsername}
// 										/>
// 									</div>
// 									<div>
// 										<input
// 											id="password"
// 											name="password"
// 											type="password"
// 											className=""
// 											placeholder="Password"
// 											// onChange={handlePassword}
// 										/>
// 									</div>
// 									<div className="grid-100 pad-bottom">
// 										<Link
// 											className="button"
// 											type="submit"
// 											to="/"
// 											onClick={(e) => {
// 												e.preventDefault();
// 											}}
// 										>
// 											Sign In
// 										</Link>
// 										<Link className="button button-secondary" to="/">
// 											Cancel
// 										</Link>
// 									</div>
// 								</form>
// 							</div>
// 							<p>&nbsp;</p>
// 							<p>
// 								Don't have a user account? <a href="sign-up.html">Click here</a>{" "}
// 								to sign up!
// 							</p>
// 						</div>
// 					</div>
// 				);
// 			}}
// 		</Consumer>
// 	);
// };

// export default UserSignIn;
