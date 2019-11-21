import React from 'react'
import { Link } from 'react-router-dom';

import '../admin-header.css'

function AdminHeaderComponent() {
    return (
      <nav id="admin-dashboard" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Admin Dashboard</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" style={{ color: "#fff" }} to="/admin/dashboard">Projects</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" style={{ color: "#fff" }} to="/admin/teams">Teams</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" style={{ color: "white !important" }} to="/admin/cities">Cities</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" style={{ color: "white !important" }} to="/admin/cv">CV List</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" style={{ color: "white !important" }} to="/admin/contact-us">Contact Us</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" style={{ color: "white !important" }} to="/admin/quality">Quality</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" style={{ color: "white !important" }} to="/admin/work-with-us">Work With Us</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" style={{ color: "white !important" }} to="/admin/who-we-are">Who We Are</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" style={{ color: "white !important" }} to="/admin/jobs">Jobs</Link>
          </li>
          {/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
    )
}

export default AdminHeaderComponent
