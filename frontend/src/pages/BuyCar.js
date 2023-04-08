import React from 'react'
import Navbar from '../components/Navbar'
import Cars from '../components/Cars'
import Filters from '../components/Filters'
import Footer from '../components/Footer'
export default function BuyCar() {
  return (
    <>
        <Navbar/>
        <div>
          <Filters/>
          <Cars/>
        </div>
        
    </>
  )
}
