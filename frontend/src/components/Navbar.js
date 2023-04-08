import React, { useEffect } from 'react'
import decode from 'jwt-decode'
export default function Navbar() {
  const user=JSON.parse(localStorage.getItem('profile'))|| null;

  function handleLogout(){
    localStorage.clear()
    window.location.reload(true)
  }


  useEffect(()=>{
   let token=localStorage.getItem('token') ||null;

   if(token){
  if(decode(token).exp*1000< new Date().getTime()) handleLogout()
   }
  },[])
  return (
    <>
    <div>
    <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars"></i>
        </label>
        <label className="logo">BUYC</label>
        <ul>
            <li><a href="/" className="">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="/buycar">Buy Car</a></li>
            {user ? <>
            {user.role==='Dealer' && 
            <>
            <li><a href="/dealer">Sell Car</a></li>
            <li><a href='/oem'>OEM</a></li>
            </>
            }
            <li><a href='#'>{user.name}</a></li>
            <li><button style={{border:'none',background:'transparent' ,color:'white',fontSize:'20px'}} onClick={handleLogout} >LOGOUT</button></li>
            </> :
            <li><a href="/login">Login</a></li>}
        </ul>

    </nav>
    </div>
   
    </>
  )
}
