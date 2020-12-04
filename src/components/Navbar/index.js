import React from 'react'
import {Nav, NavbarMenu, NavItem, NavLink} from './navbarComponents';

const Navbar = () => {
    return (
        <>
        <Nav>
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
