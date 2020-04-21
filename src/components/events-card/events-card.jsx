import React from "react";

import "./events-card.css";

import codeland from "../../assets/codeland.png";

const EventsCard = () => (
	<div className="event-container">
		<img
			src={codeland}
			alt="codeland distributed event"
			className="event-image"
		/>
		<h2 className="event-card-text">Register Today</h2>
	</div>
);

export default EventsCard;
