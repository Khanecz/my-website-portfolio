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
}
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
display: flex;
align-items: center;
justify-content: center;
`

export const TopLine = styled.p`
color: #fff;
font-size: 16px;
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
`

export const Project = styled.div`
  text-align: left;
  color: white;
  max-width: 400px;

  
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

`

export const ProjectImage = styled.img`
max-width: 400px;
height: 100%;
opacity: 30%;

${(ProjectLink)}:hover & {
    opacity: 100%;
}
`

export const CVLink = styled.a`
text-decoration: none;
text-align: center;
color: white;
display: ${({displayCVButton}) => displayCVButton ? "#inline-block" : "none"};
`

export const CVButton = styled.button`
width: 200px;
height: 50px;
background-color: #42403C;
border: none;
color: white;
cursor: pointer;
font-size: 16px;

&:hover {
  color: #17a398;
  transition: 0.3s ease-in-out;
  background-color: white;
  
}
`