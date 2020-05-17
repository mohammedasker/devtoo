import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import SidebarLeftMobile from "../sidebars/sidebarleft-mobile";
import SidebarRightMobile from "../sidebars/sidebar-right-mobile";

import "./nav-article.css";

const modalRoot = document.getElementById("modal-root");

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div className="overlay">
			<div className="sidebar-container-left">{props.children}</div>
		</div>,
		modalRoot
	);
};

const ModalRight = (props) => {
	return ReactDOM.createPortal(
		<div className="overlay">
			<div className="sidebar-container-right">{props.children}</div>
		</div>,
		modalRoot
	);
};

const NavArticle = () => {
	const [open, setOpen] = useState(false);
	const [openRight, setOpenRight] = useState(false);

	useEffect(() => {
		const overlay = document.querySelector(".overlay");
		window.onclick = (e) => {
			if (e.target === overlay) {
				overlay.style.display = "none";
			}
		};
	});

	return (
		<div className="nav-article-container">
			<ul className="nav-article-ul">
				<i
					onClick={() => setOpen(!open)}
					className="fas fa-database database-icon-tablet nav-article-line"
				></i>
				<li className="nav-article-list active">FEED</li>
				<li className="nav-article-line">|</li>
				<li className="nav-article-list">WEEK</li>
				<li className="nav-article-list">MONTH</li>
				<li className="nav-article-list">YEAR</li>
				<li className="nav-article-list">INFINITY</li>
				<li className="nav-article-line">|</li>
				<li className="nav-article-list">LATEST</li>
				<i
					onClick={() => setOpenRight(!openRight)}
					className="fas fa-bolt bolt-icon-tablet nav-article-line"
				></i>
			</ul>
			<ul className="nav-article-mobile">
				<i
					onClick={() => setOpen(!open)}
					className="fas fa-database database-icon"
				></i>
				<li className="nav-list-mobile">
					<b>&#60;MY DEV FEED&#62;</b>
				</li>
				<i
					onClick={() => setOpenRight(!openRight)}
					className="fas fa-bolt bolt-icon"
				></i>
			</ul>
			{open && (
				<Modal in={open}>
					<SidebarLeftMobile />
				</Modal>
			)}
			{openRight && (
				<ModalRight in={openRight}>
					<SidebarRightMobile />
				</ModalRight>
			)}
		</div>
	);
};
export default NavArticle;
