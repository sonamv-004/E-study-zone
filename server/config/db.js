const mongoose=require('mongoose')
const MongoDB=()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("db connected successfully")
    })
    .catch(()=>{
        console.log("try again")
    })
}
module.exports=MongoDB