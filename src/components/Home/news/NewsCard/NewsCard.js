import React from 'react';
import './newscard.css'

const NewsCard = (props) => {
    const {name,date,link,img,publishby} =props.info
    return (
        <div className="col-md-4">
        <div className="news-card">
        <img className="img-fluid" src={img} alt=""/>
             <p>published by {publishby}, date: {date}</p>
               <h4>{name}</h4>
               <a href={link}>Read More....</a>

        </div>
            
        </div>
    );
};

export default NewsCard;