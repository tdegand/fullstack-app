import React, { Component } from "react";
import Form from "../form";

export default class UpdateCourse extends Component {
	constructor() {
		super();

		this.state = {
			title: "",
			description: "",
			estimatedTime: "",
			materialsNeeded: "",
			errors: [],
		};
	}

	//handles the input elements and sets the state for this component
	handleTitle = (event) => {
		event.persist();
		this.setState({ title: event.target.value });
	};
	handleDescription = (event) => {
		event.persist();
		this.setState({ description: event.target.value });
	};
	handleTime = (event) => {
		event.persist();
		this.setState({ estimatedTime: event.target.value });
	};
	handleMaterials = (event) => {
		event.persist();
		this.setState({ materialsNeeded: event.target.value });
	};

	//submits the information from state to the APi to update the course
	updateCourse = () => {
		const { context } = this.props;

		const path = window.location.pathname.split("/");
		const id = path[2];
		const title = this.state.title;
		const description = this.state.description;
		const estimatedTime = this.state.estimatedTime;
		const materialsNeeded = this.state.materialsNeeded;
		const userId = context.authenticatedUser.id;
		const username = context.authenticatedUser.emailAddress;
		const password = context.authenticatedUser.password;

		const course = {
			title,
			description,
			estimatedTime,
			materialsNeeded,
			userId,
		};

		//uses contest to call updateCourse method from data.js
		context.data
			.updateCourse(course, id, username, password)
			.then((errors) => {
				if (errors.length) {
					this.setState({ errors });
				} else {
					this.props.history.push("/");
				}
			})
			.catch((errors) => {
				console.log(errors);
			});
	};

	cancel = () => {
		const path = window.location.pathname.split("/");
		const id = path[2];
		this.props.history.push(`/courses/${id}`);
	};
	render() {
		return (
			<div className="bounds course--detail">
				<h1>Update Course</h1>
				<Form
					cancel={this.cancel}
					errors={this.state.errors}
					submit={this.updateCourse}
					submitButtonText="Update Course"
					elements={() => (
						<React.Fragment>
							<div className="grid-66">
								<div className="course--header">
									<h4 className="course--label">Course</h4>
									<div>
										<input
											id="title"
											name="title"
											type="text"
											onChange={this.handleTitle}
											placeholder="Please enter a title.."
										/>
									</div>
								</div>
								<div className="course--description">
									<textarea
										id="description"
										name="description"
										type="text"
										onChange={this.handleDescription}
										placeholder="Please enter a description..."
									/>
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
													onChange={this.handleTime}
													placeholder="Estimated Time"
												/>
											</div>
										</li>
										<li className="course--stats--list--item">
											<h4>Materials Needed</h4>
											<div>
												<textarea
													id="materialsNeeded"
													name="materialsNeeded"
													type="text"
													onChange={this.handleMaterials}
													placeholder="List of Materials.."
												/>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</React.Fragment>
					)}
				/>
			</div>
		);
	}
}
