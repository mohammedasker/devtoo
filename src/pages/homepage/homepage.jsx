import React from "react";

import SidebarLeft from "../../components/sidebars/sidebarleft";
import SidebarRight from "../../components/sidebars/sidebar-right";
import MainContent from "../../components/main-content/main-content";

import "./homepage.css";

const Homepage = () => (
	<div className="homepage-container">
		<SidebarLeft />
		<MainContent />
		<SidebarRight />
	</div>
);

export default Homepage;
