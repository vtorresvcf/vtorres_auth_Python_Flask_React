import React, { useState,useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Signup from "../component/signup";
import Login from "../component/login";
export const Home = () => {
	const [isRegister, setIsRegister] = useState(false)
	
	const {store} = useContext(Context)
   
	return (
		<div>

		
			<h1 className="text-center py-2">Bienvenid@</h1>
			{!isRegister ? (<Login setIsRegister={setIsRegister}/>): <Signup setIsRegister={setIsRegister}/>}
			
		</div>
	);
};
