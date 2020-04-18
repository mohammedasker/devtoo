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
		<i className="fas fa-bars nav-icons"></i>
	</div>
);

export default Navbar;
