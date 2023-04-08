import React from 'react'
import { Navigate } from 'react-router-dom';
export default function PrivateRoute({children}) {
    const user=JSON.parse(localStorage.getItem('profile'))|| null;

 if(user && user.role==='Dealer') return <Navigate to='dealer'/>
 return children
}
