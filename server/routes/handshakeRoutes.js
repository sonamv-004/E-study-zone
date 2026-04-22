const express=require('express')
const routes=express.Router()
const Handshake=require('../models/Handshake')
routes.post('/request/:id',async(req,res)=>{
    const {trainerId,learnerId,status}=req.body
    try{
        const data=await new Handshake({
            trainerId:req.params.id,
            learnerId:learnerId,
            status:status
        })
        data.save()
        res.json("request send successfully")
    }
    catch(er){
console.log(error)
res.json("Sorry")
    }
})
routes.get('/:id',async(req,res)=>{
    const data=await Handshake.find({trainerId:req.params.id}).populate('learnerId')
    res.json(data)
})
routes.patch('/:id',async(req,res)=>{
    const data=await Handshake.findByIdAndUpdate(req.params.id,{status:"accept"})
    res.json("request accepted ")
})
routes.patch('/:id',async(req,res)=>{
    const data=await Handshake.findByIdAndUpdate(req.params.id,{status:"reject"})
    res.json("request rejected ")
})
module.exports=routes