import React from "react";

import "./listings.css";

const Listings = () => (
	<div className="listings-container">
		<div className="listings-top">
			<p className="listings-header">
				<b>Listings</b>
			</p>
			<p className="listings-number">78</p>
			<button className="listings-button">-</button>
		</div>
		<ul>
			<li className="listings-list"></li>
			<li className="listings-list">
				<span role="img" aria-label="rocket">
					🚀
				</span>
				[LIMITED PROMO]
				<span role="img" aria-label="rocket">
					🚀
				</span>
				90% OFF all programming courses lifetime plan - ONLY FIRST 100 ACCOUNTS!{" "}
				<span role="img" aria-label="party">
					🎉🎉
				</span>{" "}
				education <br />
			</li>
			<span className="small-text">education</span>
			<li className="listings-list">
				MESG: launch advanced applications quicker & faster cfp
				<br />
			</li>
			<span className="small-text">cfp</span>
			<li className="listings-list">
				Looking for tech content writers{" "}
				<span role="img" aria-label="money">
					💰
				</span>{" "}
				jobs
				<br />
			</li>
			<span className="small-text">jobs</span>

			<li className="listings-list">
				OVERPASS: Personalized Pair Programming Sessions! mentors
				<br />
			</li>
			<span className="small-text">mentors</span>

			<li className="listings-list">
				CTOs Talk K8s and SaaS
				<br />
			</li>
			<span className="small-text">events</span>

			<li className="listings-text">CREATING A LISTINGS</li>
		</ul>
		<hr />
	</div>
);

export default Listings;
