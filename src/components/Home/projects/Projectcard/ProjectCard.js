import React from 'react';
import './projectcard.css'
//import { Carousel } from './react-bootstrap';
const ProjectCard = (props) => {
    const {name,img,link,details,git} =props.info
    return (
        <>
       
        <div className="col-md-6 " style={{ textAlign:'center', display:'flex',justifyContent:'space-around',width:'90%',marginBottom:'50px'}}>
            <div className="single-project">
                <img src={img} className="img-fluid" alt=""/>
                <div className="project-text">
                     <h3>{name}</h3>
                     <p>{details}</p>
                     <button className="btn btn-primary mr-3"><a href={link}>Visit Site</a></button>
                     <button className="btn btn-primary"><a href={git}>Github</a></button>
                </div>
            </div>
        </div>
    
        </>
    );
};

export default ProjectCard;