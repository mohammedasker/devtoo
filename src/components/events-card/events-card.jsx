import React from "react";

import "./events-card.css";

import codeland from "../../assets/codeland.png";

const EventsCard = () => (
	<div className="event-container">
		<a href="https://codelandconf.com/">
			<img
				src={codeland}
				alt="codeland distributed event"
				className="event-image"
			/>
		</a>
		<a href="https://codelandconf.com/" className="event-link">
			<h2 className="event-card-text">Register Today</h2>
		</a>
	</div>
);

export default EventsCard;
