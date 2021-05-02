import React from 'react';
import ServiceCard from '../servicecard/ServiceCard';
import developer from '../../../../image/developer.png'
import design from '../../../../image/design.jpg'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as GrIcons from 'react-icons/gr'
import * as SiIcons from 'react-icons/si'
import * as GiIcons from 'react-icons/gi'






const Services = [

{
    name:'Web Design',
    description:'comportable',
    icon: <MdIcons.MdWeb />
    },

    {
        name:'Web Develop',
        description:'',
        icon: <FaIcons.FaLaptopCode />
        },

        {
            name:'Marketing',
            description:'comportable',
            icon: <GiIcons.GiHandBag />
            },
            
        {
            name:'Freelancing',
            description:'comportable',
            icon: <SiIcons.SiMarketo />
            }


]

const Service = () => {
    return (
        <div className="row">
            {
              Services.map (info=><ServiceCard info={info}></ServiceCard>)
            }
        </div>
    );
};

export default Service;