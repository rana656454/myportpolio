import React from 'react';
import About  from '../../../../image/about.PNG'
import './aboutinfo.css'

const AboutInfo = () => {
    return (
        <div className="row aboutinfo-section">
        <div className="col-md-7">
           <img src={About} className="img-fluid" alt="" srcset=""/>
        </div>
        <div className="col-md-5 about-text">
             <h1>I create products not just art</h1>
             <p className="pt-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, iusto dolores ut ullam unde qui accusamus tempore placeat odit necessitatibus aperiam dignissimos nulla sint odio molestias exercitationem corporis temporibus quasi nihil omnis sit quos aliquid? Fugit, rem? Quas, numquam quos.</p>
        </div>
        
        </div>
    );
};

export default AboutInfo;