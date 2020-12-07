import React from 'react';
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa';
import {FooterContainer, FooterWrap, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink} from './footerComponents.js';
const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <SocialMediaWrap>
                    <SocialIcons>
                            <SocialIconLink href="//www.linkedin.com/in/michaelrezabek/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.github.com/Khanecz" target="_blank" aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/khanecz4/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                        </SocialIcons>
                        <WebsiteRights>
                            Michael Řežábek @ {new Date().getFullYear()}
                        </WebsiteRights>
                    </SocialMediaWrap>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
