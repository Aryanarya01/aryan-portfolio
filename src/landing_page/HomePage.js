import React from 'react';
import Hero from './Hero';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Connect from './Connect';
import Footer from './Footer';
import Navbar from './Navbar';

function HomePage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Skill/>
        <Project/>
        <Connect/>
        <Footer/>
        </>
     );
}

export default HomePage;