const express=require('express')
const app=express();
const carsRouter=require('./carsrouter')
const userRouter=require('./userrouter')
const cors=require('cors')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
// app.get('/api/',(req,res)=>{
//     res.end('hello')
// })

// app.post('/api',(req,res)=>{
//     res.json({
//         status:"success"
//     })
// })

app.use('/api/cars',carsRouter)
app.use('/api/users',userRouter)


module.exports=app