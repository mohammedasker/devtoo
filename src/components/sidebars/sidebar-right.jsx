import React from "react";

import "./sidebar-right.css";
import SignUp from "../sign-up/sign-up";
import EventsCard from "../events-card/events-card";
import Listings from "../listings/listings";

const SidebarRight = () => (
	<div className="sidebar-right-container">
		<SignUp />
		<EventsCard />
		<Listings />
	</div>
);

export default SidebarRight;
