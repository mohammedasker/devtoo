import React from "react";

import "./navbar.css";

const Navbar = () => (
	<div className="topnav">
		<a href="/">
			<i className="fab fa-dev fa-3x logo"></i>
		</a>
		<input type="text" placeholder="Search..." className="nav-search" />
		<button className="new-post">Write a post</button>
		<i className="far fa-comment nav-icons"></i>
		<i className="far fa-bell nav-icons"></i>
		<div className="dropdown">
			<i className="fas fa-bars nav-icons"></i>
			<div className="dropdown-content">
				<ul className="dropdown-content-lists">
					<li className="nav-menu-list">
						<b>Sign in/Up</b>
					</li>
					<div className="nav-menu-nested-list">
						<li className="nav-menu-list">Via Twitter</li>
						<li className="nav-menu-list">Via GitHub</li>
					</div>
					<hr />
					<li className="nav-menu-list">All about DEV</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Navbar;
