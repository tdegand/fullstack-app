import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const UpdateCourse = () => {
	//Uses a react hook to set and store state
	const [values, setValues] = useState({
		course: [],
		owner: [],
		title: "",
		description: "",
		time: "",
		materials: "",
	});

	useEffect(() => {
		const path = window.location.pathname.split("/");
		const id = path[2];

		axios
			.get(`http://localhost:5000/api/courses/${id}`)
			.then((res) => {
				console.log(res.data);
				const course = res.data.course;
				const owner = res.data.course.owner;
				setValues((values) => ({
					...values,
					course: course,
					owner: owner,
					title: res.data.course.title,
					description: course.description,
					time: course.estimatedTime,
					materials: course.materialsNeeded,
				}));
			})
			.catch((res) => console.log("error", res));
	}, []);

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

	const newCourseData = {
		title: values.title,
		description: values.description,
		estimatedTime: values.time,
		materialsNeeded: values.materials,
	};

	const options = {
		headers: {
			Authorization: `Basic ${localStorage.getItem("access-token")}`,
		},
	};

	let history = useHistory();

	const updateCourse = () => {
		axios
			.put(`http://localhost:5000/api/courses/${id}`, newCourseData, options)
			.then(() => {
				history.push(`/courses/${id}`);
				window.location.reload();
			});
	};

	return (
		<div className="bounds course--detail">
			<h1>Update Course</h1>
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
									placeholder={values.course.title}
									onChange={handleTitle}
								/>
							</div>
							<p>{`By ${values.owner.firstName} ${values.owner.lastName}`}</p>
						</div>
						<div className="course--description">
							<div>
								<textarea
									id="description"
									name="description"
									className=""
									placeholder={values.course.description}
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
											placeholder={values.course.estimatedTime}
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
											placeholder={values.course.materialsNeeded}
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
							to={{ pathname: `/courses/${id}` }}
							onClick={updateCourse}
						>
							Update Course
						</Link>
						<Link to={{ pathname: `/courses/${values.course.id}` }}>
							<button className="button button-secondary">Cancel</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UpdateCourse;
