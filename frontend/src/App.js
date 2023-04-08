import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import BuyCarPage from './pages/BuyCarPage'
import DealerPage from './pages/DealerPage'
import PrivateRoute from './components/privateRoute'
import SingleCar from './pages/SingleCar'
import OEM from './pages/OEM'
export default function App() {
  const router=createBrowserRouter([
   {
    path:'/',
    element:<HomePage/>
   },{
    path:'login',
    element:<LoginPage/>
   
   },{
    path:'signup',
    element:<SignUpPage/>
   },{
    
    path:'buycar',
    element:<BuyCarPage/>
   },{
    path:'dealer',
    element:<DealerPage/>
   },{
    path:'car/:id',
    element:<SingleCar/>
   },{
    path:'oem',
    element:<OEM/>
   }
  ])
  return (
    <>
    
    <RouterProvider router={router}/>

   


    </>
  )
}
