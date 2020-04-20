import React from "react";

import MainNav from "../main-nav/main-nav";
import MyTags from "../main-nav/my-tags/my-tags";

import "./sidebarleft.css";

const SidebarLeft = () => (
	<div className="sidebar-left-container">
		<MainNav />
		<MyTags />
	</div>
);

export default SidebarLeft;
