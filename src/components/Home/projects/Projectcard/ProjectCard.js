import React from 'react';
import './projectcard.css'

const ProjectCard = (props) => {
    const {name,img,link} =props.info
    return (
        <div className="col-md-4" style={{display:'flex',justifyContent:'space-around',width:'90%'}}>
            <div className="single-project">
                <img src={img} className="img-fluid" alt=""/>
                <div className="project-text">
                     <h3>{name}</h3>
                     <button className="btn btn-primary"><a href="">Visit Site</a></button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;