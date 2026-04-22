import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Settings, 
  LogOut, 
  Menu, 
  Search, 
  Bell, 
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import './AdminDashboard.css';
import {Link, Outlet} from 'react-router-dom'


 


    

const AdminDashboard = () => {
     const [isOpen, setIsOpen] = useState(true)
  return (
    <>
     <div className="dashboard-wrapper">
          {/* Sidebar */}
          <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
            <div className="sidebar-header">
              <div className="logo-section">
                <div className="logo-icon">T</div>
                {isOpen && <span className="logo-text">Admin Dashboard</span>}
              </div>
              <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                <Menu size={20} />
              </button>
            </div>
    
            <nav className="sidebar-nav">
              <ul>
                
                  <li className='active'>
                    <Link to="usermanagement">
                      <span className="icon"> <LayoutDashboard size={20} />User Management </span>
                      {isOpen && <span className="text"></span>}
                    </Link>
                  </li>
                  <li className='active'>
                    <Link to="contentmanagement">
                      <span className="icon">  <Users size={20} />  Content Management</span>
                      {isOpen && <span className="text"></span>}
                    </Link>
                  </li>
                  
                 
                   <li className='active'>
                    <Link to="changepassword">
                      <span className="icon"><Settings size={20} />Change Password </span>
                      {isOpen && <span className="text"></span>}
                    </Link>
                  </li>
              
              </ul>
            </nav>
    
            <div className="sidebar-footer">
              <Link to="#">
                <span className="icon"><LogOut size={20} /></span>
                {isOpen && <span className="text">Logout</span>}
              </Link>
            </div>
          </aside>
    
          {/* Main Content */}
          <main className={`main-content ${isOpen ? "shifted" : "full"}`}>
            {/* Top Navbar */}
            <header className="top-nav">
              <div className="search-bar">
                <Search size={18} className="search-icon" />
                <input type="text" placeholder="Search students, courses..." />
              </div>
              
              <div className="nav-actions">
                <button className="icon-btn"><Bell size={20} /></button>
                <div className="user-profile">
                  <img src="https://ui-avatars.com/api/?name=Trainer+John&background=6366f1&color=fff" alt="Profile" />
                  <div className="user-info">
                    <span className="user-name">Trainer </span>
                    <span className="user-role"> Instructor</span>
                  </div>
                </div>
              </div>
            </header>
    
            {/* Dashboard Body */}
            <div className="dashboard-body">
              <Outlet/>
            </div>
          </main>
        </div>
    </>
  )
}

export default AdminDashboard