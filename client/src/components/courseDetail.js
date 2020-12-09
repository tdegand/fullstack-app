import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import axios from "axios";

class Coursedetail extends React.PureComponent {
	constructor() {
		super();

		this.state = {
			course: [],
			owner: [],
		};
	}

	componentDidMount() {
		this.getCourseDetails();
	}
	//gets course details when you click on the course you want to view
	getCourseDetails = () => {
		const path = window.location.pathname.split("/");
		const id = path[2];
		axios
			.get(`http://localhost:5000/api/courses/${id}`)
			.then((res) => {
				const course = res.data.course;
				const owner = res.data.course.owner;
				this.setState({ course });
				this.setState({ owner });
			})
			.catch((res) => console.log("error", res));
	};

	//This will delete the course Using the context method "deleteCourse" from data.js
	deleteCourse = () => {
		const { context } = this.props;
		const username = context.authenticatedUser.emailAddress;
		const password = context.authenticatedUser.password;
		const id = this.state.course.id;

		context.data
			.deleteCourse(id, username, password)
			.then((res) => (window.location.href = "/"));
	};

	render() {
		const { context } = this.props;
		const authUser = context.authenticatedUser;

		return (
			<div>
				<div className="actions--bar">
					<div className="bounds">
						<div className="grid-100">
							<span>
								{authUser && authUser.id === this.state.owner.id ? (
									<React.Fragment>
										<Link
											className="button"
											to={{
												pathname: `/courses/${this.state.course.id}/update`,
											}}
										>
											Update Course
										</Link>
										<Link className="button" to="/" onClick={this.deleteCourse}>
											Delete Course
										</Link>
										<Link className="button button-secondary" to="/">
											Return to List
										</Link>
									</React.Fragment>
								) : (
									<React.Fragment>
										<Link className="button button-secondary" to="/">
											Return to List
										</Link>
									</React.Fragment>
								)}
							</span>
						</div>
					</div>
				</div>
				<div className="bounds course--detail">
					<div className="grid-66">
						<div className="course--header">
							<h4 className="course--label">Course</h4>
							<h3 className="course--title">{this.state.course.title}</h3>
							<p>{`By ${this.state.owner.firstName} ${this.state.owner.lastName}`}</p>
						</div>
						<div className="course--description">
							<ReactMarkdown>{this.state.course.description}</ReactMarkdown>
						</div>
					</div>
					<div className="grid-25 grid-right">
						<div className="course--stats">
							<ul className="course--stats--list">
								<li className="course--stats--list--item">
									<h4>Estimated Time</h4>
									<h3>{this.state.course.estimatedTime}</h3>
								</li>
								<li className="course--stats--list--item">
									<h4>Materials Needed</h4>
									<ul>
										<ReactMarkdown>
											{this.state.course.materialsNeeded}
										</ReactMarkdown>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Coursedetail;
