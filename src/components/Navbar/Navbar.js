import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    Wrapper,
    NavLinkStyled,
    UserWrapper,
    LinkWrapper,
    SpecialButton,
    Bolded,
} from './StyledComponents';
import NAVBAR_HEADER from '../../constants/navbarHeaders';

const Navbar = () => {
    const userStore = useSelector((store) => store.userDataReducer);

    const [currentLink, setLink] = useState('');
    useEffect(() => setLink(window.location.href), []);

    const correctLinkHover = (header) =>
        currentLink.includes(header.toLowerCase());

    const navLink = NAVBAR_HEADER.map((item) => (
        <NavLinkStyled
            key={item.header}
            to={item.link}
            correctLinkHover={correctLinkHover(item.header)}
        >
            {item.header}
        </NavLinkStyled>
    ));

    return (
        <Wrapper>
            <UserWrapper>
                <p>{userStore.userName}</p>
                <Bolded>{userStore.money.toFixed(4)}$</Bolded>
            </UserWrapper>
            <LinkWrapper>
                {navLink}
                <SpecialButton key={'logout'} to={'/'}>
                    LOG OUT!
                </SpecialButton>
            </LinkWrapper>
        </Wrapper>
    );
};

export default Navbar;
