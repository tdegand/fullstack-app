import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context";

const CreateCourse = () => {
	const [values, setValues] = useState({
		title: "",
		description: "",
		time: "",
		materials: "",
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

	const newCourseData = {
		title: values.title,
		description: values.description,
		estimatedTime: values.time,
		materialsNeeded: values.materials,
		userId: authTokens.id,
	};

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
			});
	};

	return (
		<div className="bounds course--detail">
			<h1>Create Course</h1>
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
							to={{ pathname: "/" }}
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
