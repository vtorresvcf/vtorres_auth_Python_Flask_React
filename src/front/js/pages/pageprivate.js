import React, { useEffect,useState} from 'react'


import { useNavigate } from 'react-router-dom';

//pendiente PWC PAGINA PRIVADA, ARREGLAR SESION LOGIN Y OPCION DE QUITAR TOKEN
const pageprivate = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState("")
  useEffect(()=>{
    if ((localStorage.getItem('token') == "") || (localStorage.getItem('token')== undefined)){
      return navigate('/')
    }  else {
      setToken(localStorage.getItem('token'))
    }
  },[token])

  return (
    <div>
      <h1 className='text-center'>Has accedido a una página privada</h1>
    </div>
  )
}

export default pageprivate
