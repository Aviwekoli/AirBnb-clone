import React from 'react';
import logo from '../images/airbnb-logo.png'

const Navbar = () => {
    return (
        <nav>
            <img className="nav--logo"src={logo} alt="logo picture" />
        </nav>
    )
}

export default Navbar;