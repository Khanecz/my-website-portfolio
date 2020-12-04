import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';


export const Nav = styled.nav`
background: black;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
position: sticky;
z-index: 10;
width: 100%;
top: 0;

/*@media screen and (max-width: 960px) {
    transition: 0.8 all ease;
}*/
`

export const NavbarMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
`

export const NavItem = styled.li`
height: 80px;
padding: 0 24px;
`

export const NavLink = styled(LinkScroll)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
height: 100%;
cursor: pointer;
padding: 0 1 rem;
`