import React from "react";

import "./sign-up.css";

const SignUp = () => (
	<div class="card">
		<div class="card-header">
			<p>Join DEV</p>
		</div>
		<div class="card-content">
			<button className="sidebar-left-button">Sign in With Twitter</button>
			<button className="sidebar-left-button">Sign in With GitHub</button>
		</div>
	</div>
);

export default SignUp;
