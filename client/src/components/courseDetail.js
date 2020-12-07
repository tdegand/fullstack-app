import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../authContext";
import ReactMarkdown from "react-markdown";

const Coursedetail = () => {
	//Uses a react hook to set and store state
	const [values, setValues] = useState({
		course: [],
		owner: [],
	});

	//Gets the referenced item to look at the details
	useEffect(() => {
		const path = window.location.pathname.split("/");
		const id = path[2];

		axios
			.get(`http://localhost:5000/api/courses/${id}`)
			.then((res) => {
				const course = res.data.course;
				const owner = res.data.course.owner;
				setValues((values) => ({
					...values,
					course: course,
					owner: owner,
				}));
			})
			.catch((res) => console.log("error", res));
	}, []);

	const isAuthenticated = useAuth().authTokens;
	const { authTokens } = useAuth();
	let loggedIn;

	//Checks if a user is signed in
	if (isAuthenticated !== null && authTokens.id === values.owner.id) {
		loggedIn = true;
	} else {
		loggedIn = false;
	}

	//need to add these requirements as well "And the authenticated user's ID matches that of the user who owns the course."
	let buttonStyle = {
		display: "inline-block",
	};

	if (loggedIn === false) {
		buttonStyle = {
			display: "none",
		};
	}

	// sets the options for the axios call
	const options = {
		headers: {
			Authorization: `Basic ${localStorage.getItem("access-token")}`,
		},
	};

	let history = useHistory();

	//Will Delete courses for any signed in user who has access
	const deleteCourse = () => {
		const path = window.location.pathname.split("/");
		const id = path[2];

		axios
			.delete(`http://localhost:5000/api/courses/${id}`, options)
			.then(() => {
				history.push("/");
				window.location.reload();
			});
	};
	return (
		<div>
			<div className="actions--bar">
				<div className="bounds">
					<div className="grid-100">
						<span>
							<Link
								className="button"
								style={buttonStyle}
								to={{ pathname: `/courses/${values.course.id}/update` }}
							>
								Update Course
							</Link>
							<Link
								className="button"
								style={buttonStyle}
								to="/"
								onClick={deleteCourse}
							>
								Delete Course
							</Link>
						</span>
						<Link className="button button-secondary" to="/">
							Return to List
						</Link>
					</div>
				</div>
			</div>
			<div className="bounds course--detail">
				<div className="grid-66">
					<div className="course--header">
						<h4 className="course--label">Course</h4>
						<h3 className="course--title">{values.course.title}</h3>
						<p>{`By ${values.owner.firstName} ${values.owner.lastName}`}</p>
					</div>
					<div className="course--description">
						<ReactMarkdown>{values.course.description}</ReactMarkdown>
					</div>
				</div>
				<div className="grid-25 grid-right">
					<div className="course--stats">
						<ul className="course--stats--list">
							<li className="course--stats--list--item">
								<h4>Estimated Time</h4>
								<h3>{values.course.estimatedTime}</h3>
							</li>
							<li className="course--stats--list--item">
								<h4>Materials Needed</h4>
								<ul>
									<ReactMarkdown>{values.course.materialsNeeded}</ReactMarkdown>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Coursedetail;
