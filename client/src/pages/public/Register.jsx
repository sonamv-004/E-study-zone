import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
 const[data,setData]= useState({
  name:'',
  email:'',
  password:'',
  qualification:'',
  role:''
 })
 const handleChange=(e)=>{
  setData(()=>({...data,[e.target.name]:e.target.value}))
 }
 const handleSubmit=async(e)=>{
  e.preventDefault();
  try{
    const res=axios.post('http://localhost:5000/api/user/register',data)
    window.alert("Registeration Successfully")
  }
  catch(error){
 console.log(error)
 alert("sorry try again")
  }
 }

  return (
<>
  <div className="container-fluid">
    <div className="row mt-5">
      <div className="col-sm-3 mx-auto box">
        <form onSubmit={handleSubmit} >
      <h2 className="title">Register</h2>

      <input type="text" placeholder="Enter Name"  name='name' onChange={handleChange}  required/><br/><br/>

      <input type="email" placeholder="Enter Email"  name='email' onChange={handleChange}  required/><br/><br/>

      <input type="password" placeholder="Enter Password" name='password'  onChange={handleChange}  required/><br/><br/>
 <input type="qualification" placeholder="Enter Qualification" name='qualification'  onChange={handleChange}  required/><br/><br/>

      {/* <!-- Select Dropdown --> */}
      <select className="input" name='role' required onChange={handleChange}>
        <option >Select Role</option>
        <option value="Trainer">Trainer</option>
        <option value="Learner">Learner</option>
      </select><br/><br/>

      <button type="submit" className="btn btn-warning">Register</button>
    </form>
      </div>
    </div>
  </div>

</>
  
  )
}

export default Register