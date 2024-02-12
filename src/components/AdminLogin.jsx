import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [data,setData]=new useState([
      {
        username:"",
        password:""
      }
     
    ])
    const navigate=useNavigate()
    const inputHandler=(event)=>{
      setData({...data,[event.target.name]:event.target.value})
    }
    const readvalues=()=>{
      
      if ((data.username=="admin") && (data.password=="admin")){
        alert("Welcome Admin !")
        navigate("/addstudent")
      } else {
        alert("oops ! something went wrong")
      }
    }
  return (
    <div>
      <div className="container my-5">
      <h4 style={{textAlign:'center'}}><u>ADMIN LOGIN</u> </h4>
        <div className="row">
        
            <div className="col col-12 col-sm-12 col-md-12 col-xxl-12 col-xl-12">
                <div className="row g-3">
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Username:</label>
                        <input type="text" className="form-control" name="username" value={data.username} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">password:</label>
                        <input type="password" className="form-control" name="password" value={data.password} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readvalues}>Login</button>
                    </div>
                </div>
            </div>
            <div style={{textAlign:"center"}}><a href="/studentlogin"><button className="btn btn-info" >
                    Student Login
                  </button></a></div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
