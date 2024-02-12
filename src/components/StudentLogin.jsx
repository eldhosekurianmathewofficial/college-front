import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const StudentLogin = () => {
    const [data,setData]=new useState([
        {
          email:"",
          password:""
        }
       
      ])
      const navigate=useNavigate()
      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readvalues=()=>{
        axios.post("http://localhost:3002/api/student/studentlogin",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status==="success"){
                    alert("Welcome Student !")
                    sessionStorage.setItem("userId",response.data.userdata._id)
                    navigate("/studentmark")
                  } else {
                    alert("oops ! something went wrong")
                  }
            }
        )
      }
    return (
      <div>
        <div className="container my-5">
        <h4 style={{textAlign:'center'}}><u>STUDENT LOGIN</u> </h4>
          <div className="row">
              <div className="col col-12 col-sm-12 col-md-12 col-xxl-12 col-xl-12">
                  <div className="row g-3">
                      <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                          <label htmlFor="" className="form-label">Email:</label>
                          <input type="text" className="form-control" name="email" value={data.email} onChange={inputHandler}/>
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
              <div style={{textAlign:"center"}}><a href="/"><button className="btn btn-info" >
                      Admin Login
                    </button></a></div>
          </div>
        </div>
      </div>
    )
}

export default StudentLogin
