import React from 'react';
import './header.css'
import { FaDownload } from 'react-icons/fa';
import { ImFacebook } from 'react-icons/im';
import { FiLinkedin } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import profile1 from '../../../image/profile.png'
import Particles from 'react-particles-js';
import Typical from 'react-typical'

const Header = () => {
    return (
        <>
         
          <div className="header-container pt-1 pb-5">
          <Particles/>
         <div className="container" style={{position:'absolute',top:'100',bottom:'0',right:'0',left:'0'}}>
          <div class="row">
          <div class="col-md-6 col-sm-12 pt-1">
              <h1 className="head-text">I'm <span className="special-text">Emdadul</span> Hoque </h1>
              <h4 className="designation">
             
              I 'M <Typical
        steps={['Web Developer', 1000, 'Web Designer', 500]}
        loop={Infinity}
        wrapper="b"
      />
              </h4>
              <div className="social-icons d-flex flex-row bd-highlight mb-3">
              <p class="icon p-2 bd-highlight"><ImFacebook /></p>
               <p class="icon p-2 bd-highlight"><FaGithub/></p>
               <p class="icon p-2 bd-highlight"><FiLinkedin /></p>
               
              </div>

              <a target="_blank" href="https://drive.google.com/file/d/1wPP68qyl_wdgOM9wPvR_oKmgvJXh1Tn9/view" style={{textDecoration:"none", fontSize:"17px"}}><button class="btn-resume"> <FaDownload />Download Resume</button></a>

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