import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Admin Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
    
        <li class="nav-item">
          <a class="nav-link" href="/addstudent">Add Student</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewallstudents">View All Students</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewallstudentswithmark">View All Students with marks</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
