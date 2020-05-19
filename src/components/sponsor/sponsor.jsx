import React from "react";

import "./sponsor.css";

import DigitalOcean from "../../assets/digital-ocean.png";
import Cloudbees from "../../assets/cloudbees.png";
import Alcide from "../../assets/alcide.png";

const Sponsor = () => (
	<div className="sponsor-container">
		<hr />
		<p>
			<b>
				Community Sponsors{" "}
				<span role="img" aria-label="heart">
					❤️
				</span>
			</b>
		</p>
		<div>
			<a
				href="https://try.digitalocean.com/open-source/?utm_source=devto&utm_medium=display&utm_campaign=DO_Dev_Signup_Cold_Devto_2019"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={DigitalOcean} alt="digital-ocean" className="sponsor-image" />
			</a>
			<p>
				The simplest cloud platform
				<br /> for developers & teams
			</p>
		</div>
		<div>
			<a
				href="https://rollout.io/?utm_source=devto&utm_medium=referral&utm_content=may_sponsorship&utm_campaign=rollout_trial_devto"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={Cloudbees} alt="cloudbees" className="sponsor-image" />
			</a>
			<p>
				Release new features continuously.
				<br /> Without any of the risk
			</p>
		</div>
		<div>
			<a
				href="https://www.alcide.io/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={Alcide} alt="alcide" className="sponsor-image" />
			</a>
			<p>
				Securing Kubernetes & Service Mesh. <br />
				Anywhere. Connecting Security & DevOps.
			</p>
		</div>
		<button className="sponsor-button">Become a sponsor</button>
	</div>
);

export default Sponsor;
