import React from "react";
import { Link, useHistory } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Coursedetail = () => {

	return (
		<div>
			<div className="actions--bar">
				<div className="bounds">
					<div className="grid-100">
						<span>
							<Link
								className="button"
								to={{ pathname: `/courses/id/update` }}
							>
								Update Course
							</Link>
							<Link
								className="button"
								to="/"
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
						<h3 className="course--title">t</h3>
						<p>dsf</p>
					</div>
					<div className="course--description">
						<ReactMarkdown>hello</ReactMarkdown>
					</div>
				</div>
				<div className="grid-25 grid-right">
					<div className="course--stats">
						<ul className="course--stats--list">
							<li className="course--stats--list--item">
								<h4>Estimated Time</h4>
								<h3>placeholder</h3>
							</li>
							<li className="course--stats--list--item">
								<h4>Materials Needed</h4>
								<ul>
									<ReactMarkdown>placeholder</ReactMarkdown>
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
