import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const activeStyle = "active";
const nonActiveStyle = "inactive";
const Header = () => {
	return (
		<nav className="navbar bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/">
					E-comm
				</Link>
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink
							to="cart"
							className={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
						>
							<i className="bi bi-cart4" style={{ fontSize: "2rem" }}></i>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
