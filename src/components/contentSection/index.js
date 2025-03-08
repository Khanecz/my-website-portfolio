import React from 'react'
import {ContentContainer, TextWrapper, TopLine, ProjectsWrapper, Project, ProjectImage, ProjectHeading, ProjectLink, ProjectText, PortraitImage} from './contentComponents.js';

const ContentSection = ({ lightBg, id, topLine, lightText, projectOneimgOne, projectOneHeadingOne, projectOneDescriptionOne, projectOneDescriptionTwo, projectOneLink, portraitImg, projectTwoimgOne, projectTwoHeadingOne, projectTwoDescriptionOne, projectTwoDescriptionTwo, projectTwoLink, showSecondProject }) => {
    console.log('showSecondProject:', showSecondProject); // Debugging statement

    return (
        <>
            <ContentContainer lightBg={lightBg} id={id}>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                </TextWrapper>
                <ProjectsWrapper>
                    <Project>
                        <ProjectLink href={projectOneLink} target="_blank">
                            <PortraitImage src={portraitImg}/>
                            <ProjectImage src={projectOneimgOne}/>
                            <ProjectHeading>{projectOneHeadingOne}</ProjectHeading>
                            <ProjectText>{projectOneDescriptionOne}</ProjectText>
                            <ProjectText>{projectOneDescriptionTwo}</ProjectText>
                        </ProjectLink>
                    </Project>
                    {showSecondProject && (
                        <Project>
                            <ProjectLink href={projectTwoLink} target="_blank">
                                <PortraitImage/>
                                <ProjectImage src={projectTwoimgOne}/>
                                <ProjectHeading>{projectTwoHeadingOne}</ProjectHeading>
                                <ProjectText>{projectTwoDescriptionOne}</ProjectText>
                                <ProjectText>{projectTwoDescriptionTwo}</ProjectText>
                            </ProjectLink>
                        </Project>
                        
                    )}
                </ProjectsWrapper>
            </ContentContainer>
        </>
    )
}

export default ContentSection
