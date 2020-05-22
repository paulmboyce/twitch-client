import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
	renderError = function ({ error, touched }) {
		if (touched && error) {
			return <div className="ui pointing red basic label">{error}</div>;
		}
		return null;
	};

	renderInput = ({ input, label, meta }) => {
		const { error, touched } = meta;
		const fieldClass = `field ${error && touched ? "error" : ""}`;

		return (
			<div className={fieldClass}>
				<label>{label}</label>
				<input
					{...input}
					className="ui input"
					autoComplete="off"
				></input>
				{this.renderError(meta)}
			</div>
		);
	};

	render() {
		return (
			<div>
				<form
					className="ui form"
					onSubmit={this.props.handleSubmit(this.props.onSubmit)}
				>
					<Field
						name="title"
						label="Title"
						type="text"
						component={this.renderInput}
					/>
					<Field
						name="description"
						label="Description"
						type="text"
						component={this.renderInput}
					/>
					<button type="submit" className="ui primary button">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

const validate = function (values) {
	const errors = {};
	if (!values.title) {
		errors.title = "Must have a title.";
	}
	if (!values.description) {
		errors.description = "Must have a description.";
	}
	return errors;
};

const form = reduxForm({ form: "streamForm", validate: validate })(StreamForm);

export { form as StreamForm };
