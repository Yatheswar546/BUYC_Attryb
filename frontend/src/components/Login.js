import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'  

export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const res=await axios.post('http://localhost:5000/api/users/login',{
        email,password
        })
        
        if(res.data.status==='success'){
        localStorage.setItem('profile',JSON.stringify(res.data.user))
        localStorage.setItem('token',res.data.token)
        navigate('/')
        }else{
            alert('something happened ! try again carefully !')
        }
    }
  return (
    <>
        <div className='container d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
            <div className='card' style={{maxWidth:'380px'}}>
                <div className='card-body w-100'>
                <h2 className='text-center'>Login</h2>
                <form>
                    <div className='form-group mt-2'>
                        <label className='form-label'>Email:</label> 
                        <input type='text' className='form-control' value={email} onChange={e=>setEmail(e.target.value)} required />
                    </div> 
                    <div className='form-group mt-3 '>
                        <label className='form-label'>Password:</label> 
                        <input type='password' className='form-control' value={password} onChange={e=>setPassword(e.target.value)} required />
                    </div>
                    <div className='btn btn-primary w-100 my-3' onClick={handleSubmit}>Login</div>
                </form>
                <div >
                    <p>Doesn't have an account? <a href='signup' className='btn btn-link'>Signup</a></p>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
