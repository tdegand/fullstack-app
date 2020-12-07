import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context";

const UpdateCourse = () => {
	//Uses a react hook to set and store state
	const [values, setValues] = useState({
		title: "",
		description: "",
		time: "",
		materials: "",
		errors: []
	});

	const handleTitle = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			title: event.target.value,
		}));
	};
	const handleDescription = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			description: event.target.value,
		}));
	};
	const handleTime = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			time: event.target.value,
		}));
	};
	const handleMaterials = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			materials: event.target.value,
		}));
	};

	const path = window.location.pathname.split("/");
	const id = path[2];

	//data that will be passed in the PUT axios call
	const newCourseData = {
		title: values.title,
		description: values.description,
		estimatedTime: values.time,
		materialsNeeded: values.materials,
	};
	// sets the options for the axios call
	const options = {
		headers: {
			"Authorization": `Basic ${localStorage.getItem("access-token")}`,
		},
	};

	const { authTokens } = useAuth();

	let history = useHistory();

	const updateCourse = () => {
		axios
			.put(`http://localhost:5000/api/courses/${id}`, newCourseData, options)
			.then((res) => {
				history.push(`/courses/${id}`);
				window.location.reload();
			})
			.catch(err => {
				setValues((values) => ({
					...values,
					errors: err.response.data.errors
				}));
			})
	};

	//This will show validation errors if the API returns errors

	let validationErrors = {
		display: "block",
	};

	if (values.errors.length === 0 || values.errors === null) {
		validationErrors = {
			display: "none"
		}
	} else if (values.errors.length > 0) {
		validationErrors = {
			display: "block"
		}
	}

	return (
		<div className="bounds course--detail">
			<h1>Update Course</h1>
			<div id="errors" style={validationErrors}>
				<h2 className="validation--errors--label">Validation errors</h2>
				<div className="validation-errors">
					<ul>
						<li>{values.errors[0]}</li>
						<li>{values.errors[1]}</li>
						<li>{values.errors[2]}</li>
						<li>{values.errors[3]}</li>
						<li>{values.errors[4]}</li>
					</ul>
				</div>
			</div>
			<div>
				<form>
					<div className="grid-66">
						<div className="course--header">
							<h4 className="course--label">Course</h4>
							<div>
								<input
									id="title"
									name="title"
									type="text"
									className="input-title course--title--input"
									placeholder="Please neter a new title"
									onChange={handleTitle}
								/>
							</div>
							<p>{`By ${authTokens.firstName} ${authTokens.lastName}`}</p>
						</div>
						<div className="course--description">
							<div>
								<textarea
									id="description"
									name="description"
									className=""
									placeholder="Please neter a new description"
									onChange={handleDescription}
								></textarea>
							</div>
						</div>
					</div>
					<div className="grid-25 grid-right">
						<div className="course--stats">
							<ul className="course--stats--list">
								<li className="course--stats--list--item">
									<h4>Estimated Time</h4>
									<div>
										<input
											id="estimatedTime"
											name="estimatedTime"
											type="text"
											className="course--time--input"
											placeholder="Please enter Time"
											onChange={handleTime}
										/>
									</div>
								</li>
								<li className="course--stats--list--item">
									<h4>Materials Needed</h4>
									<div>
										<textarea
											id="materialsNeeded"
											name="materialsNeeded"
											className=""
											placeholder="Please enter materials"
											onChange={handleMaterials}
										></textarea>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="grid-100 pad-bottom">
						<Link
							className="button"
							type="submit"
							to="/"
							onClick={(e) => {
								updateCourse()
								e.preventDefault()
							}}>
							Update Course
						</Link>
						<Link to={{ pathname: `/courses/${id}` }}>
							<button className="button button-secondary">Cancel</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateCourse;
