import React from "react";

import MainNav from "../main-nav/main-nav";
import MyTags from "../main-nav/my-tags/my-tags";
import Sponsor from "../sponsor/sponsor";
import Shop from "../shop/shop";

import "./sidebarleft-mobile.css";

const SidebarLeftMobile = () => (
	<div className="sidebar-left-container-mobile">
		<MainNav />
		<MyTags />
		<Sponsor />
		<Shop />
	</div>
);

export default SidebarLeftMobile;
