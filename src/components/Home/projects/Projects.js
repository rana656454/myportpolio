import React from 'react';
import project1 from '../../../image/project1.png'
import project2 from '../../../image/project2.png'
import project3 from '../../../image/project3.png'
import project4 from '../../../image/project4.png'
import ProjectCard from './Projectcard/ProjectCard'
import './projects.css'
const projects = [
    {
        name:'Harmoni Event Management',
        link:"https://app.netlify.com/sites/elated-mclean-e6455f/overview",
        git:"https://github.com/rana656454/harmoni-event-management-server",
        img:project1,
        details:'login system with google, Separate dashboard for admin and user, admin can add or delete service, user can order service and get feedback, hire event management service.'

    },
    {
        name:'AnZa Office Management',
        link:"https://subrana.000webhostapp.com/",
        img:project2,
        details:'login system (management, accountant, employee role). account section, billing system for employe, document store, admin create, employee info creates, details, etc.'

    },
    {
        name:'Popular League Info',
        link:"https://elastic-poitras-9da43f.netlify.app/",
        git:'https://github.com/rana656454/world-most-popular-league',
        img:project3,
        details:'Description of all popular leagues for click. Data Collect from Api.'

    },
    {
        name:'Rider Sharing App',
        link:"https://elastic-poitras-9da43f.netlify.app/",
        git:'https://github.com/rana656454/ride-sharing-web-app',
        img:project4,
        details:'Description of all popular leagues for click. Data Collect from Api.'

    }
]

const Projects = () => {
    return (
        <div className="project-container" id="project">
        <h1 className="text-white mr-auto">My Project</h1>
        <div className="container pt-5 pb-5">
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