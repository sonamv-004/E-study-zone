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
import {Link} from 'react-router-dom'
import './UserDashboard.css'

const UserDashboard = () => {
    const [isOpen, setIsOpen] = useState(true);
  
    const menuItems = [
      { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true },
      { icon: <Users size={20} />, label: "My Students" },
      { icon: <BookOpen size={20} />, label: "Courses" },
      { icon: <GraduationCap size={20} />, label: "Assessments" },
      { icon: <Settings size={20} />, label: "Settings" },
    ];
  return (
    <>
    <div className="dashboard-wrapper">
          {/* Sidebar */}
          <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
                 <div className="sidebar-header">
                   <div className="logo-section">
                     <div className="logo-icon">T</div>
                     {isOpen && <span className="logo-text">User Dashboard</span>}
                   </div>
                   <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                     <Menu size={20} />
                   </button>
                 </div>
         
                 <nav className="sidebar-nav">
                   <ul>
                     
                       <li className='active'>
                         <Link to="profile">
                           <span className="icon"> <LayoutDashboard size={20} />User Profile </span>
                           {isOpen && <span className="text"></span>}
                         </Link>
                       </li>
                       <li className='active'>
                         <Link to="mycontent">
                           <span className="icon">  <Users size={20} /> My Content </span>
                           {isOpen && <span className="text"></span>}
                         </Link>
                       </li>
                       <li className='active'>
                         <Link to="searchcontent">
                           <span className="icon"><BookOpen size={20} /> Search Content </span>
                           {isOpen && <span className="text"></span>}
                         </Link>
                       </li>
                       <li className='active'>
                         <Link to="userhandshake">
                           <span className="icon"> <GraduationCap size={20}/> Handshake Request </span>
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
                    <span className="user-name">Trainer John</span>
                    <span className="user-role">Senior Instructor</span>
                  </div>
                </div>
              </div>
            </header>
    
            {/* Dashboard Body */}
           
          </main>
        </div>
    </>
  )
}

export default UserDashboard