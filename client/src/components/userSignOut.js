import React, { Component } from "react";
import { useAuth } from "../context";
import { Link } from "react-router-dom";

const UserSignOut = (props) => {

	const { setAuthTokens } = useAuth();

	const signOut = () => {
		setAuthTokens();
	};
	return <Link className="signin" onClick={signOut}>Sign Out</Link>;
};

export default UserSignOut;
