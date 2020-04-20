import React from "react";

import "./sidebar-right.css";
import EventsCard from "../events-card/events-card";

const SidebarRight = () => (
	<div className="sidebar-right-container">
		<div class="card">
			<div class="card-header">
				<p>Join DEV</p>
			</div>
			<div class="card-content">
				<button className="sidebar-left-button">Sign in With Twitter</button>
				<button className="sidebar-left-button">Sign in With GitHub</button>
			</div>
		</div>
	</div>
);

export default SidebarRight;
