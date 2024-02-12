
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminViewAllwithMark = () => {
  const[input,setInput]=new useState([])
  const getData=()=>{
    axios.get("http://localhost:3002/api/student/viewstudentswithmarks").then(
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
      <th scope="col">Subject 1:</th>
      <th scope="col">Mark 1:</th>
      <th scope="col">Subject 2:</th>
      <th scope="col">Mark 2:</th>
      <th scope="col">Subject 3:</th>
      <th scope="col">Mark 3:</th>
      <th scope="col">Subject 4:</th>
      <th scope="col">Mark 4:</th>
      <th scope="col">Subject 5:</th>
      <th scope="col">Mark 5:</th>

    </tr>
  </thead>
  <tbody>
    {
      input.map((value,index)=>{
        return <tr>
        <td>{value.userId.name}</td>
        <td>{value.userId.rollno}</td>
        <td>{value.userId.admsnno}</td>
        <td>{value.subject1}</td>
        <td>{value.mark1}</td>
        <td>{value.subject2}</td>
        <td>{value.mark2}</td>
        <td>{value.subject3}</td>
        <td>{value.mark3}</td>
        <td>{value.subject4}</td>
        <td>{value.mark4}</td>
        <td>{value.subject5}</td>
        <td>{value.mark5}</td>
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

export default AdminViewAllwithMark
