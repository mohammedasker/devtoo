import React from "react";

import DevCup from "../../assets/dev-cup.jpg";
import "./shop.css";

const Shop = () => (
	<div className="shop-container">
		<img src={DevCup} alt="dev-shop" className="shop-image" />
		<h2 className="shop-text">
			DEV Up Your Office{" "}
			<span role="img" aria-label="rocket">
				🚀
			</span>
		</h2>
	</div>
);

export default Shop;
