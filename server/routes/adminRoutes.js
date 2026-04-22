const express=require('express')
const Admin=require('../models/Admin')
const routes=express.Router()
const jwt=require('jsonwebtoken')
routes.post('/register',async(req,res)=>{
    try{
        const{email,password}=req.body
        const data=await Admin.findOne({email:email})
        if(data){ 
            return res.json({msg:"duplicate email"})
        }
        const user=await new Admin(req.body)
        user.save()
        res.json({msg:"admin registered"})
    }
    catch(error){
        console.log(error)
        res.json({msg:"sorry try again later"})
    }
}
)

//for login
routes.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body
        const isExist=await Admin.findOne({email:email})
        if(!isExist){
            return res.json({msg:"data not matched"})
        }
        if(isExist.password==password){
            const token=jwt.sign({id:isExist._id},process.env.JWT_SECRET,{expiresIn:"1d"});
            res.json({msg:"Login Successfully",data:{
                token:token,
                email:isExist.email,
                id:isExist._id,
                role:"admin"
            }})
        }
        else{
            res.json({msg:"Incorrect password"})
        }
    }
    catch(error){
        console.log(error)
        res.json({msg:"Sorry try again "})
    }
})


module.exports=routes