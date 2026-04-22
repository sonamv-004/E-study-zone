const express=require('express')
const cors=require('cors')
const MongoDB=require('./config/db')
const dotenv=require('dotenv')
dotenv.config()
const app=express()
app.use(cors())
app.use(express.json())
MongoDB();
// api started

app.use('/api/user',require('./routes/userRoutes'))
app.use('/api/admin',require('./routes/adminRoutes'))
app.use('/api/skill',require('./routes/skillRoutes'))
app.use('/api/content',require('./routes/contentRoutes'))
app.use('/api/handshake',require('./routes/handshakeRoutes'))
//api ended
app.listen(process.env.PORT,()=>{
    console.log("server is running on http://localhost:5000")
})