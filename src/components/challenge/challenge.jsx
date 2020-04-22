import React from "react";

import "./challenge.css";

const Challenge = () => (
	<div className="challenge-container">
		<p className="challenge-header">
			<b>#challenge</b>
		</p>
		<ul>
			<li className="challenge-list">
				JavaScript Quiz Question #1: Array Sort Comparison{" "}
				<span className="challenge-small-list">
					<br />
					<span role="img" aria-label="comment">
						💬
					</span>{" "}
					5
				</span>
			</li>
			<li className="challenge-list">
				Daily Challenge #229 - Haiku Validator{" "}
				<span className="challenge-small-list">
					<br />
					<span role="img" aria-label="comment">
						💬
					</span>{" "}
					1
				</span>
			</li>
			<li className="challenge-list">
				Daily HackerRank Challenge - Day 9{" "}
				<span className="fresh">
					<br />
					FRESH
				</span>
			</li>
			<li className="challenge-list">
				Daily Challenge #230 - Beeramid{" "}
				<span className="challenge-small-list">
					<br />
					<span role="img" aria-label="comment">
						💬
					</span>{" "}
					3
				</span>
			</li>
			<li className="challenge-list">
				6 Cloud Security Challenges and How to Address Them
				<span className="fresh">
					<br />
					FRESH
				</span>
			</li>
		</ul>
		<hr />
	</div>
);

export default Challenge;
