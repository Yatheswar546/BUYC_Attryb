import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function LoginPage() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigate=useNavigate()
const handleSubmit=async (e)=>{
    e.preventDefault()
    const res=await axios.post('https://buyc-attryb-api.onrender.com/api/users/login',{
        email,password
    })
    if(res.data.status==='success'){
        localStorage.setItem('profile',JSON.stringify(res.data.user))
        localStorage.setItem("token",res.data.token)
        navigate("/")
    }else{
        alert('something happened! try again !!!')
    }
}

  return (
  <>
  <Navbar/>
  
  <div>
  <div className="login-container">
        <div className="loginbox">
            <h1>Login Here</h1>
            
            <form onSubmit={handleSubmit}>
               
                <input type="text"  placeholder="Enter Email"  value={email} onChange={e=>setEmail(e.target.value)} required/>
            
                <input type="password"  placeholder="Enter Password" value={password} onChange={e=>setPassword(e.target.value)} required/>
                <input type="submit"  value="Login"/>
               
                <a href="signup">Haven't registered?Register</a>
            </form>
        </div>
    </div>
  </div>
  
  </>
  )
}
