import React from "react";

import "./nav-article.css";

const NavArticle = () => (
	<div className="nav-article-container">
		<ul className="nav-article-ul">
			<i className="fas fa-database database-icon-tablet nav-article-line"></i>
			<li className="nav-article-list active">FEED</li>
			<li className="nav-article-line">|</li>
			<li className="nav-article-list">WEEK</li>
			<li className="nav-article-list">MONTH</li>
			<li className="nav-article-list">YEAR</li>
			<li className="nav-article-list">INFINITY</li>
			<li className="nav-article-line">|</li>
			<li className="nav-article-list">LATEST</li>
			<i className="fas fa-bolt bolt-icon-tablet nav-article-line"></i>
		</ul>
		<ul className="nav-article-mobile">
			<i className="fas fa-database database-icon"></i>
			<li className="nav-list-mobile">
				<b>&#60;MY DEV FEED&#62;</b>
			</li>
			<i className="fas fa-bolt bolt-icon"></i>
		</ul>
	</div>
);

export default NavArticle;
