import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../authContext";
import SignedInLinks from "../components/signedInLinks";
import SignedOutLinks from "../components/signedOutLinks";

const Header = () => {
	let isAuthenticated = useAuth().authTokens;
	let loggedIn;

	//Checks for signed in user to dynamically render the links in the header
	if (isAuthenticated === null) {
		loggedIn = false;
	} else {
		loggedIn = true;
	}

	return (
		<div className="header">
			<div className="bounds">
				<Link to="/">
					<h1 className="header--logo">Courses</h1>
				</Link>
				<nav>{!loggedIn ? <SignedOutLinks /> : <SignedInLinks />}</nav>
			</div>
		</div>
	);
};

export default Header;
