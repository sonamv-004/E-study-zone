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
    const res=await axios.post('http://localhost:5000/api/user/register',data)
    window.alert("Registeration Successfully")
  }
  catch(error){
    console.log(error)
    alert("sorry try again")
  }
 }

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        .register-container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .register-card {
          background: #fff;
          padding: 35px;
          border-radius: 15px;
          width: 350px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          text-align: center;
          animation: fadeIn 0.5s ease-in-out;
        }

        .register-card h2 {
          margin-bottom: 5px;
          color: #333;
        }

        .register-card p {
          margin-bottom: 20px;
          color: #777;
          font-size: 14px;
        }

        .register-card input,
        .register-card select {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 1px solid #ddd;
          outline: none;
          transition: 0.3s;
        }

        .register-card input:focus,
        .register-card select:focus {
          border-color: #667eea;
          box-shadow: 0 0 5px rgba(102,126,234,0.5);
        }

        .register-card button {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: #667eea;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        .register-card button:hover {
          background: #5a67d8;
          transform: translateY(-2px);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          } 
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="register-container">
        <div className="register-card">
          <h2>Welcome 👋</h2>
          <p>Create your account</p>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" name='name' onChange={handleChange} required />

            <input type="email" placeholder="Email Address" name='email' onChange={handleChange} required />

            <input type="password" placeholder="Password" name='password' onChange={handleChange} required />

            <input type="text" placeholder="Qualification" name='qualification' onChange={handleChange} required />

            <select name='role' required onChange={handleChange}>
              <option value="">Select Role</option>
              <option value="Trainer">Trainer</option>
              <option value="Learner">Learner</option>
            </select>

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register