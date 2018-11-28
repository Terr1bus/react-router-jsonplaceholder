import React from 'react';
import {
    NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarNavItem = (props) => {
    const isActive = window.location.pathname === props.href;
    const classList = `nav-link ${isActive ? 'active' : ''}`
    return (
        <NavItem>
            <Link className={classList}  to={props.href}>{props.text}</Link>
        </NavItem>
    )
} 

export default NavbarNavItem;