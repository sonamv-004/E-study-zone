const express=require('express')
const User=require('../models/User')
const routes=express.Router()
const jwt=require('jsonwebtoken')
const sendEmail=require('../utils/Email')
//for user registration
routes.post('/register',async(req,res)=>{
    try{
        const{name,email,password,qualification,role}=req.body;
        const user=await User.findOne({email:email})
        if(user){
            return res.json({msg:"User already registered"})
        }
        const data=await new User({
            name:name,
            email:email,
            password:password,
            qualification:qualification,
            role:role
        })
        data.save()
        res.json({msg:"user registered"})
        let `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E Study Zone - Registration</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background: linear-gradient(to right, #4facfe, #00f2fe);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            background: #fff;
            padding: 30px;
            width: 350px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .container h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
        }

        .form-group {
            margin-bottom: 15px;
        }

        label {
            font-size: 14px;
            color: #555;
        }

        input {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        input:focus {
            border-color: #4facfe;
            outline: none;
        }

        .btn {
            width: 100%;
            padding: 10px;
            background: #4facfe;
            border: none;
            color: white;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }

        .btn:hover {
            background: #00c6ff;
        }

        .footer {
            text-align: center;
            margin-top: 10px;
            font-size: 13px;
        }

        .footer a {
            color: #4facfe;
            text-decoration: none;
        }

    </style>
</head>
<body>

    <div class="container">
        <h2>E Study Zone</h2>

        <form action="/register" method="POST">
            
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" name="name" placeholder="Enter your name" required>
            </div>

            <div class="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="Enter your email" required>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="Create password" required>
            </div>

            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" placeholder="Confirm password" required>
            </div>

            <button type="submit" class="btn">Register</button>

        </form>

        <div class="footer">
            Already have an account? <a href="#">Login</a>
        </div>
    </div>

</body>
</html>
        
        `
        setTimeout(()=>{
            sendEmail("Registration on E-study-zone",email,a)
        },100)
    }
    catch(error){
        console.log(error)
     res.json({msg:"user not registered"})
    }
})
//get user by user id
routes.get('/getuser/:id',async(req,res)=>{
    try{
        const data = await User.findById(req.params.id)
        return res.json({msg:"data fetched",data:data})
    }
    catch(error){
        console.log(error)
        res.json({msg:"user not fetched"})
    }
})

//get all user
routes.get('/getuser',async(req,res)=>{
    try{
        const data = await User.find({status:"active"}).lean()
        res.json({msg:"user fetched",data:data})
    }
    catch(error){
        console.log(error)
        res.json({msg:"user not fetched"})
    }
})

//get all inactive user
routes.get('/getuser/all/inactive',async(req,res)=>{
    try{
        const data = await User.find({status:"inactive"})
        res.json({msg:"user fetched",data:data})
    }
    catch(error){
        console.log(error)
        res.json({msg:"user not fetched"})
    }
})

// routes for block  the user
routes.get('/block/:id',async(req,res)=>{
    try{
        const data= await User.findByIdAndUpdate(req.params.id,{status:"inactive"})
        res.json({msg:"user blocked successfully"})
    }
    catch(error){
        console.log(error)
        res.json({msg:"sorry try again later"})
    }
})

routes.get('/unblock/:id',async(req,res)=>{
    try{
        const data= await User.findByIdAndUpdate(req.params.id,{status:"active"})
        res.json({msg:"user blocked successfully"})
    }
    catch(error){
        console.log(error)
        res.json({msg:"sorry try again later"})
    }
})
 //login api 
 routes.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body
        const data=await User.findOne({email:email})
        if(!data){
       return res.json({msg:"Email is incorrect"})
        }
        if(data.password==password){
            const token=jwt.sign({id:data._id},process.env.JWT_SECRET,{expiresIn:"1d"})
            res.json({msg:"Login successfully",data:{
                token,
                id:data._id,
                role:data.role,
                email:data.email,
                name:data.name
            }});
        }
        else{
            return res.json({msg:"Incorrect password"})
        }
        
    }
    catch(error){
        console.log(error)
        res.json({msg:"sorry try again"})
    }
 })
routes.patch('/changepassword/:id',async(req,res)=>{
    const {op , np , cnp} = req.body
    try{
        const user = await User.findOne({_id:req.params.id})
        if(!user){
            return res.json({msg:"Id not matched"})
        }
        if(op==np){
            return res.json({msg:"old password and new password are same "})
        }

        else{
            if(op==user.password){
                if(np==cnp){
                    const data = User.findByIdAndUpdate(req.params.id,{password:cnp},{new:true})
                    res.json({msg:"Password Changed Successfully"})
                }
            }else{
                return res.json({msg:"Your old password are not matched"})
            }
        }
    }
    catch(er){
        console.log(er);
        res.json({msg:"Server error"})
        
    }
});

module.exports=routes