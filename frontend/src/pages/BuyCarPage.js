import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Filters from '../components/Filters'
import Cars from '../components/Cars'
export default function BuyCarPage() {
  return (
    <>
    <Navbar/>
  <div style={{paddingTop:'80px'}}>
    <Cars/>
  </div>
    
  <Footer />
    </>
  )
}
