import React from "react";
import { Link } from "react-router-dom";

class Header extends React.PureComponent {
	
	render() {

		const context = this.props;
		const authUser = context;
		console.log(authUser)
		

		return (
			<div>
				<div className="header">
					<div className="bounds">
						<h1 className="header--logo">Courses</h1>
						<nav>
							{authUser ? (
								<React.Fragment>
									<span>
										Welcome {""}
										{authUser.firstName}
									</span>
									<Link to="/signout">Sign out</Link>
								</React.Fragment>
							) : (
								<React.Fragment>
									<Link className="signup" to="/signup">
										SignUp
									</Link>
									<Link className="signin" to="/signin">
										SignIn
									</Link>
								</React.Fragment>
							)}
						</nav>
					</div>
				</div>
			</div>
		);
	}
}
export default Header;
