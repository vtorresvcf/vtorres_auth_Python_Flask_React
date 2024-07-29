import React, { useEffect,useState, useContext} from 'react'
import { Context } from "../store/appContext";


import { useNavigate } from 'react-router-dom';


const pageprivate = () => {
  const {actions} = useContext(Context)
  const navigate = useNavigate()
  const checkToken = async () => {
    const status = await actions.checkToken(localStorage.getItem('token'))
    if (!status.success) navigate('/')
    }

  useEffect(()=>{
    checkToken()
  },[])

  return (
    <div>
      <h1 className='text-center'>Has accedido a una página privada</h1>
    </div>
  )
}

export default pageprivate
