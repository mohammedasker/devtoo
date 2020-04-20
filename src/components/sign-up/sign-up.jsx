import React from "react";

import EventsCard from "../events-card/events-card";
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
		<EventsCard />
	</div>
);

export default SignUp;
