import React from "react";

import "./sidebar-right.css";
import EventsCard from "../events-card/events-card";
import SignUp from "../sign-up/sign-up";

const SidebarRight = () => (
	<div className="sidebar-right-container">
		<SignUp />
		<EventsCard />
	</div>
);

export default SidebarRight;
