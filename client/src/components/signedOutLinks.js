import React from "react";
import { Link } from "react-router-dom";

const SignedOutLinks = () => {

	return (
		<React.Fragment>
            <Link className="signup" to="/signup">
                Sign Up
            </Link>
            <Link className="signin" to="/signin">
                Sign In
            </Link>
        </React.Fragment>
	);
};

export default SignedOutLinks;