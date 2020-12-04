import React from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroH1, HeroP, HeroContent} from './herosectionComponents.js'
import video from '../../videos/video.mp4';


const HeroSection = () => {
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay muted loop src={video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Michael Řežábek</HeroH1>
                    <HeroP>I do stuff sometimes</HeroP>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection;
