import React from "react";

import "./sponsor.css";

import DigitalOcean from "../../assets/digital-ocean.png";
import Cloudbees from "../../assets/cloudbees.png";
import Alcide from "../../assets/alcide.png";

const Sponsor = () => (
	<div className="sponsor-container">
		<p>
			<b>
				Community Sponsors{" "}
				<span role="img" aria-label="heart">
					❤️
				</span>
			</b>
		</p>
		<div>
			<img src={DigitalOcean} alt="digital-ocean" className="sponsor-image" />
			<p>
				The simplest cloud platform
				<br /> for developers & teams
			</p>
		</div>
		<div>
			<img src={Cloudbees} alt="cloudbees" className="sponsor-image" />
			<p>
				Release new features continuously.
				<br /> Without any of the risk
			</p>
		</div>
		<div>
			<img src={Alcide} alt="alcide" className="sponsor-image" />
			<p>
				Securing Kubernetes & Service Mesh. <br />
				Anywhere. Connecting Security & DevOps.
			</p>
		</div>
		<button className="sponsor-button">Become a sponsor</button>
	</div>
);

export default Sponsor;
