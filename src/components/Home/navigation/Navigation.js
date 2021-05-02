import React from 'react';
import logo from '../../../image/logo.png'
import {Navbar,Nav,Form, FormControl,Button} from 'react-bootstrap'
import {
    Link
  } from "react-router-dom";
import './navigation.css'  

const Navigation = () => {
    return (
        <div>
<nav class="navigation navbar navbar-expand-lg navbar-light p-3">
  <div class="container nav-container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#">Md. Rana</a>
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to ='/'>
          <a class="nav-link active" aria-current="page">Home</a>
          </Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
        <Link to ='/resume'>
          <a class="nav-link">My Resume</a>
          </Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#project">Project</a>
        </li>
        <li class="nav-item">
        
          <a class="nav-link" href="#blog">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
      
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navigation;