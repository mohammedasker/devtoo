import React from "react";
import SingleArticle from "../single-article/single-article";
import NavArticle from "../nav-article/nav-article";

import "./main-content.css";

const MainContent = () => (
	<div className="main-content-container">
		<NavArticle />
		<SingleArticle />
	</div>
);

export default MainContent;
