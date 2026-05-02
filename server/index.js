const express=require('express')
const cors=require('cors')
const MongoDB=require('./config/db')
const dotenv=require('dotenv')
const ratelimit=require('express-rate-limit')
const cluster=require('cluster')
const os=require('os')
dotenv.config()
if(cluster.isPrimary){
    for(i=1;i<=os.availableParallelism();i++){
        cluster.fork();
    }
    cluster.on('fork',(worker)=>{
        console.log(worker.process.pid)
    })
}
else{
const app=express()
app.use(cors())
app.use(express.json())
MongoDB();
const a=ratelimit({
    windowMs:1000*60,
    limit:5,
    message:"Limit exceed"

})
app.use(a)
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
}
