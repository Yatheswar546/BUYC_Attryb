const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config() //calling .env file
const db=process.env.MONGODB;
const app=require('./app')
const port=process.env.PORT || 5000
mongoose.connect(db,{useNewUrlParser:true}).then(()=>{
    app.listen(port,()=>{
        console.log('listening')
    })
})