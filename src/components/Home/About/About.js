import React,{useState} from 'react';
import './about.css'
import Skill from './skill/Skill'
import Sociallink from './socialink/Sociallink'
import Award from './award/Award'
import AboutInfo from './Aboutinfo/AboutInfo'
import Service from './service/Service'



const About = () => {
    const [aboutType,setaboutType] = useState ("")
    const handleClick = (event) =>{
        setaboutType(event.target.innerText)
        console.log(event.target.innerText)
    }

    const renderAuthButton = () => {
        if (aboutType=="ABOUT") {
          return <AboutInfo/> ;
        } 
        else if(aboutType=="SKILLS"){
            return <Skill/>;
        }

        else if(aboutType=="SERVICE"){
            return <Service/>;
        }

        else if(aboutType=="AWARD"){
            return <Award/>;
        }

        
        else if(aboutType=="SOCIAL MEDIA"){
            return <Sociallink/>;
        }

        else {
          return <AboutInfo/>;
        }
      }


    return (
        <>
            <section className="about-container" id="about">
            <div className="experience">
                  <div className="exp-2">
                  <h1>7</h1>
                   <h4>Years Experience</h4>
                  </div>
                           
               </div>
               <div>
                   <h1 className="about-header-text text-white">About Me</h1>
               </div>
    
               <div className="about-nav mr-auto">
               
               <ul className="d-flex justify-content-evenly">
                   <li className="nav-item"><a onClick={handleClick}>About</a></li>
                   <li className="nav-item"><a onClick={handleClick}>Skills</a></li>
                   <li className="nav-item"><a onClick={handleClick}>Service</a></li>
                   <li className="nav-item"><a onClick={handleClick}>Award</a></li>
                   <li className="nav-item"><a onClick={handleClick}>Social Media</a></li>
               </ul>
             
               </div>
               <div className="about-main container mt-5">
               {renderAuthButton()}
               </div>
            </section>
        </>
    );
};

export default About;