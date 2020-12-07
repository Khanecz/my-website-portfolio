import styled from 'styled-components';

export const FooterContainer = styled.div`
background-color: black;
`

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
max-width: 1100px;
margin: 0 auto;
`

export const SocialMediaWrap = styled.div`
display: flex;
max-width: 1100px;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px){
    flex-direction: column;
}
`

export const WebsiteRights = styled.small`
color: #fff;
margin-top: 32px;
`

export const SocialIcons = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
padding-right: 16px;
`