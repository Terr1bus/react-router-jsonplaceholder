import React from 'react';
import NavbarNavItem from './NavbarNavItem';
import {
    Navbar,
    Nav,
    NavbarBrand,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => (
    <Navbar>
        <Link className="navbar-brand" to="/">Project name</Link>
        <Nav pills>
            <NavbarNavItem href="/" text="Home" />
            <NavbarNavItem href="/about" text="About" />
            <NavbarNavItem href="/contacts" text="Contacts" />
            </Nav>
    </Navbar>
)

export default Header;