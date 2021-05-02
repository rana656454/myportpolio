import React from 'react';
import SkillCard from '../skillcard/SkillCard';

const Skills = [
    {
        name:'JavaScript',
        catagory:'comportable',
        color: '#fe3e57'
},

{
    name:'JQuery',
    catagory:'comportable',
    color: '#54faae'
    },

{
name:'React Js',
catagory:'comportable',
color: '#ff8c2f'
},

{
    name:'Node Js',
    catagory:'comportable',
    color: '#f1f965'
    },

    {
        name:'Express Js',
        catagory:'comportable',
        color: '#ff0173'
        },

        {
            name:'PHP',
            catagory:'comportable',
            color: '#39c4ff'
            },


]

const Skill = () => {
    return (
        
        <div className="row pb-5">
           {
               Skills.map(info=><SkillCard info={info}></SkillCard>)
           }
        </div>
        
    );
};

export default Skill;