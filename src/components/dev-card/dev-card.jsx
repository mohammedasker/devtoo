import React from "react";
import rainbowdev from "../../assets/dev-rainbow.png";

import "./dev-card.css";

const DevCard = () => (
	<div className="dev-card-container">
		<div className="custom-column-top">
			<img src={rainbowdev} className="dev-card-logo" alt="dev-card-logo" />
			<div className="custom-row">
				<h1 className="dev-card-title">
					<span className="dev-header">DEV</span> is a community of 447,160
					amazing developers
				</h1>
				<p className="dev-text">
					We're a place where coders share, stay up-to-date and grow their
					careers.
				</p>
				<a href="/" className="dev-card-signup-button ">
					Create new account
				</a>
				<a href="/" className="dev-card-login-button ">
					Login
				</a>
			</div>
		</div>
		<div className="custom-column-bottom"></div>
	</div>
);

export default DevCard;
