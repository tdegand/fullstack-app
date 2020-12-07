import React from "react";

const Error = () => {
	return (
		<div>
			<h2 className="validation--errors--label">Validation errors</h2>
			<div className="validation-errors">
				<ul>
					{localStorage.Errors}
				</ul>
			</div>
		</div>
	);
};

export default Error;
