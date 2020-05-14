import React from "react";
import { Field, reduxForm } from "redux-form";

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

class StreamCreate extends React.Component {
	onSubmit = function (fields) {
		console.log("SUBMIT:", fields);
	};

	renderError = function (error, touched) {
		if (touched && error) {
			return <div className="ui pointing red basic label">{error}</div>;
		}
		return null;
	};

	renderField = ({ input, label, meta: { error, touched } }) => {
		const fieldClass = `field ${error && touched ? "error" : ""}`;
		return (
			<div className={fieldClass}>
				<label>{label}</label>
				<input
					{...input}
					className="ui input"
					autoComplete="off"
				></input>
				{this.renderError(error, touched)}
			</div>
		);
	};

	render() {
		return (
			<div>
				<h1>Create a Stream</h1>
				<form
					className="ui form"
					onSubmit={this.props.handleSubmit(this.onSubmit)}
				>
					<Field
						name="title"
						label="Title"
						type="text"
						component={this.renderField}
					/>
					<Field
						name="description"
						label="Description"
						type="text"
						component={this.renderField}
					/>
					<button type="submit" className="ui primary button">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

const form = reduxForm({ form: "createStream", validate: validate })(
	StreamCreate
);

export { form as StreamCreate };
