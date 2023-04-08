import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function SignupPage() {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [phonenumber,setPhonenumber]=useState("")
const [password,setPassword]=useState('')
const [confirmpassword,setConfirmpassword]=useState("")
const navigate=useNavigate()
const handleSubmit=async (e)=>{
    e.preventDefault()
    const res=await axios.post('https://buyc-attryb-api.onrender.com/api/users/signup',{
        name,email,password,phonenumber,confirmpassword
    })
    if(res.data.status==='success'){
        localStorage.setItem('profile',JSON.stringify(res.data.newUser))
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
  <div className="register-container">
        <div className="register">
            <h1 className='text-center'>Registration</h1>
           
            <form onSubmit={handleSubmit}>
               
                <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter Name" required />
        
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter Email"  required  />
            
                <input type="text" value={phonenumber} onChange={e=>setPhonenumber(e.target.value)} placeholder="Enter Phone No."   required />
     
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter Password"  required  />
             
                <input type="password" value={confirmpassword} onChange={e=>setConfirmpassword(e.target.value)} placeholder="Confirm Password"  required  />
                <input type="submit"  value="Register"/>
                <p>Already Registered ? <a href="login">Login</a></p>
            </form>
        </div>
    </div>
  </div>
  
  </>
  )
}
