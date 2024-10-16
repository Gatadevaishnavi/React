import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Home() {
    const[users,setusers]=useState([])

    const {id}=useParams();

    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers= async ()=>{
        const result = await axios.get("http://localhost:8080/user")
        setusers(result.data);
    };

    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers();
    };
  return (
    <div className="container">
        <div className="py">

        <table className="table border shadow mx-2">
  <thead>
    <tr>
      <th scope="col">Sr.no</th>
      <th scope="col">Username</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Gender</th>
      <th scope="col">Moblie</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    
      {
        users.map((user,index)=>(
          <tr key={index}>
          <th scope="row">{index+1}</th>
          <td>{user.username}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address}</td>
          <td>{user.gender}</td>
          <td>{user.moblie}</td>
          <td>
            <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
            <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
          </td>
        </tr>

        ))
      }
    
  </tbody>
</table>
        </div>
    </div>
  )
}

export default Home