import axios from 'axios'
import React, { useState } from 'react'

const StudentAddMarks = () => {
  const[input,setInput]=useState({
    userId:sessionStorage.getItem("userId"),
    subject1: "",     
    mark1: "",
    subject2: "",     
    mark2: "",
    subject3: "",     
    mark3: "",
    subject4: "",     
    mark4: "",
    subject5: "",     
    mark5: ""
  })
  const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
  }
  const readValues=()=>{
    axios.post("http://localhost:3002/api/mark/add_mark",input).then(
      (response)=>{
        console.log(response.data)
        if (response.data.status==="success") {
          alert("succesfully added ")
          
        } else {
          alert("oops ! something went wrong")
        }
      }
    )
  }
  return (
    <div>
       <div className="data my-5">
      <h4 style={{textAlign:'center'}}><u>ADD STUDENT MARKS </u> </h4>
        <div className="container my-4">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Subject 1:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='subject1'
                    value={input.subject1}
                    onChange={inputHandler}
                    
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Marks 1:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='mark1'
                    value={input.mark1}
                    onChange={inputHandler}
 
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                  Subject 2:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='subject2'
                    value={input.subject2}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                  Marks 2:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='mark2'
                    value={input.mark2}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                  Subject 3:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='subject3'
                    value={input.subject3}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                  Marks 3:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='mark3'
                    value={input.mark3}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                  Subject 4:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='subject4'
                    value={input.subject4}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                  Marks 4:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='mark4'
                    value={input.purposeofVisit}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                  Subject 5:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='subject5'
                    value={input.subject5}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                  Marks 5:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name='mark5'
                    value={input.mark5}
                    onChange={inputHandler}

                  />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button className="btn btn-success" onClick={readValues} >
                    Add Marks
                  </button>
                </div>
              </div>
              <div style={{textAlign:"center"}}><a href="/"><button className="btn btn-danger" >
                    Log Out
                  </button></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentAddMarks
