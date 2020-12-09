import React from "react";

export default (props) => {
  const { cancel, errors, submit, submitButtonText, elements } = props;
  

  //handles submit functions for the different forms
	function handleSubmit(event) {
		event.preventDefault();
		submit();
	}

  //handles cancel functions for the different forms
	function handleCancel(event) {
		event.preventDefault();
		cancel();
	}

	return (
		<div>
			<ErrorsDisplay errors={errors} />
			<form onSubmit={handleSubmit}>
				{elements()}
				<div className="pad-bottom">
					<button className="button" type="submit">
						{submitButtonText}
					</button>
					<button className="button button-secondary" onClick={handleCancel}>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

//handles the display of returned errors from the API
function ErrorsDisplay({ errors }) {
	let errorsDisplay = null;

	if (errors.length) {
		errorsDisplay = (
			<div>
				<h2 className="validation--errors--label">Validation errors</h2>
				<div className="validation-errors">
					<ul>
						{errors.map((error, i) => (
							<li key={i}>{error}</li>
						))}
					</ul>
				</div>
			</div>
		);
	}

	return errorsDisplay;
}
