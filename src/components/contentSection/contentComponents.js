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