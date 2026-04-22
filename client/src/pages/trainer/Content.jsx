import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'

const Content = () => {
  const userId=localStorage.getItem('id')
 const [data,setData]= useState([])
 const [form,setForm]=useState({
  skillId:"",
  content:"",
  userId:userId

 });
 
 const handleFetch=async()=>{
  const res=await axios.get(`http://localhost:5000/api/skill/getskill/${userId}`)
  console.log(res.data);
  setData(res.data.data)
 }
 useEffect(()=>{
  handleFetch()
 },[])

  const handlechange=(e)=>{
    console.log(e);
    if(e.target.type=="file"){
      setForm(()=>({...form,[e.target.name]:e.target.files[0]}))
    }
    else{
      setForm(()=>({...form,[e.target.name]:e.target.value}))
    }
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const res=await axios.post(`http://localhost:5000/api/content/upload`,form,{
      headers:{
        'Content-type':'multipart/form-data'
      }
    });
    window.alert("file uploaded successfully")
  }
  return (
    <>
   <form onSubmit={handlesubmit}>
 <div className="row mt-5">
      <div className="col-sm-12 mx-auto bg-light">
        <div class="mb-3">
  <label for="formFile" class="form-label">Enter your skill</label>
  <select name="skillId" className='form-control' onChange={handlechange} id="">
    <option value="">-- Select Skills</option>
    {data.map((item,i)=>(
      <option value={item._id}key={i+1}>{item.skill}</option>
    ))}
  </select>
</div>
<div class="mb-3">
  <label for="formFileMultiple" class="form-label">Select content</label>
  <input class="form-control" type="file" id="formFileMultiple" name="content" onChange={handlechange} multiple />
</div>
<button type='submit' className='bg-primary text-center'>Upload</button>

      </div>
    </div>
   </form>
    </>
  )
}

export default Content