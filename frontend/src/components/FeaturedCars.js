import React, { useEffect,useState } from 'react'

import axios from 'axios'
export default function FeaturedCars() {
    const [cars,setCars]=useState([])
async function datafetch(){
    const cars=await axios.get('http://localhost:5000/api/cars/feature')
    setCars(cars.data.cars)
}

const carsContainer=cars.map((car,index)=>{
    return (
        <div className="card" key={index}>
        <img src={car.image}alt=""/>
        <p className="text-title">{car.year} {car.manufacturer} {car.model}</p>
        <h4>{car.mileage/1000} km , {car.fuel}, {car.transmission}</h4>
        <h3><i className="fa-solid fa-indian-rupee-sign"></i>{car.price/100000} Lakh</h3>
        <h5></h5>
        <a href={`car/${car._id}`}  className="button">Buy Car</a>
    </div>
    )
})

    useEffect(()=>{
        datafetch()
    },[])
  return (
   <>

<div className="cars" id="cars">
        <div className="container">
            <div className="car-section">
                <div className="heading">
                    <h1 style={{paddingLeft:'0'}}>Featured Cars</h1>
                    <p className='' style={{visibility:'hidden'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, cupiditate?</p>
                </div>
                <div className="content">
                    {carsContainer}
                </div>
            </div>
        </div>
    </div>


   
   </>
  )
}
