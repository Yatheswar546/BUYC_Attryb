import React, { useEffect, useState } from 'react';

import axios from 'axios';

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [message, setMessage] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [year, setYear] = useState('');
  async function datafetch() {
    const res = await axios.get(
      `https://buyc-attryb-api.onrender.com/api/cars?m=${manufacturer}&y=${year}`
    );
    // console.log(res.data.cars)

    setCars(res.data.cars);

    if (res.data.total == 0) {
      setMessage('no cars available');
    } else {
      setMessage('');
    }
  }

  const carsContainer = cars.map((car, index) => {
    return (
      <div className='card' key={index}>
        <img src={car.image} alt='' />
        <p className='text-title'>
          {car.year} {car.manufacturer} {car.model}
        </p>
        <h4>
          {car.mileage / 1000} km , {car.fuel}, {car.transmission}
        </h4>
        <h3>
          <i className='fa-solid fa-indian-rupee-sign'></i>
          {car.price / 100000} Lakh
        </h3>
        <h5></h5>
        <a href={`car/${car._id}`} className='button'>
          Buy Car
        </a>
      </div>
    );
  });
  useEffect(() => {
    datafetch();
  }, [manufacturer, year]);
  return (
    <>
      <div className='cars ' id='cars'>
        <div className='container'>
          <div className='car-section  '>
            <div className='heading'>
              <h1>Cars</h1>
              <p style={{visibility:'hidden'}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus, cupiditate?
              </p>
            </div>
            <div className='d-flex w-100 justify-content-around'>
              <div>
                <input
                  type='text'
                  className='input-bar'
                  value={manufacturer}
                  placeholder='Search by manufacturer'
                 
                  onChange={(e) => setManufacturer(e.target.value)}
                />
              </div>
              <div>
                <input
                  type='text'
                  className='input-bar'
                  value={year}
                  placeholder='Search by year'
                  onChange={(e) => setYear(e.target.value)}
                />
              </div>
            </div>
            <p className='mt-3' style={{ fontSize: '23px' }}>
              {cars.length} cars available
            </p>
            {message.length > 0 ? (
              <p className='mt-5 text-center' style={{fontSize:'24px',color:'red',textTransform:'uppercase'}}> {message}</p>
            ) : (
              <div className='content'>{carsContainer}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
