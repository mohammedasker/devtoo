import React from "react";

import "./sign-up.css";

const SignUp = () => (
	<div className="card">
		<div className="card-header">
			<p>Join DEV</p>
		</div>
		<div className="card-content">
			<button className="sidebar-left-button">Sign in With Twitter</button>
			<button className="sidebar-left-button">Sign in With GitHub</button>
		</div>
	</div>
);

export default SignUp;
