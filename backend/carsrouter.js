const express=require('express')
const router=express.Router()
const Cars=require('./model/Car')
const fs=require('fs')

const cars=JSON.parse(fs.readFileSync(`${__dirname}/spinny.json`),'utf-8')

const createCar=async(req,res)=>{
    
    // const {year,manufacturer,model,price,mileage,fuel,transmission,image,color}=req.body

    // const result=await Cars.create({year,manufacturer,model,price,mileage,fuel,transmission,image,color})
  const result=await Cars.create(cars)

    res.json({
        status:'success',
    result
    })
}

const getAllCars=async(req,res)=>{
    const {m,y}=req.query
    
     let cars=await Cars.find()
     if(y){
        cars=cars.filter(car=>car.year.includes(y))
     }
     if(m){
        cars=cars.filter(car=>car.manufacturer.toLowerCase().includes(m))
     }
    
    res.json({
        status:'success',
        total:cars.length,
        cars
    })
}

const getFeature=async(req,res)=>{
    const cars=await Cars.find({featured:true})
    
    res.json({
        cars
    })
}

const deleteCar=async (req,res)=>{
    
    const cars=await Cars.findByIdAndDelete(req.params.id)
    
    res.json({
        status:'success'
    })
}

const editCar=async(req,res)=>{

    const {image,manufacturer,price,fuel,transmission}=req.body
    const result=await Cars.findByIdAndUpdate(req.params.id,{
        image,manufacturer,fuel,price,transmission
    })
    res.json({
        status:'success'
    })
}

const getCar=async(req,res)=>{
    const car=await Cars.findById(req.params.id)
    res.json({
        car
    })
}

router.get("/car/:id",getCar)
router.post('/',createCar)
router.get('/',getAllCars)
router.get('/feature',getFeature)
router.delete('/:id',deleteCar)
router.put('/:id',editCar)

module.exports=router