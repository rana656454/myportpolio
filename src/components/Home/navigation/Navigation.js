import React , {useState} from 'react';
import logo from '../../../image/logo.png'
import {Navbar,Nav,Form, FormControl,Button} from 'react-bootstrap'
import {Link as Link1} from 'react-router-dom'
import { Link as Link2 } from 'react-scroll';

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
        <Link1 to ='/'>
          <a class="nav-link active" aria-current="page">Home</a>
          </Link1>
        </li>
        <li class="nav-item">
          <Link2 style={{cursor: 'pointer'}} smooth={true} duration={1000}  class="nav-link" to="about">About</Link2>
        </li>
        <li class="nav-item">
        <Link1 to ='/resume'>
          <a class="nav-link">My Resume</a>
          </Link1>
        </li>
        <li class="nav-item">
          <Link2 style={{cursor: 'pointer'}} smooth={true} duration={1000} class="nav-link" to="project">Project</Link2>
        </li>
        <li class="nav-item">
        
          <Link2 style={{cursor: 'pointer'}} smooth={true} duration={1000} class="nav-link" to="blog" >Blog</Link2>
        </li>
        <li class="nav-item">
          <Link2 style={{cursor: 'pointer'}} class="nav-link" to="contact" smooth={true} duration={1000}>Contact</Link2>
        </li>
      </ul>
      
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navigation;