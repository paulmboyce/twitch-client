import React from "react";
import { Link } from "react-router-dom";

import { GoogleAuth } from "./GoogleAuth";

const Header = () => {
	return (
		<div className="ui menu inverted">
			<Link to="/" className="header item">
				Twisher
			</Link>
			<div className="right menu">
				<Link to="/" className="item">
					All Streams
				</Link>
				<div className="item">
					<GoogleAuth />
				</div>
			</div>
		</div>
	);
};

export { Header };
