import React from "react";

import "./challenge.css";

const Challenge = () => (
	<div className="challenge-container">
		<p className="challenge-header">
			<b>#challenge</b>
		</p>
		<ul className="challenge-lists">
			<li className="challenge-list">
				JavaScript Quiz Question #1: Array Sort Comparison{" "}
			</li>
			<span className="challenge-small-list">
				<span role="img" aria-label="comment">
					💬
				</span>{" "}
				5
			</span>
			<li className="challenge-list">
				Daily Challenge #229 - Haiku Validator{" "}
			</li>
			<span className="challenge-small-list">
				<span role="img" aria-label="comment">
					💬
				</span>{" "}
				1
			</span>
			<li className="challenge-list">Daily HackerRank Challenge - Day 9 </li>
			<span className="fresh">FRESH</span>
			<li className="challenge-list">Daily Challenge #230 - Beeramid </li>
			<span className="challenge-small-list">
				<span role="img" aria-label="comment">
					💬
				</span>{" "}
				3
			</span>
			<li className="challenge-list">
				6 Cloud Security Challenges and How to Address Them
			</li>
			<span className="fresh">FRESH</span>
		</ul>
		<hr />
	</div>
);

export default Challenge;
