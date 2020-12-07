import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../authContext";

const CreateCourse = () => {
	const [values, setValues] = useState({
		title: "",
		description: "",
		time: "",
		materials: "",
		errors: []
	});

	const { authTokens } = useAuth();

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

	//data that will be passed in the POST axios call
	const newCourseData = {
		title: values.title,
		description: values.description,
		estimatedTime: values.time,
		materialsNeeded: values.materials,
		userId: authTokens.id,
	};
	// sets the options for the axios call
	const options = {
		headers: {
			Authorization: `Basic ${localStorage.getItem("access-token")}`,
		},
	};

	let history = useHistory();

	const createCourse = () => {
		axios
			.post(`http://localhost:5000/api/courses`, newCourseData, options)
			.then((res) => {
				history.push(`/`);
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
			<h1>Create Course</h1>
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
									placeholder="Please enter a Title..."
									onChange={handleTitle}
								/>
							</div>
							<p>get signed in users name</p>
						</div>
						<div className="course--description">
							<div>
								<textarea
									id="description"
									name="description"
									className=""
									placeholder="Please enter a description..."
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
											placeholder="Please Enter the amount of time.."
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
											placeholder="Please enter materials needed..."
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
							onClick={createCourse}
						>
							Create Course
						</Link>
						<Link to={{ pathname: "/" }}>
							<button className="button button-secondary">Cancel</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateCourse;
