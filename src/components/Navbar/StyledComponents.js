import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 15px;
    text-decoration: none;
    color: white;
    background-color: rgba(0, 0, 0, 0);

    box-shadow: ${(props) =>
        props.correctLinkHover ? ' 0px 0px 40px 0px rgba(0, 0, 0, 0.75)' : '0'};

    @media (max-width: 600px) {
        font-size: 9px;
    }

    @media (max-width: 400px) {
        padding: 0 8px;
    }

    &:hover {
        box-shadow: ${(props) =>
            props.correctLinkHover
                ? '0'
                : 'inset 0px 0px 80px 0px rgba(0, 0, 0, 0.75)'};
        transition: 0.5s ease-in-out;
    }
`;

export const SpecialButton = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    text-decoration: none;
    height: 100%;
    padding: 0 15px;
    @media (max-width: 600px) {
        font-size: 9px;
    }

    &:hover {
        box-shadow: ${(props) =>
            props.correctLinkHover
                ? '0'
                : 'inset 0px 0px 80px 0px rgba(0, 0, 0, 0.75)'};
        transition: 0.5s ease-in-out;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    top: 0;
    display: flex;
    background: transparent;
    padding-bottom: 50px;
`;

export const UserWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 100px;
    color: white;
    font-size: 16px;
    border-radius: 0 0 25px 0;
    background: rgba(68, 25, 125, 0.5);
    background: radial-gradient(
        circle,
        rgba(68, 25, 125, 0.5) 0%,
        rgba(10, 10, 10, 0.5) 100%
    );
    border-bottom: 1px solid rgba(48, 0, 92, 1);
    border-right: 5px solid rgba(48, 0, 92, 1);

    @media (max-width: 600px) {
        display: none;
    }
`;

export const LinkWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    height: 70px;
    background: rgba(68, 25, 125, 0.5);
    background: radial-gradient(
        circle,
        rgba(68, 25, 125, 0.5) 0%,
        rgba(10, 10, 10, 0.5) 100%
    );
`;

export const Bolded = styled.div`
    font-size: 20px;
`;
