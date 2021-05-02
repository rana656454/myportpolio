import React from 'react';
import './contactcard.css'

const ContactCard = (props) => {
    const {name,ref,icon} = props.info
    return (
        <div className="col-md-12">
        <div className="contact-card">
        <h1>{name}</h1>
        <div className="d-flex justify-content-around">
            <p className="contact-icon">{icon}</p>
            <p className="contact-ref">{ref}</p>
        </div>
        </div>
            
        </div>
    );
};

export default ContactCard;