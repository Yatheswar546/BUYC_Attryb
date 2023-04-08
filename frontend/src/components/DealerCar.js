import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
export default function DealerCar() {
  const [cars, setCars] = useState([]);
  const [show, setShow] = useState(false);
  const [edit,setEdit]=useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id,setId]=useState('')
  const [manufacturer, setManufacturer] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [fuel, setFuel] = useState('');
  const [transmission, setTransmission] = useState('');

  async function datafetch() {
    const res = await axios.get('https://buyc-attryb-api.onrender.com/api/cars');

    setCars(res.data.cars);
  }
async function handleCreate(){
  setManufacturer('')
  setImage('')
  setPrice('')
  setFuel('')
  setTransmission('')
setEdit(false)

  setShow(true)
}
  async function AddCar(){
  const res=await axios.post('https://buyc-attryb-api.onrender.com/api/cars',{
    image,price,fuel,manufacturer,transmission
  })
  console.log(res)
  if(res.data.status==='success'){
    window.location.reload(true)
  }
  }

 async  function EditCar(){
const res=await axios.put(`https://buyc-attryb-api.onrender.com/api/cars/${id}`,{
  fuel,price,transmission,image,manufacturer
})
if(res.data.status==='success'){
  window.location.reload(true)
}
  }
  const carsContainer = cars.map((car, index) => {
    const handleDelete = async (e, id) => {
      e.preventDefault();

      const res = await axios.delete(`https://buyc-attryb-api.onrender.com/api/cars/${id}`);

      if (res.data.status === 'success') {
        window.location.reload(true);
      }
    };

const handleEdit=async(e,id)=>{
  setManufacturer(car.manufacturer)
  setImage(car.image)
  setPrice(car.price)
  setFuel(car.fuel)
  setTransmission(car.transmission)
setEdit(true)
setId(id)
  setShow(true)
}

    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{car.manufacturer}</td>
        <td>
          <img src={car.image} alt='' />
        </td>
        <td>{car.price}</td>
        <td>{car.fuel}</td>
        <td>{car.transmission}</td>
        <td>
          <button
            href=''
            className='edit'
            style={{ outline: 'none', border: 'none' }}
            onClick={e=>handleEdit(e,car._id)}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            href=''
            className='delete'
            style={{ outline: 'none', border: 'none' }}
            onClick={(e) => handleDelete(e, car._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  useEffect(() => {
    datafetch();
  }, []);

  return (
    <>
      <main className='buyone-car'>
        <div className='dealer-sellcar'>
          <div className='content'>
            <h2 className='page-title'>Car Details</h2>

            <div className='button-group'>
              <button href='' className='dealer-btn' onClick={handleCreate}>
                Add Car
              </button>
            </div>

            <table className='dealer-cars'>
              <tr>
                <th>S. No.</th>
                <th>Manufacturer</th>
                <th>Image</th>
                <th>price</th>
                <th>Fuel</th>
                <th>Transmission</th>
                <th colSpan='2'>Action</th>
              </tr>
              <tbody>{carsContainer}</tbody>
            </table>
          </div>
        </div>
      </main>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Car Details </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control
                type='text'
                required
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                required
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>{' '}
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='text'
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>{' '}
            <Form.Group>
              <Form.Label>Fuel</Form.Label>
              <Form.Control
                type='text'
                required
                value={fuel}
                onChange={(e) => setFuel(e.target.value)}
              />
            </Form.Group>{' '}
            <Form.Group>
              <Form.Label>Transmission</Form.Label>
              <Form.Control
                type='text'
                required
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          {edit ? 
          <Button variant='primary' onClick={EditCar} >Edit Car</Button>
          :
          <Button variant='primary' onClick={AddCar}>
            Add Car
          </Button>}
        </Modal.Footer>
      </Modal>
    </>
  );
}
