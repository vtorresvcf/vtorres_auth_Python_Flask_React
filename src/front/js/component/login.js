import React,{useContext, useEffect, useState} from 'react'
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

const login = ({setIsRegister}) => {
    const navigate = useNavigate()

    const {store,actions} = useContext(Context)
    const [formData, setFormData] = useState({email:"", password:""})
    const [error, setError] = useState(false)
    const [redirect, setRedirect] = useState()
	

    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if ([formData.email && formData.password].includes("")){
            setError(true)
            return 
        } else{
            
            actions.postLogin(formData)
             if(store.success == true ){
               
                setRedirect(true)
               
             }
            
        }
        
               
           
        
    }
    useEffect(()=>{
        if(redirect == true){
            setTimeout(()=>{
                navigate("/pageprivate")
            },2000)
        }
        
    }, [redirect])
        
  return (
    <div className='w-50 mx-auto'>
        <h1 className='text-center'>Formulario de Login</h1>
        {store.success && (
        <button className="btn btn-success w-100">{store.msg}</button> 
     ) }
     
     {error && (<button className="btn btn-warning w-100">Faltan datos por rellenar</button> ) }
      <form onSubmit={handleSubmit}>
             <div className="form-group m y-4">
             <label className="my-1" htmlFor="email">Email:</label>
             <input className="form-control" type="text" id="email" name="email" value={formData.email} onChange={handleOnChange} placeholder="Introduce el email.."/>
             </div>
             <div className="form-group">
             <label className="my-1" htmlFor="password">Password:</label>
             <input className="form-control" type="password" id="password" name="password" value={formData.password} onChange={handleOnChange} placeholder="Introduce el password.."/>
             </div>
             <input type="submit" className="btn btn-primary my-4" value={"Iniciar sesión"}/>
         </form>
        
             <p>No estás registrado? <button onClick={()=>setIsRegister(true)}>Registrarse</button></p>
         
    
    </div>
  )
}


export default login
