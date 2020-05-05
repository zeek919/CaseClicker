import React from 'react';
import NavLink from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ navHeadersArray }) => {
    const navLink = navHeadersArray.map((item) => (
        <NavLink to={item.link}>{item.header}</NavLink>
    ));

    return <div>{navLink}</div>;
};

Navbar.propTypes = {
    navHeadersArray: PropTypes.arrayOf.isRequired,
};

export default Navbar;
