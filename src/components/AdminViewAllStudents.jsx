import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminViewAllStudents = () => {
  const[input,setInput]=new useState([])
  const getData=()=>{
    axios.get("http://localhost:3002/api/student/viewstudents").then(
      (response)=>{
        setInput(response.data)
      }
    )
  }
  useEffect(()=>{getData()},[])
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <table class="table">
  <thead>
    <tr>
      <th scope="col">Name:</th>
      <th scope="col">Roll No:</th>
      <th scope="col">Admission Number:</th>
      <th scope="col">College Name:</th>
      <th scope="col">Parent Name:</th>
      <th scope="col">Mobile:</th>
      <th scope="col">Email:</th>
    </tr>
  </thead>
  <tbody>
    {
      input.map((value,index)=>{
        return <tr>
        <td>{value.name}</td>
        <td>{value.rollno}</td>
        <td>{value.admsnno}</td>
        <td>{value.clgname}</td>
        <td>{value.parentname}</td>
        <td>{value.mobile}</td>
        <td>{value.email}</td>
      </tr>
      })
    }
    
  </tbody>
</table>
              </div>
            </div>
            <div style={{textAlign:"center"}}><a href="/addstudent">Back to Home</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminViewAllStudents
