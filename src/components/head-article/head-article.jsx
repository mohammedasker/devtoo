import React from "react";

import ImagePost from "../../assets/imagepost.jpg";
import "./head-article.css";

const HeadArticle = () => (
	<div className="article-container">
		<img src={ImagePost} className="image-post" alt="post-thumbnail" />
		<div className="custom-column-top">
			<img src="//placehold.it/150" className="avatar" alt="avatar" />
			<div className="custom-row">
				<h1 className="post-title">Main post title</h1>
				<p className="post-tags">#react #javascript #webdev</p>
				<span className="author">
					<b>author&nbsp;</b> <b>April 15</b>
				</span>
			</div>
		</div>
		<div className="custom-column-bottom">
			<span role="img" aria-label="like" className="like">
				❤️100
			</span>
			<span role="img" aria-label="like" className="comment">
				💬35
			</span>
			<p className="time-read">2 min read</p>
			<button className="post-button">SAVE</button>
		</div>
	</div>
);

export default HeadArticle;
