import React from "react";

import SingleArticle from "../../components/single-article/single-article";
import SidebarLeft from "../../components/sidebars/sidebarleft";
import SidebarRight from "../../components/sidebars/sidebar-right";
import MainContent from "../../components/main-content/main-content";

import "./homepage.css";

const Homepage = () => (
	<div className="homepage-container">
		<SidebarRight />
		<SingleArticle />
		<SidebarLeft />
	</div>
);

export default Homepage;
