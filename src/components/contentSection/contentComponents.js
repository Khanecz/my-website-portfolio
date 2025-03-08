import styled from 'styled-components';


export const ContentContainer = styled.div`
background: ${({lightBg}) => lightBg ? "#42403C" : "black"};
height: 800px;
margin-left: auto;
margin-right: auto;
z-index: 1;
color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

@media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 1600px; // fix this
}
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 30px;
display: flex;
align-items: center;
justify-content: center;
`

export const TopLine = styled.p`
color: #fff;
font-size: 24px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const ProjectsWrapper = styled.div`
max-width: 1100px;
display: flex;
justify-content: space-between;
align-items: center;
align-items: flex-start;
max-height: 564px;

@media screen and (max-width: 768px) {
    flex-direction: column;
}
`

export const Project = styled.div`
  text-align: left;
  color: white;
  max-width: 400px;
  padding-right: 40px;
  padding-left: 40px;
`

export const ProjectHeading = styled.div`
font-weight: bold;
`

export const ProjectText = styled.p`
max-width: 400px;
text-decoration: none;
`

export const ProjectLink = styled.a`
text-decoration: none;
color: white;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

`

export const ProjectImage = styled.img`
max-width: 400px;
height: 100%;
opacity: 70%;
margin-bottom: 10px;
max-height: 210px;
max-width: 400px;

${(ProjectLink)}:hover & {
    opacity: 100%;
}
`

export const PortraitImage = styled.img`
border-radius: 50%;
margin-bottom: 60px;
width: 200px;

`

