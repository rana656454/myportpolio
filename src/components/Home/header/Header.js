import React from 'react';
import './header.css'
import { FaDownload } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { FiLinkedin } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import profile1 from '../../../image/profile.png'


const Header = () => {
    return (
        <>


        
          <div className="header-container p-5">
         <div className="container">
          <div class="row justify-content-center">
          <div class="col-md-6 col-sm-12 p-5">
              <h1 className="head-text">I'm <span className="special-text">Emdadul</span> Hoque </h1>
              <h4 className="designation">Full-Stack Web Developer</h4>
              <div className="social-icons d-flex flex-row bd-highlight mb-3">
              <p class="icon p-2 bd-highlight"><ImFacebook /></p>
               <p class="icon p-2 bd-highlight"><FaGithub/></p>
               <p class="icon p-2 bd-highlight"><FiLinkedin /></p>
               
              </div>

              <button class="btn-resume"><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1wPP68qyl_wdgOM9wPvR_oKmgvJXh1Tn9/view" style={{textDecoration:"none", fontSize:"17px"}}> <FaDownload />Download Resume</a></button>

              </div>
              <div class="col-md-6 col-sm-12 p-5">
              <img className="img-fluid" src={profile1} alt="" srcset=""/>
            </div>

            </div>

            
          </div>
</div>

        </>
    );
};

export default Header;