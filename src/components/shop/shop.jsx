import React from "react";

import DevCup from "../../assets/dev-cup.jpg";
import "./shop.css";

const Shop = () => (
	<div className="shop-container">
		<a href="https://shop.dev.to/" target="_blank" rel="noopener noreferrer">
			<img src={DevCup} alt="dev-shop" className="shop-image" />
		</a>
		<a
			href="https://shop.dev.to/"
			target="_blank"
			rel="noopener noreferrer"
			className="shop-link"
		>
			<h2 className="shop-text">
				DEV Up Your Office{" "}
				<span role="img" aria-label="rocket">
					🚀
				</span>
			</h2>
		</a>
		<hr />
	</div>
);

export default Shop;
