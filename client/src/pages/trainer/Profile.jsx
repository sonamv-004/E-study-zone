import React, { useEffect,useState } from "react";
import img from '../../assets/a3.jpg'
import './Profile.css'
import axios from "axios";

function Profile() {
  const userId = localStorage.getItem('id')
  const [data,setData] = useState([]);
  const handleFetch = async()=>{
    const res = await axios.get(`https://e-study-zone-bder.onrender.com/api/user/getuser/${userId}`)
    console.log(res);
    setData(res.data.data)
    
  }
  useEffect(()=>{
    handleFetch()
  },[])
  return (
    <div className="container">
      <div className="card" style={{width: "18rem"}}>
  <img
          src={img}
          className="profile-img mx-auto" 
        />

        <h2>{data.name}</h2>

        <p className="bio">
          Full-stack developer passionate about building clean and user-friendly web applications.
        </p>

        <div className="details">
          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Role:{data.role}</strong> </p>
          <p><strong>Qualification:{data.qualification}</strong></p>
        </div>

        <button>Contact Me</button>
</div>
    </div>
  );
}

export default Profile;
