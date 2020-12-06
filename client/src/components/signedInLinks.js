import React from "react";
import UserSignOut from "../components/userSignOut"

const signedInLinks = () => {

	return (
		<React.Fragment>
            <span>Hello User!</span>
            <UserSignOut />
        </React.Fragment>
	);
};

export default signedInLinks;