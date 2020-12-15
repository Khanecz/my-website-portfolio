import React, {useState, useEffect} from 'react'
import {Nav, NavbarMenu, NavItem, NavLink} from './navbarComponents';

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
                         <NavLink to="website"
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact="true"
                         offset={-80}>Websites</NavLink>
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
                         <NavLink to="cv"
                         smooth={true}
                         duration={500}
                         spy={true}
                         exact="true"
                         offset={-80}>CV</NavLink>
                    </NavItem>
            </NavbarMenu>
        </Nav>
        </>
    )
}

export default Navbar
