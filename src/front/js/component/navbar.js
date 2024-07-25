import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store} = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				
				{store.token || localStorage.getItem("token") ? "Sesión iniciada" : "Tienes que iniciar sesión"}
				
			</div>
		</nav>
	);
};
