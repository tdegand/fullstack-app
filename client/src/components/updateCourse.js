// import React from "react";
// import { Link, useHistory } from "react-router-dom";

// const UpdateCourse = () => {

// 	// const handleTitle = (event) => {
// 	// 	event.persist();
// 	// 	setValues((values) => ({
// 	// 		...values,
// 	// 		title: event.target.value,
// 	// 	}));
// 	// };
// 	// const handleDescription = (event) => {
// 	// 	event.persist();
// 	// 	setValues((values) => ({
// 	// 		...values,
// 	// 		description: event.target.value,
// 	// 	}));
// 	// };
// 	// const handleTime = (event) => {
// 	// 	event.persist();
// 	// 	setValues((values) => ({
// 	// 		...values,
// 	// 		time: event.target.value,
// 	// 	}));
// 	// };
// 	// const handleMaterials = (event) => {
// 	// 	event.persist();
// 	// 	setValues((values) => ({
// 	// 		...values,
// 	// 		materials: event.target.value,
// 	// 	}));
// 	// };


	
// 	return (
// 		<div className="bounds course--detail">
// 			<h1>Update Course</h1>
// 			{/* <div id="errors" style={validationErrors}>
// 				<h2 className="validation--errors--label">Validation errors</h2>
// 				<div className="validation-errors">
// 					<ul>
// 						<li>{values.errors[0]}</li>
// 						<li>{values.errors[1]}</li>
// 						<li>{values.errors[2]}</li>
// 						<li>{values.errors[3]}</li>
// 						<li>{values.errors[4]}</li>
// 					</ul>
// 				</div>
// 			</div> */}
// 			<div>
// 				<form>
// 					<div className="grid-66">
// 						<div className="course--header">
// 							<h4 className="course--label">Course</h4>
// 							<div>
// 								<input
// 									id="title"
// 									name="title"
// 									type="text"
// 									className="input-title course--title--input"
// 									placeholder="Please neter a new title"
// 									// onChange={handleTitle}
// 								/>
// 							</div>
// 							<p>placeholder</p>
// 						</div>
// 						<div className="course--description">
// 							<div>
// 								<textarea
// 									id="description"
// 									name="description"
// 									className=""
// 									placeholder="Please neter a new description"
// 									// onChange={handleDescription}
// 								></textarea>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="grid-25 grid-right">
// 						<div className="course--stats">
// 							<ul className="course--stats--list">
// 								<li className="course--stats--list--item">
// 									<h4>Estimated Time</h4>
// 									<div>
// 										<input
// 											id="estimatedTime"
// 											name="estimatedTime"
// 											type="text"
// 											className="course--time--input"
// 											placeholder="Please enter Time"
// 											// onChange={handleTime}
// 										/>
// 									</div>
// 								</li>
// 								<li className="course--stats--list--item">
// 									<h4>Materials Needed</h4>
// 									<div>
// 										<textarea
// 											id="materialsNeeded"
// 											name="materialsNeeded"
// 											className=""
// 											placeholder="Please enter materials"
// 											// onChange={handleMaterials}
// 										></textarea>
// 									</div>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 					<div className="grid-100 pad-bottom">
// 						<Link
// 							className="button"
// 							type="submit"
// 							to="/"
// 							onClick={(e) => {
// 								e.preventDefault()
// 							}}>
// 							Update Course
// 						</Link>
// 						<Link to={{ pathname: `/courses/id` }}>
// 							<button className="button button-secondary">Cancel</button>
// 						</Link>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default UpdateCourse;
