import React, { useState } from "react";
import { Collapse } from "react-bootstrap";

import SocialMedia from "../social-media/social-media";
import "./main-nav.css";

const MainNav = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<ul className="sidebar-lists">
				<li className="sidebar-list">
					<span role="img" aria-label="list" className="list-icons">
						🤝
					</span>
					<b>Sign in/Up</b>
				</li>
				<li className="sidebar-list">
					<span role="img" aria-label="list" className="list-icons">
						🗄️
					</span>{" "}
					Reading list
				</li>
				<li className="sidebar-list">
					<span role="img" aria-label="list" className="list-icons">
						📜
					</span>
					{""}
					Listings
				</li>
				<li className="sidebar-list">
					<span role="img" aria-label="list" className="list-icons">
						🎙️
					</span>{" "}
					Podcasts
				</li>
				<li className="sidebar-list">
					<span role="img" aria-label="list" className="list-icons">
						🎥
					</span>
					Videos
				</li>
				<li className="sidebar-list">
					<span role="img" aria-label="list" className="list-icons">
						🏷️
					</span>
					Tags
				</li>
				<Collapse in={open} className="collapse">
					<div>
						<li className="sidebar-list">
							<span role="img" aria-label="list" className="list-icons">
								👍
							</span>
							Code of Conduct
						</li>
						<li className="sidebar-list">
							<span role="img" aria-label="list" className="list-icons">
								💡
							</span>{" "}
							FAQ
						</li>
						<li className="sidebar-list">
							<span role="img" aria-label="list" className="list-icons">
								🛍️
							</span>
							DEV Shop
						</li>
						<li className="sidebar-list">
							<span role="img" aria-label="list" className="list-icons">
								❤️
							</span>
							Sponsors
						</li>
						<li className="sidebar-list">
							<span role="img" aria-label="list" className="list-icons">
								👨‍💻
							</span>
							About
						</li>
						<li className="sidebar-list">
							<span role="img" aria-label="list" className="list-icons">
								🤓
							</span>
							Privacy policy
						</li>
						<li className="sidebar-list">
							<span role="img" aria-label="list" className="list-icons">
								👀
							</span>
							Terms of use
						</li>
						<li className="sidebar-list">
							<span role="img" aria-label="list" className="list-icons">
								📯
							</span>
							Contact
						</li>
						<hr />
						<SocialMedia />
					</div>
				</Collapse>
				<p
					onClick={() => setOpen(!open)}
					className="read-more"
					style={{ display: !open ? null : "none" }}
				>
					More...{" "}
				</p>
			</ul>
		</div>
	);
};

export default MainNav;
