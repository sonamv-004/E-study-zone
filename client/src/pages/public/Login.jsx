import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/api/user/login', data)

      if (res.data.msg === "Login successfully") {
        localStorage.setItem("name", res.data.data.name)
        localStorage.setItem("email", res.data.data.email)
        localStorage.setItem("id", res.data.data.id)
        localStorage.setItem("token", res.data.data.token)
        localStorage.setItem("role", res.data.data.role)

        if (res.data.data.role === "Trainer") {
          navigate('/trainerdashboard')
        } else if (res.data.data.role === "Learner") {
          navigate('/learnerdashboard')
        }
      }
    } catch (error) {
      console.log(error.response?.data || error.message)
    }
  }

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100"
         style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>

      <div className="card shadow-lg p-4" style={{ width: '350px', borderRadius: '15px' }}>
        
        <h3 className="text-center mb-3" style={{ fontWeight: 'bold' }}>
          Welcome Back 👋
        </h3>

        <p className="text-center text-muted mb-4">
          Login to continue
        </p>

        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100 text-white"
            style={{
              background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
              border: 'none',
              fontWeight: 'bold'
            }}
          >
            CONTINUE
          </button>

          <div className="text-center mt-3">
            <Link to="/register" style={{ textDecoration: 'none' }}>
              Don't have an account?
            </Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login