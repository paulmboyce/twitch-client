import React from "react";
import ReactDOM from "react-dom";

const ModalFragment = (props) => {
	return ReactDOM.createPortal(
		<div
			className="ui dimmer modals visible active"
			onClick={props.cancelAction}
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
				<div className="actions">{props.actions}</div>
			</div>
		</div>,
		document.querySelector("#modal")
	);
};

export { ModalFragment };
