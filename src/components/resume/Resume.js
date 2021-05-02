import React from 'react';
import cvpic from '../../image/cvpic.png'
import { FaDownload } from 'react-icons/fa';
import './resume.css'
import * as FaIcons from 'react-icons/fa'
import { ProgressBar } from 'react-bootstrap';
import Navigation from '../Home/navigation/Navigation';

const Resume = () => {
    return (
        <div className="resume-section">
        <Navigation></Navigation>
            <div className="">
            <main className="container resume-container">
                <section className="profile">
               
               <div className="row row3">
               <div className="col-md-6">
               <div className="left">
                <div className="avatar-block">
                        <img src={cvpic} alt=""/>
                        <span>
                        <FaIcons.FaComments/>
                        
                        </span>
                </div>
                <div>
                    <h2>Emdadul Hoque</h2>
                    <p className="cd-headline loading-bar"></p>
                    <span className="cd-words-wrapper">
                        <b className="is-visible">Web Developer</b>
                        <b> React Developer</b>
                    </span>
                </div>
                </div>
               
               
               </div>
               <div className="col-md-6">
               <div className="right">
                    <ul className="contact">
                     <li>
                         <FaIcons.FaMobileAlt/>
                         <strong> Phone:</strong>
                     </li>
                     <li>
                         <FaIcons.FaMailBulk/>
                         <strong> Email:</strong> ranamd1993@gmail.com
                     </li>
                    </ul>
                    <ul className="socials">
                        <li>
                            <a href="">
                            <FaIcons.FaFacebookF/>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaIcons.FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaIcons.FaGithub />
                            </a>
                        </li>
                    </ul>
                </div>
               </div>
               </div>
                </section>

                <div className="row about">
                <div className="col-md-6">
                   <h1 className="section-heading">About </h1>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, aliquid corporis magnam sapiente molestiae quis. Aut, aliquid corporis magnam sapiente molestiae quis.</p>

                </div>
                <div className="col-md-6">
                   <ul>
                       <li>Name          : Emdadul Hoque Rana</li>
                       <li>Date of Birth : 15/10/1993</li>
                       <li>Nationality   : Bangladeshi</li>
                   </ul>
                 </div>
                </div>

                  <div className="row education-skill">
                  <div className="col-md-12">
                  <h1 className="section-heading">Education & Skills</h1>
                  </div>
                  
                  <div className="col-md-3">
                   <p className="edu-icon"><FaIcons.FaUserGraduate/></p>
                   <h4>Education</h4>
                   <div className="total-wraper">
                   <div className="cv-wraper">
                   <ul>
                   <li>2002-2008</li>
                      <li>Borhanuddin High School</li>
                      <li>SSC</li>
                   </ul>
                      
                   </div>
                   <div className="cv-wraper">
                      <ul>
                          <li>2008-2012</li>
                          <li>Bhola Polytechnic Ins.</li>
                          <li>Diploma Engineering</li>
                      </ul>
                   </div>
                   <div className="cv-wraper">
                   <ul>
                          <li>2016-2020</li>
                          <li>Bangladesh University</li>
                          <li>BSc In CSE</li>
                      </ul>
                   </div>
                   </div>
                  </div>
                  <div className="col-md-3">
                  <p className="edu-icon"><FaIcons.FaSuitcase/></p>
                   <h4>Experience</h4>
                   <div className="total-wraper">
                   <div className="cv-wraper">
                   <ul>
                   <li>2002-2008</li>
                      <li>Borhanuddin High School</li>
                      <li>SSC</li>
                   </ul>
                      
                   </div>
                   <div className="cv-wraper">
                      <ul>
                          <li>2008-2012</li>
                          <li>Bhola Polytechnic Ins.</li>
                          <li>Diploma Engineering</li>
                      </ul>
                   </div>
                   <div className="cv-wraper">
                   <ul>
                          <li>2016-2020</li>
                          <li>Bangladesh University</li>
                          <li>BSc In CSE</li>
                      </ul>
                   </div>
                   </div>
                  </div>
                  <div className="col-md-6">
                  <h4>Skill</h4> 
                  <div style={{width:'80%', marginBottom:"25px"}}>
                  <h3>HtMl</h3>
                  <ProgressBar animated now={55} />
                  </div>
                  
                  <div style={{width:'80%', marginBottom:"25px"}}>
                  <h3>HtMl</h3>
                  <ProgressBar animated now={55} />
                  </div>
                  <div style={{width:'80%', marginBottom:"25px"}}>
                  <h3>HtMl</h3>
                  <ProgressBar animated now={55} />
                  </div>
                  <div style={{width:'80%', marginBottom:"25px"}}>
                  <h3>HtMl</h3>
                  <ProgressBar animated now={55} />
                  </div>
                  <div style={{width:'80%', marginBottom:"25px"}}>
                  <h3>HtMl</h3>
                  <ProgressBar animated now={55} />
                  </div>
                  </div>
                  
                  </div>
                  <button class="btn-resume"><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1wPP68qyl_wdgOM9wPvR_oKmgvJXh1Tn9/view" style={{textDecoration:"none", fontSize:"17px"}}> <FaDownload />Download Resume</a></button>
            </main>
            </div>
        </div>
    );
};

export default Resume;