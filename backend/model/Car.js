const mongoose=require('mongoose')
const schema=mongoose.Schema({
    year:{
        type:String,
    },
    manufacturer:String,
    model:String,
    price:String,
    mileage:String,
    fuel:String,
    transmission:String,
    image:String,
    color:String,
    sold:{
        type:Boolean,
        default:0
    },
    featured:{
        type:Boolean,
        default:0
    }
},{timestamps:true})

const model=mongoose.model('Cars',schema)

module.exports=model