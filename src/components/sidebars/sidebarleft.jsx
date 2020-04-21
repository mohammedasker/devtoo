import React from "react";

import MainNav from "../main-nav/main-nav";
import MyTags from "../main-nav/my-tags/my-tags";
import Sponsor from "../sponsor/sponsor";
import Shop from "../shop/shop";

import "./sidebarleft.css";

const SidebarLeft = () => (
	<div className="sidebar-left-container">
		<MainNav />
		<MyTags />
		<Sponsor />
		<Shop />
	</div>
);

export default SidebarLeft;
