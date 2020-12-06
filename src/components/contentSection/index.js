import React from 'react'
import {ContentContainer, TextWrapper, TopLine} from './contentComponents.js';

const ContentSection = ({lightBg, id, topLine, lightText}) => {


    
    return (
        <>
            <ContentContainer lightBg={lightBg} id={id}>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                </TextWrapper>
            </ContentContainer>
        </>
    )
}

export default ContentSection
