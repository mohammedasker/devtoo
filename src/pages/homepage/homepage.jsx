import React from "react";

import SingleArticle from "../../components/single-article/single-article";
import SidebarLeft from "../../components/sidebars/sidebarleft";

import "./homepage.css";

const Homepage = () => (
	<div className="homepage-container">
		<SingleArticle />
		<SidebarLeft />
	</div>
);

export default Homepage;
