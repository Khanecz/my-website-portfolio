import React from 'react'
import HeroSection from '../components/heroSection/index.js';
import Navbar from '../components/Navbar/index.js';
import ContentSection from '../components/contentSection/index.js';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/contentSection/data.js';

const Home = () => {
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <ContentSection {...homeObjOne}/>
            <ContentSection {...homeObjTwo}/>
            <ContentSection {...homeObjThree}/>
        </>
    )
}

export default Home;
