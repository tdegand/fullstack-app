import React from "react";
import { Link } from "react-router-dom";

const UserSignOut = () => {
	//signs user out and resets the local storage
	const signOut = () => {
		localStorage.clear();
		window.location.reload();
	};
	return (
		<Link className="signin" to="/" onClick={signOut}>
			Sign Out
		</Link>
	);
};

export default UserSignOut;
