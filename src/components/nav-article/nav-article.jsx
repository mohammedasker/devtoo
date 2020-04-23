import React from "react";

import "./nav-article.css";

const NavArticle = () => (
	<div className="nav-article-container">
		<ul className="nav-article-ul">
			<li className="nav-article-list active">FEED</li>
			<li className="nav-article-line">|</li>
			<li className="nav-article-list">WEEK</li>
			<li className="nav-article-list">MONTH</li>
			<li className="nav-article-list">YEAR</li>
			<li className="nav-article-list">INFINITY</li>
			<li className="nav-article-line">|</li>
			<li className="nav-article-list">LATEST</li>
		</ul>
	</div>
);

export default NavArticle;
