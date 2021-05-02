import React from 'react';
import './blogcard.css'
const BlogCard = (props) => {
    const {name,img,link} = props.info
    return (
        <div className="col-md-4">
        <div className="blog-card shadow-lg p-3 mb-5 bg-body rounded" style={{width:'98%'}}>
        <img className="img-fluid" style={{width:"100%" ,height:'300px'}} src={img} alt=""/>  
        <h4 className="p-2">{name}</h4>
        <button className="mb-3"><a href={link}>Visit Blog</a></button>

        </div>
         
        </div>
    );
};

export default BlogCard;