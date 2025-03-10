import styled from 'styled-components';

export const HeroContainer = styled.div`
background: black;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`
export const ImageBg = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
outline: 1px;
opacity: 0.5;
`

export const HeroContent = styled.div`
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
max-width: 1200px;
padding: 8px 24px;
`

export const HeroH1 = styled.h1`
color: white;
font-size: 48px;
text-align: center;

@media screen and (max-width: 728px) {
    font-size: 36px;
}
`

export const HeroP = styled.p`
color: white;
font-size: 20px;
`