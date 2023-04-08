const express=require("express")
const router=express.Router()
const User=require('./model/User')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const signtoken = (id) => {
  
    return jwt.sign({ id }, process.env.JWTSECRET, {
      expiresIn: '1h',
    });
  };

const signup=async (req,res)=>{
    var {name,email,password,confirmpassword,phonenumber}=req.body
    if(password!==confirmpassword){
        return res.json({
            message:'password does not match'
        })
    }
    password=await bcrypt.hash(password,10)
    
    const newUser=await User.create({name,email,password,phonenumber})
    const token=signtoken(newUser._id)
    res.json({
        status:'success',
        token,
        newUser
    })
}

const login=async (req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user){
        return res.json({
            message:'User does not exist'
        })
    }

    if(user && (await bcrypt.compare(password,user.password))){
        const token=signtoken(user._id)
        res.json({
            status:'success',
            token,
            user
        })
    }else{
        res.json({
            status:'fail',
            message:'password does not match'
        })
    }
}

router.post('/signup',signup)
router.post('/login',login)

module.exports=router