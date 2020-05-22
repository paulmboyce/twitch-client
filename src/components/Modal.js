import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { history } from "../history";

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div
			className="ui dimmer modals visible active"
			onClick={() => history.push(props.cancelLink)}
		>
			<div
				className="ui standard modal visible active"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="ui header">{props.header}</div>
				<div className="content">
					<p>
						<b>{props.message}</b>
					</p>
				</div>
				<div className="actions">
					<Link
						to={props.cancelLink}
						className="ui grey cancel  button"
					>
						<i className="remove icon"></i>
						NO
					</Link>
					<Link
						to={props.successLink}
						onClick={props.successAction}
						className="ui red ok button"
					>
						<i className="checkmark icon"></i>
						YES
					</Link>
				</div>
			</div>
		</div>,
		document.querySelector("#modal")
	);
};

export { Modal };
