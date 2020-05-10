import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Navbar.scss';

const Navbar = ({ navHeadersArray }) => {
    const navLink = navHeadersArray.map((item) => (
        <NavLink key={item.header} to={item.link} className={style.link}>
            {item.header}
        </NavLink>
    ));

    const [active, setActive] = useState(false);

    return (
        <div className={style.menuWrapper}>
            <div
                className={
                    active
                        ? style.wrapperHamburgerActive
                        : style.wrapperHamburger
                }
            >
                {navLink}
            </div>
            <button
                onClick={() => setActive(!active)}
                type="button"
                className={active ? style.hamburgerActive : style.hamburger}
            >
                <div className={active ? style.activeLine1 : style.line1} />
                <div className={active ? style.activeLine2 : style.line2} />
                <div className={active ? style.activeLine3 : style.line3} />
            </button>
        </div>
    );
};

Navbar.propTypes = {};

export default Navbar;
