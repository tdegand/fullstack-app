import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Course from "./course";
const axios = require("axios");

function Courses() {
	const [course, setCourse] = useState([]);

	//Gets all courses and displays them
	useEffect(() => {
		axios
			.get(`http://localhost:5000/api/courses`)
			.then((course) => setCourse(course.data.courses))
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="bounds">
			{course.map((course) => (
				<Course course={course} key={course.id} />
			))}
			<div className="grid-33">
				<Link
					className="course--module course--add--module"
					to="/courses/create"
				>
					<h3 className="course--add--title">
						<svg
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 13 13"
							className="add"
						>
							<polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
						</svg>
						New Course
					</h3>
				</Link>
			</div>
		</div>
	);
}

export default Courses;
