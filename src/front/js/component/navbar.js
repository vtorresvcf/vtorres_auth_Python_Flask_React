import React, {useContext, useState,useEffect} from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions} = useContext(Context)
	const [token, setToken] = useState("")
	const navigate = useNavigate()

	useEffect(()=>{
		
		if ((localStorage.getItem('token') !== "") && (localStorage.getItem('token')!== undefined)){
		setToken(localStorage.getItem('token'))
		}
		
	},[token])

	const logOutRedirect = () =>{
		actions.logOut()
		navigate("/")
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>

				
				
				{store.token || localStorage.getItem("token") ? "Sesión iniciada" : "Tienes que iniciar sesión"}
				<button className="btn btn-dark" onClick={logOutRedirect}>LogOut</button>
				
			</div>
		</nav>
	);
};
