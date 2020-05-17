import React from "react";

import SignUp from "../sign-up/sign-up";
import EventsCard from "../events-card/events-card";
import Listings from "../listings/listings";
import Challenge from "../challenge/challenge";
import Discuss from "../discuss/discuss";

import "./sidebar-right-mobile.css";

const SidebarRightMobile = () => (
	<div className="sidebar-right-container-mobile">
		<SignUp />
		<EventsCard />
		<Listings />
		<Challenge />
		<Discuss />
	</div>
);

export default SidebarRightMobile;
