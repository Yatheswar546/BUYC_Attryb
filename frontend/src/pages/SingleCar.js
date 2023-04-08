import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function SingleCar() {
    const {id}=useParams()
    const [car,setCar]=useState({})

async function datafetch(){
    const res=await axios.get(`https://buyc-attryb-api.onrender.com/api/cars/car/${id}`)
    setCar(res.data.car)
}

    useEffect(()=>{
        datafetch()
    },[])
  return (
   <>
    <Navbar/>
    <div>
    <main className="buyone-car">
        <div className="cars" id="cars">
            <div className="container">
                <div className="heading">
                    <h1>Buy Car</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, cupiditate?</p>
                </div>
                <div className="car-section">
                    <div className="content">
                        <div className="card">
                            <img src={car.image} alt=""/>
                            <p className="text-title">{car.manufacturer} {car.model} {car.year}</p>
                            <h4>{car.mileage/1000}K km , {car.fuel}, {car.transmission}</h4>
                            <h3><i className="fa-solid fa-indian-rupee-sign"></i>{car.price/100000} Lakh</h3>
                            <h5></h5>
                            <a href="" className="button">Buy Car</a>
                        </div>
                    </div>
                    <table className="one-car">
                        <tr>
                            <th>KMs</th>
                            <th>Major Scratches</th>
                            <th>Original Paint</th>
                            <th>No. of Acciendts reported</th>
                            <th>No. of previous Buyers</th>
                            <th>Registration Plate</th>
                        </tr>
                        <tr>
                            <td>3000</td>
                            <td>None</td>
                            <td>Red</td>
                            <td>3</td>
                            <td>1</td>
                            <td>AP 10 Z 2456</td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
    </main>
    </div>
    <Footer />
   </>
  )
}
