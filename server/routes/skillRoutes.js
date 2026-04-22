const express=require('express')
const routes=express.Router()
const jwt=require('jsonwebtoken')
const Skill = require('../models/Skill')
routes.post('/addskill',async(req,res)=>{
    try{
        const{skill,description}=req.body;
        const data=await Skill.findOne({skill:skill});
        if(data){
            return res.json({msg:"Already exits skill"})
        }
        const Skilladd=await new Skill(req.body);
        Skilladd.save();
        res.json({msg:"Data save successfully"})
    }
    catch(error){
        console.log(error)
        res.json({msg:"Try again"})
    }
            
})
// fetch all skills
routes.get('/skills',async(req,res)=>{  
    try{
        const skills=await Skill.find();
        res.json(skills)
    }
    catch(error){
        console.log(error)
        res.json({msg:"Error fetching skills"})
    }

})
// optional get by id 
routes.get('/skills/:id',async(req,res)=>{
    try{
        const skill=await Skill.findById(req.params.id)
        if(!skill)return
        res.status(404).json({msg:"skill not found"})
        res.json(skill)
    }
    catch(error){
        console.log(error)
        res.json({msg:"Error fetching skill"})
    }
})
routes.delete('/skills/:id',async(req,res)=>{
    try{
        const skill=await Skill.findByIdAndDelete(req.params.id)
        res.json({msg:"skill deleted successfully"})
    }
    catch(error){
        console.log(error)
        res.json({msg:"Error Deleting skill"})
    }
})
// find skill by  userid
routes.get('/getskill/:id',async(req,res)=>{
    try{
        const data=await Skill.find({userId:req.params.id})
        
        res.json({msg:"skill not found",data:data})
       
    }
    catch(error){
        console.log(error)
        res.json({msg:"Try again"})
    }
})

  
module.exports=routes