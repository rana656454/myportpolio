import React from 'react';
import About from '../About/About';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Projects from '../projects/Projects';
import Blog from '../blog/Blog'
import Contact from '../contact/Contact';
import News from '../news/News';
import Footer from '../Footer/Footer'
import Navigation from '../navigation/Navigation';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            
            <Header></Header>
            
            <About></About>
            
            <Projects></Projects>
            
            <Blog></Blog>
            
            <Contact></Contact>
            <News></News>
            <Footer></Footer>
            
            
        </>
    );
};

export default Home;