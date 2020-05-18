import React from "react";

import "./social-media.css";

const SocialMedia = () => (
	<div className="social-icons">
		<a
			href="https://twitter.com/thepracticaldev"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i title="Twitter" className="fab fa-twitter social-icon"></i>
		</a>
		<a
			href="https://www.facebook.com/thepracticaldev"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i title="Facebook" className="fab fa-facebook-square social-icon"></i>
		</a>
		<a
			href="https://github.com/thepracticaldev"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i title="GitHub" className="fab fa-github social-icon"></i>
		</a>
		<a
			href="https://www.instagram.com/thepracticaldev/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i title="Instagram" className="fab fa-instagram social-icon"></i>
		</a>
		<a
			href="https://www.twitch.tv/thepracticaldev"
			target="_blank"
			rel="noopener noreferrer"
		>
			<i title="Twitch" className="fab fa-twitch social-icon"></i>
		</a>
	</div>
);

export default SocialMedia;
