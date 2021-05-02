import React from 'react';
import news1 from '../../../image/news1.jpg'
import news2 from '../../../image/news2.jpg'
import news3 from '../../../image/news3.jpg'
import NewsCard from './NewsCard/NewsCard';
import './news.css'

const newsInfo = [
    {
        name:'Helpful tips for become a successful designer',
        publishby:'Admin',
        img:news1,
        date: '12/03/2021',
        link:'https://news.google.com/foryou?hl=en-US&gl=US&ceid=US%3Aen'
    },
    {
        name:'Helpful tips for become a successful designer',
        publishby:'Admin',
        img:news2,
        date: '12/03/2021',
        link:'https://news.google.com/foryou?hl=en-US&gl=US&ceid=US%3Aen'
    },
    {
        name:'Helpful tips for become a successful designer',
        publishby:'Admin',
        img:news3,
        date: '12/03/2021',
        link:'https://news.google.com/foryou?hl=en-US&gl=US&ceid=US%3Aen'
    },
]

const News = () => {
    return (
        <div className="news-container" id="#news">
        <h1 className="text-white mr-auto">Latest News</h1>
        <div className="container pt-5">
        <div className="row pt-5 mt-5 pb-5">
        
        {
           newsInfo.map(info=><NewsCard info={info}></NewsCard>)
        }

        </div>

        </div>
        </div>
    );
};

export default News;