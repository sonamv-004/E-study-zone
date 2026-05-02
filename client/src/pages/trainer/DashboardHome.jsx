import React from 'react'

import "./Dashboard.css";
const DashboardHome = () => {
  return (
    <>
    

    <div className="dashboard">
      
     

      {/* Main Content */}
      <div className="main">
        
        {/* Navbar */}
        <div className="navbar">
          <h2>Dashboard</h2>
          <div className="user">👤 Admin</div>
        </div>

        {/* Cards */}
        <div className="cards">
          <div className="card">
            <h3>Total Courses</h3>
            <p>12</p>
          </div>

          <div className="card">
            <h3>Total Students</h3>
            <p>320</p>
          </div>

          <div className="card">
            <h3>Completed Lessons</h3>
            <p>85%</p>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="welcome">
          <h2>Welcome to E-Study Zone 🎓</h2>
          <p>
            Manage courses, track student progress, and build your learning
            platform easily.
          </p>
        </div>

      </div>
    </div>



    </>
  )
}

export default DashboardHome