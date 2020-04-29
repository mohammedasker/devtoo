import React from "react";

import "./discuss.css";

const Discuss = () => (
	<div className="discuss-container">
		<p className="discuss-header">
			<b>#discuss</b>
		</p>
		<ul>
			<li className="discuss-list">Tell me about your first email address</li>
			<span className="discuss-small-list">
				<span role="img" aria-label="comment">
					💬
				</span>{" "}
				31
			</span>
			<li className="discuss-list">
				Which DevOps video would you like to see next?{" "}
			</li>
			<span role="img" aria-label="video and light bulb">
				🎬💡
			</span>
			<span className="discuss-small-list">
				<span role="img" aria-label="comment">
					💬
				</span>{" "}
				5
			</span>
			<li className="discuss-list">
				What's the kindest thing someone's ever done for you during your career?
			</li>
			<span className="discuss-small-list">
				<span role="img" aria-label="comment">
					💬
				</span>{" "}
				19
			</span>
			<li className="discuss-list">
				What is a problem you constantly have with CSS, or something you keep
				wanting to learn how to do?
			</li>
			<span className="discuss-small-list">
				<span role="img" aria-label="comment">
					💬
				</span>{" "}
				11
			</span>
			<li className="discuss-list">how is everyone holding up?</li>
		</ul>
		<hr />
	</div>
);

export default Discuss;
