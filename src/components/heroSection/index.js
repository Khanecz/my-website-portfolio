import React from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroH1, HeroP, HeroContent, ImageBg} from './herosectionComponents.js'
import image from '../../images/hero.jpg';


const HeroSection = () => {
    return (
        <>
            <HeroContainer to="home">
                <HeroBg>
                    <ImageBg src={image} />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Michael Řežábek</HeroH1>
                    <HeroP>Game designer</HeroP>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection;
