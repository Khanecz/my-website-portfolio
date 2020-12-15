import React from 'react'
import {ContentContainer, TextWrapper, TopLine, ProjectsWrapper, Project, ProjectImage, ProjectHeading, ProjectLink, ProjectText, CVLink, CVButton} from './contentComponents.js';

const ContentSection = ({lightBg, id, topLine, lightText, ProjectOneimgOne, projectOneHeadingOne, projectOneDescriptionOne, displayCVButton, CVlocation, }) => {


    
    return (
        <>
            <ContentContainer lightBg={lightBg} id={id}>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                </TextWrapper>
                <ProjectsWrapper>
                    <Project>
                                <CVLink displayCVButton={displayCVButton} href={CVlocation} download="CV">
                                    <CVButton>Download</CVButton>
                                </CVLink>
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
