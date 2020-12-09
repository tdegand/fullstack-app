import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CreateCourse extends Component {
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

	createCourse = () => {
		const { context } = this.props;

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

		context.data
			.createCourse(course, username, password)
			.then((res) => this.props.history.push("/"));
	};
	render() {
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
										onChange={this.handleTitle}
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
										onChange={this.handleDescription}
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
												onChange={this.handleTime}
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
												onChange={this.handleMaterials}
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
								onClick={this.createCourse}
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
	}
}
