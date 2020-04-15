import React from "react";

import Navbar from "./components/navbar/navbar";

import "./App.css";

function App() {
	return (
		<div className="container">
			<Navbar />
			<h1>header</h1>
			<main>some posts</main>
		</div>
	);
}

export default App;
