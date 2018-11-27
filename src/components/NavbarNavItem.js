import React from 'react';
import {
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarNavItem = (props) => {
    return (
        <NavItem>
            <Link to={props.href}>{props.text}</Link>
        </NavItem>
    )
} 

export default NavbarNavItem;