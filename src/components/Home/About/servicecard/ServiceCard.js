import React from 'react';
import './servicecard.css'

const ServiceCard = (props) => {
    const {name,icon,description}=props.info
    return (
        <div className="col-md-6 col-sm-12">
          <div className="d-flex justify-content-between">
           <p className="service-icon">{icon}</p>
            <div className="service-details">
                <h2>{name}</h2>
                <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente asperiores consequatur.</p>
            </div>

          </div>

            
        </div>
    );
};

export default ServiceCard;
