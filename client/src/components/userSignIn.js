import React from "react";
import { Link } from "react-router-dom";

const UserSignIn = () => {
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
								value=""
							/>
						</div>
						<div>
							<input
								id="password"
								name="password"
								type="password"
								className=""
								placeholder="Password"
								value=""
							/>
						</div>
						<div className="grid-100 pad-bottom">
							<Link className="button" type="submit">
								Sign In
							</Link>
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
					Don't have a user account? <a href="sign-up.html">Click here</a> to
					sign up!
				</p>
			</div>
		</div>
	);
};

export default UserSignIn;
