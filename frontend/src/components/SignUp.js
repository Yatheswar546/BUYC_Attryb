import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function SignUp() {
    const [username,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phonenumber,setPhonenumber]=useState('')
    const [password,setPassword]=useState('')
    const [confirmpassword,setConfirmpassword]=useState('')
    const navigate=useNavigate()
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const res=await axios.post('http://localhost:5000/api/users/signup',{
        name:username,email,phonenumber,password,confirmpassword
        })
        if(res.data.status==='success'){
        localStorage.setItem('profile',JSON.stringify(res.data.newUser))
        localStorage.setItem('token',res.data.token)
        navigate('/')
        }else{
            alert('something happened ! try again carefully !')
        }
    }
  return (
    <>
        <div className='form'>
            <h1>Register</h1>
            <form >
                <div>
                <h5>Username</h5>
                <input type='text' value={username} onChange={e=>setName(e.target.value)}  required />
                </div>
                
                <div>
                <h4>Email</h4>
                <input type='email' value={email} onChange={e=>setEmail(e.target.value)} required/>
                </div>
                
                <div>
                <h4>Phone No.</h4>
                <input type='text' value={phonenumber} onChange={e=>setPhonenumber(e.target.value)}  required/>
                </div>

                <div>
                <h4>Password</h4>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)} required />
                </div>

                <div>
                <h4>Confirm Password</h4>
                <input type='password' value={confirmpassword} onChange={e=>setConfirmpassword(e.target.value)}  required/>
                </div>

                <div  className='btn' onClick={handleSubmit}>Register</div>

                <div>
                    <p>Already Registered ? <a href='login'>Login</a></p>
                </div>
            </form>
        </div>
    </>
  )
}
