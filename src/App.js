import React from "react";

import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/homepage/homepage";

import "./App.css";

function App() {
	return (
		<div className="container">
			<Navbar />
			<Homepage />
		</div>
	);
}

export default App;
