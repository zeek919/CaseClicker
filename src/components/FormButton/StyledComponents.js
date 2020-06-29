import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 10px;
    width: 105px;
    height: 60px;
    color: white;
    margin: 10px;
    background-color: transparent;
    border: 1px solid white;
    border-top: none;
    border-bottom: none;

    &:hover {
        border-radius: 20px;
        border-left: 5px solid white;
        border-right: 5px solid white;

        transition: 0.3s ease-in-out;
    }

    &:focus {
        outline: none;
        border-radius: 20px;
        border-left: 5px solid white;
        border-right: 5px solid white;

        transition: 0.3s ease-in-out;
    }
    transition: 0.3s ease-in-out;
`;
