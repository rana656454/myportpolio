import React from 'react';
import './blog.css'
import blog1 from '../../../image/blog1.jpg'
import blog2 from '../../../image/blog2.jpg'
import BlogCard from './Blogcard/BlogCard';

const Blogs = [
    {
        name:'Questions on JavaScript',
        link:'',
        img: blog1
    },
    {
        name:'Taking PHP Seriously',
        link:'https://slack.engineering/taking-php-seriously/',
        img:blog2
    },
    {
        name:'About React',
        link:'https://slack.engineering/taking-php-seriously/',
        img:blog1
    },
    {
        name:'Questions on JavaScript',
        link:'',
        img: blog1
    },
    {
        name:'Taking PHP Seriously',
        link:'https://slack.engineering/taking-php-seriously/',
        img:blog2
    },
    {
        name:'About React',
        link:'https://slack.engineering/taking-php-seriously/',
        img:blog1
    }

]

const Blog = () => {
    return (
        <div className="blog-section" id="blog">
        <h1>My Blog</h1>
        <div className="container pt-5">
        <div className="row pt-5">
           {
               Blogs.map(info=><BlogCard info ={info}></BlogCard>)
           }
           </div>
           </div>
        </div>
    );
};

export default Blog;