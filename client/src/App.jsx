import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import AddSkils from './pages/trainer/AddSkils'
import Profile from './pages/trainer/Profile'
import Content from './pages/trainer/Content'
import Handshake from './pages/trainer/Handshake'
import UserManagement from './pages/admin/UserManagement'
import ContentManagement from './pages/admin/ContentManagement'
import ChangePassword from './pages/admin/ChangePassword'
import TrainerChangePassword from './pages/trainer/TrainerChangePassword'
import MyContent from './pages/user/MyContent'
import SearchContent from './pages/user/SearchContent'
import UserHandshake from './pages/user/UserHandshake'
import DashboardHome from './pages/trainer/DashboardHome'
const AdminDashboard  =lazy(()=>import('./pages/admin/AdminDashboard'))
const Login = lazy(() => import('./pages/public/Login'))
const Register=lazy(()=>import('./pages/public/Register'))
const TrainerDashboard=lazy(()=>import('./pages/trainer/TrainerDashboard'))
const UserDashboard=lazy(()=>import('./pages/user/UserDashboard'))
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>....Loading</div>}>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            {/* admin route */}
            <Route path='/adminDashboard' element={<AdminDashboard/>}>
           <Route path='usermanagement' element={<UserManagement/>} ></Route>
            <Route path='contentmanagement' element={<ContentManagement/>} ></Route>
            <Route path='changepassword' element={<ChangePassword/>} ></Route>
            
            </Route>
            {/* trainer route */}
            <Route path='/trainerdashboard' element={<TrainerDashboard />}>
            <Route index elemen  t={<DashboardHome/>}></Route>
            <Route path='profile' element={<Profile/>} ></Route>
            <Route path='addskills' element={<AddSkils/>} ></Route>
            <Route path='content' element={<Content/>} ></Route>
            <Route path='handshake' element={<Handshake/>} ></Route>
            <Route path='changepassword' element={<TrainerChangePassword/>} ></Route>
            </Route>
            
            {/* learner route */}
           
             <Route path='/userdashboard' element={<UserDashboard />}>
            <Route path='profile' element={<Profile/>} ></Route>
            <Route path='mycontent' element={<MyContent/>} ></Route>
            <Route path='searchcontent' element={<SearchContent/>} ></Route>
            <Route path='userhandshake' element={<UserHandshake/>} ></Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App