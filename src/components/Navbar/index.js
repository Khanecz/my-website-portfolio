import React, {useState, useEffect} from 'react'
import {Nav, NavbarMenu, NavItem, NavLink, CVLink} from './navbarComponents';
import CV from "../../files/Rezabek_CV.pdf";

const Navbar = (toggle) => {


    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    return (
        <>
        <Nav scrollNav = {scrollNav}> 
            <NavbarMenu>
                    <NavItem>
                        <NavLink to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}>About</NavLink>
                    </NavItem>
                    <NavItem>
                         <NavLink to="games"
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact="true"
                         offset={-80}>Games</NavLink>
                    </NavItem>
                    <NavItem>
                         <NavLink to="mygames"
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact="true"
                         offset={-80}>My Games</NavLink>
                    </NavItem>
                    <NavItem>
                        <CVLink href={CV} download="CV">
                            CV (Download)
                        </CVLink>
                    </NavItem>

            </NavbarMenu>
        </Nav>
        </>
    )
}

export default Navbar
