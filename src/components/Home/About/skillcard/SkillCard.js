import React from 'react';
import './skillcard.css'

const SkillCard = (props) => {
    const {name,catagory,color} = props.info
    return (
        <div className="col-md-4 mb-5">
        <div className="skillcard-section" style ={{border: '2px solid',borderColor:color}}>
            <h1 className style={{color}}>{name}</h1>
            <span className="bar" style={{backgroundColor:color}}><span className="comportable"></span></span>
            <h4 className style={{color}}>{catagory}</h4>
            </div>
        </div>
    );
};

export default SkillCard;