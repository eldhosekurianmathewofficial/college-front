import axios from "axios";
import React, { useState } from "react";

const AdminAddStudents = () => {
  const [input, setInput] = useState({
    name: "",
    rollno: "",
    admsnno: "",
    clgname: "",
    parentname: "",
    mobile: "",
    email: "",
    password: "",
  });
  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const readValues = () => {
    axios
      .post("http://localhost:3002/api/student/addstudent", input)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === "success") {
          alert("succesfully added ");
          setInput({
            name: "",
            rollno: "",
            admsnno: "",
            clgname: "",
            parentname: "",
            mobile: "",
            email: "",
            password: "",
          });
        } else {
          alert("oops ! something went wrong");
        }
      });
  };
  return (
    <div>
      <div className="data my-5">
        <h4 style={{ textAlign: "center" }}>
          <u>ADD STUDENT </u>{" "}
        </h4>
        <div className="container my-4">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={input.name}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Roll No:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="rollno"
                    value={input.rollno}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Admission Number:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="admsnno"
                    value={input.admsnno}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    College Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="clgname"
                    value={input.clgname}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Parent name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="parentname"
                    value={input.parentname}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Mobile:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    value={input.mobile}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Email:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={input.email}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label htmlFor="" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={input.password}
                    onChange={inputHandler}
                  />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button className="btn btn-success" onClick={readValues}>
                    Add Student
                  </button>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <a href="/">
                  <button className="btn btn-danger">Log Out</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddStudents;
