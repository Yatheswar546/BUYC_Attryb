import React, { useEffect ,useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
export default function OEM() {

    const [cars,setCars]=useState([])

    async function datafetch(){
        const cars=await axios.get('https://buyc-attryb-api.onrender.com/api/cars')
        setCars(cars.data.cars)
    }

    useEffect(()=>{
        datafetch()
    },[])


const carsContainer=cars.map((car,index)=>{
    return (
        <tr key={index}>
            <td>{car.manufacturer} {car.model}</td>
            <td>{car.year}</td>
            <td>{car.price}</td>
            <td>{car.color}</td>
            <td>{car.mileage}</td>
            <td>1200</td>
            <td>90</td>
            <td className="buy-btn"><a href={`car/${car._id}`} style={{textDecoration:'none',color:'white'}}>Buy</a></td>
        </tr>
    )
})

  return (
    <>

        <Navbar/>
            <div>
                <div className="oem-cars" id="cars">
                    <div className="container">
                        <div className="car-section">
                            <div className="heading">
                                <h1>OEM_Specs</h1>
                                {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, cupiditate?</p> */}
                            </div>
                            <div className="content">
                                <table className="oem-specs">
                                    <tr>
                                        <th>Name</th>
                                        <th>Year</th>
                                        <th>Price</th>
                                        <th>Available Colors</th>
                                        <th>Mileage</th>
                                        <th>Power(BHP)</th>
                                        <th>Max. Speed</th>
                                        <th>Action</th>
                                    </tr>
                                 {carsContainer}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {/* <Footer/> */}

    </>
  )
}
