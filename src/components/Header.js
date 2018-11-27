import React from 'react';
import NavbarNavItem from './NavbarNavItem';
import {
    Navbar,
    Nav,
    NavbarBrand,
} from 'reactstrap';
import { Router } from 'react-router-dom';

const Header = () => (
    <Navbar>
        <NavbarBrand href="#">Project name</NavbarBrand>
        <Nav pills>
            <NavbarNavItem active={true} href="/" text="Home" />
            <NavbarNavItem active={false} href="/about" text="About" />
            <NavbarNavItem active={false} href="/contacts" text="Contacts" />
            </Nav>
    </Navbar>
)

export default Header;