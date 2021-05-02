import React from 'react';
import web1 from '../../../image/web1.jpg'
import web2 from '../../../image/web2.jpg'
import web3 from '../../../image/web3.jpg'
import ProjectCard from './Projectcard/ProjectCard'
import './projects.css'
const projects = [
    {
        name:'abcd',
        link:"",
        img:web1

    },
    {
        name:'abcd',
        link:"",
        img:web2

    },
    {
        name:'abcd',
        link:"",
        img:web3

    }
]

const Projects = () => {
    return (
        <div className="project-container" id="project">
        <h1 className="text-white mr-auto">My Project</h1>
        <div className="container pt-5">
        <div className="row pt-5 mt-5 pb-5">
        
        {
           projects.map(info=><ProjectCard info={info}></ProjectCard>)
        }

        </div>

        </div>
        </div>
    );
};

export default Projects;