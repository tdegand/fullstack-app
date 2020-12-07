import React from "react";
import UserSignOut from "../components/userSignOut";
import { useAuth } from "../authContext";

const SignedInLinks = () => {
	const { authTokens } = useAuth();

	return (
		<React.Fragment>
			<span>Hello {authTokens.firstName}!</span>
			<UserSignOut />
		</React.Fragment>
	);
};

export default SignedInLinks;
