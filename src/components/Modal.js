import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div className="ui dimmer modals visible active">
			<div className="ui standard modal visible active">
				<div className="content">
					<p>
						<b>{props.message}</b>
					</p>
				</div>
				<div className="actions">
					<Link to={props.noLink} className="ui grey cancel  button">
						<i className="remove icon"></i>
						NO
					</Link>
					<Link
						to={props.yesLink}
						onClick={props.yesAction}
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
