import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Coursedetail = () => {
	//Uses a react hook to set and store state
	const [values, setValues] = useState({
		course: [],
		owner: [],
	});

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

	const deleteCourse = () => {
		const path = window.location.pathname.split("/");
		const id = path[2];

		axios.delete(`http://localhost:5000/api/courses/${id}`).then(() => {
			this.props.history.push("/");
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
								to={{ pathname: `/courses/${values.course.id}/update` }}
							>
								Update Course
							</Link>
							<Link className="button" to="/" onClick={deleteCourse}>
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
						<p>{values.course.description}</p>
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
									<li>{values.course.materialsNeeded}</li>
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
