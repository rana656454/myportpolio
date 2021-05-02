import React from 'react';
import logo from '../../../image/logo.png'
import {
    Link
  } from "react-router-dom";
  import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-1">
        <nav className=" container nav-container navbar navbar-expand-lg navbar-light">

            <div className="logo d-flex flex-row bd-highlight mb-2">
             <img className="p-2 bd-highlight" src={logo} alt=""/>
             <h1 className="p-2 bd-highlight text-white text-bold">Follio</h1>
            </div>
       
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <Link to ='/'>
                        <a className="nav-link1 mr-5" href="#">Home <span className="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li className="nav-item">
                      <Link to =''>
                      <a className="nav-link1 mr-5" href="#">Blog</a>
                      </Link>
                        
                    </li>
 
                    <li className="nav-item">
                    <Link to =''>
                      <a className="nav-link1 mr-5" href="#">Projects</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                    <Link to ='/resume'>
                      <a className="nav-link1 mr-5" href="#">CV/Resume</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                    <Link to =''>
                      <a className="nav-link1 mr-5" href="#">Contact Us</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                   

<button className="btn btn-secondary" >Log Out</button>

                        
                        
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;