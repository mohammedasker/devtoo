import React, { useState } from "react";
import ReactDOM from "react-dom";

import SingleArticle from "../single-article/single-article";
import NavArticle from "../nav-article/nav-article";
import SidebarLeftMobile from "../sidebars/sidebarleft-mobile";

import "./main-content.css";

const modalRoot = document.getElementById("modal-root");

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div className="sidebar-container">{props.children}</div>,
		modalRoot
	);
};
const MainContent = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="main-content-container">
			<NavArticle />
			<SingleArticle />
			<button onClick={() => setOpen(!open)} className="testbtn">
				try
			</button>
			{open && (
				<Modal in={open}>
					<SidebarLeftMobile />
				</Modal>
			)}
		</div>
	);
};
export default MainContent;
