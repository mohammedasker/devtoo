import React from "react";

import "./single-article.css";

const SingleArticle = () => (
	<div className="article-wrapper">
		<div className="article-container">
			<h1 className="post-title">Post title</h1>
			<p className="post-tags">#react #javascript #webdev</p>
			<br />
			<img src="//placehold.it/150" className="avatar" alt="avatar" />
			<span className="author">
				<b>author&nbsp;</b> <b>April 15</b>
			</span>
			<br />
			<span role="img" aria-label="like" className="likes">
				❤️100 &nbsp;💬35
			</span>
			<p className="time-read">2 min read</p>
			<button className="post-button">SAVE</button>
		</div>
	</div>
);

export default SingleArticle;
