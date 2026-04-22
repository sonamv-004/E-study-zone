import axios from 'axios'
import React, { useState,useEffect } from 'react'

const UserHandshake = () => {
    const userId=localStorage.getItem('id')
    const [data,setData]=useState([])
    const handleFetch=async(e)=>{
        const res=await axios.get(`http://localhost:5000/api/handshake/${userId}`)
        console.log(data)
        

    }
     useEffect(()=>{
      handleFetch()
     },[])
  return (
    <>
     <div className="container-fluid">
                <div className="table table-container table-responsive mt-5">
                    <h2 className='text-start p-3 fw-bolder text-primary'> USER HANDSHAKE REQUEST</h2>
                    {/* jkdgg */}

                    <nav class=" bg-light">
                        <div class="container-fluid">

                         <div className="row">
                            <div className="col-sm-12">
                                   <form class="d-flex " onSubmit={handleSubmit} role="search">
                                <input class="form-control me-2 " type="search" name='technology' placeholder="Search Technology Ex-HTMl" aria-label="Search" onChange={handleChange}/>
                                <button class="btn btn-outline-success w-25" type="submit">Search</button>
                            </form>
                            </div>
                         </div>
                        </div>
                    </nav>
                    {/* jkdsdfg */}
                    <table className="table table-bordered table-striped text-center align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>S.NO</th>
                                <th>Learner Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {data.map((item,i)=>(
                                <tr >
                                    <td>{i+1}</td>
                                <td>{item.learnerId.name}</td>
                                <td>{item.status}</td>
                                <td>
                                    <button onClick={()=>{udpateRequest(item)}}>Accept</button>
                                    <button onClick={()=>{rejectRequest(item)}}>Reject</button>
                                    
                                </td>
                                
                            </tr>
                        ))}

                        </tbody>
                    </table>
                </div>
            </div>
    </>
  )
}

export default UserHandshake