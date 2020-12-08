import React from 'react'
import {ContentContainer, TextWrapper, TopLine, ProjectsWrapper, Project, ProjectImage, ProjectHeading, ProjectLink, ProjectText} from './contentComponents.js';

const ContentSection = ({lightBg, id, topLine, lightText, ProjectOneimgOne, projectOneHeadingOne, projectOneDescriptionOne }) => {


    
    return (
        <>
            <ContentContainer lightBg={lightBg} id={id}>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                </TextWrapper>
                <ProjectsWrapper>
                    <Project>
                        <ProjectLink href="//www.ylands.com" target="_blank">
                            <ProjectImage src={ProjectOneimgOne}/>
                            <ProjectHeading>{projectOneHeadingOne}</ProjectHeading>
                            <ProjectText>{projectOneDescriptionOne}</ProjectText>
                        </ProjectLink>
                    </Project>
                </ProjectsWrapper>
            </ContentContainer>
        </>
    )
}

export default ContentSection
