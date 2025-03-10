import React, { useContext, useState, useEffect } from 'react'
import { Context } from "../store/appContext";
import { Link, useNavigate } from 'react-router-dom';

const signup = ({setIsRegister}) => {
    const navigate = useNavigate()
    const {store,actions} = useContext(Context)
    const [formData, setFormData] = useState({email:"", password:""})
    const [error, setError] = useState(false)
    const [redirect, setredirect] = useState(false)    
    
	
    useEffect(()=>{
        if(redirect) {
            const timer = setTimeout(()=>{
                navigate("/pageprivate")
            },3000)
            return () => clearTimeout(timer);
        }
            
    },[redirect])




    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if ([formData.email && formData.password].includes("")){
            setError(true)
            return 
        }
        else{
            actions.postSignup(formData)
            if(store.token){
                setredirect(true)
            } 
        }
        
    }
  return (
    
    <div className='w-50 mx-auto'>
     
     {error && (<button className="btn btn-warning w-100">Faltan datos por rellenar</button> ) }
        <h1 className='text-center'>Formulario de Registro</h1>
        {store.success == true && (
                <button className="btn btn-success w-100">{store.msg}</button> 
             ) }
        {store.success == false && (
                <button className="btn btn-warning w-100">{store.msg}</button>
             ) }
             
      <form onSubmit={handleSubmit}>
             <div className="form-group m y-4">
             <label className="my-1" htmlFor="email">Email:</label>
             <input className="form-control" type="email" id="email" name="email" value={formData.email} onChange={handleOnChange} placeholder="Introduce el email.."/>
             </div>
             <div className="form-group">
             <label className="my-1" htmlFor="password">Password:</label>
             <input className="form-control" type="password" id="password" name="password" value={formData.password} onChange={handleOnChange} placeholder="Introduce el password.."/>
             </div>
             <input type="submit" className="btn btn-primary my-4 w-100" value={"Enviar Registro"}/>
             
             
         </form>
         <button className='btn btn-dark w-100' onClick={()=>setIsRegister(false)}>Volver a Login</button>
            
         
    </div>
  )
}


export default signup
