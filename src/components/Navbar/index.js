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
                        <NavLink to="About">About</NavLink>
                    </NavItem>
                    <NavItem>
                         <NavLink to="Websites">Websites</NavLink>
                    </NavItem>
                    <NavItem>
                         <NavLink to="Games">Games</NavLink>
                    </NavItem>
                    <NavItem>
                         <NavLink to="CV">CV</NavLink>
                    </NavItem>
            </NavbarMenu>
        </Nav>
        </>
    )
}

export default Navbar
