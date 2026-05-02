import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const MyContent = () => {
   const[data,setData]= useState([])
   const userid=localStorage.getItem('id')
   const handleFetch=async(e)=>{
    const res=await axios.get(`https://e-study-zone-bder.onrender.com/api/content/getcontent/${userId}`)
    console.log(res)
    setData(res.data)
   }
   useEffect(()=>{
    handleFetch()
   },[])
  return (
   <>
   <div>
<h1>My Content</h1>
<table className='table'>
<thead>
    <tr>
        <th>S.No</th>
        <th>Skill</th>
        <th>Content</th>
    </tr>
</thead>
<tbody>
    {data.map((item,i)=>{
        <tr>
            <td>{i+1}</td>
            <td>{item.skillId.skill}</td>
            <td>
                <Link to={`https://e-study-zone-bder.onrender.com/api/${item.file}`}>View</Link>
            </td>
        </tr>
    })

    }

</tbody>
</table>
   </div>
   </>
  )
}

export default MyContent
