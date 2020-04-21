import React from "react";

import "./sidebar-right.css";
import SignUp from "../sign-up/sign-up";
import EventsCard from "../events-card/events-card";

const SidebarRight = () => (
	<div className="sidebar-right-container">
		<SignUp />
		<EventsCard />
	</div>
);

export default SidebarRight;
