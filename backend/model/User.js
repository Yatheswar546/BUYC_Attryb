const mongoose=require('mongoose')

const schema=mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    phonenumber:{
        type:String,
        length:10,
    },
    password:{
        type:String,
        required:true,
        
    },
    role:{
        type:String,
        default:'Customer'
    },
    email:{
        type:String,
        unique:true,
        required:true
        
    }
},{timestamps:true})

module.exports=mongoose.model('User',schema)