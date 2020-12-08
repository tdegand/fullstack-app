import React from "react";
import UserSignOut from "../components/userSignOut";

const SignedInLinks = () => {
	// const { authTokens } = useAuth();

	return (
		<React.Fragment>
			{/* <span>Hello {authTokens.firstName}!</span> */}
			<UserSignOut />
		</React.Fragment>
	);
};

export default SignedInLinks;
