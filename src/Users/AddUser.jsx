import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AddUser() {

    let navigate =useNavigate()
    const[user,setUser]=useState({
        username:"",
        name:"",
        email:"",
        address:"",
        gender:"",
        moblie:""
    })
    const{username,name,email,address,gender,moblie}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    };
        
        const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/");
        };

    
return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow text-center">
                <h2  className="text-center m-4">Register User </h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-4 text-center">
                    <label htmlFor="username" className="form-label">UserName</label><br />
                    <input type={"text"}
                    className="from-control"
                    placeholder="Enter your username"
                    name="username" 
                    value={username}
                    onChange={(e)=>onInputChange(e)}/>
                    
                </div>
                <div className="mb-4 text-center">
                    <label htmlFor="Name" className="form-label">Name</label><br />
                    <input type={"text"}
                    className="from-control"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)} />
                    

                </div>
                <div className="mb-4 text-center">
                    <label htmlFor="email" className="form-label">E-mail</label><br />
                    <input type={"text"}
                    className="from-control"
                    placeholder="Enter your E-mail"
                    name="email"
                    value={email}
                    onChange={(e)=>onInputChange(e)} />
                    

                </div>
                <div className="mb-4 text-center">
                    <label htmlFor="address" className="form-label">Address</label><br />
                    <input type={"text"}
                    className="from-control"
                    placeholder="Enter your Address"
                    name="address"
                    value={address}
                    onChange={(e)=>onInputChange(e)} />
                    

                </div>
                <div className="mb-4 ">
                    <label htmlFor="gender" className="form-label">Gender</label><br />
                    <input  
                    type= {"text"}
                    className="from-control"
                    placeholder="Enter your gender"
                    name="gender"
                    value={gender}
                    onChange={(e)=>onInputChange(e)}

                    />
                </div>
                <div className=" mb-4 ">
                    <label htmlFor="moblie" className="form-label">Moblie No:</label><br />
                    <input type={"text"}
                    className="from-control from-control-lg"
                    placeholder="Enter your moblie no"
                    name="moblie"
                    value={moblie}
                    onChange={(e)=>onInputChange(e)} />
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <Link type="submit" className="btn btn-outline-danger mx-2">Cancel</Link>
                </form>
            </div>
        </div>
        
    </div>
)}

export default AddUser