import styled, { keyframes } from 'styled-components';

export const Image = styled.img`
    @media (max-width: 500px) {
        display: none;
    }
`;

const rotate = keyframes`
    0% {
        transform: rotateZ(0deg);
    }

    100% {
        transform: rotateZ(360deg);
    }
`;

export const MoneyButton = styled.button`
    width: 70vw;
    height: 30vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 25px;
    border: none;
    margin-top: 5em;
    color: white;

    background: rgb(0, 0, 0);
    background: radial-gradient(
        circle,
        rgba(0, 0, 0, 0.6811099439775911) 86%,
        rgba(0, 5, 149, 0.8295693277310925) 100%
    );
    box-shadow: none;
    border-bottom: 1px solid rgb(0, 5, 149);
    transition: 0.3s ease-in-out;

    &:active {
        box-shadow: inset 0px 0px 116px 0px rgba(0, 5, 149, 0.75);
        transition: 0.1s ease-in-out;
    }

    &:focus {
        outline: none;
    }

    &:hover {
        ${Image} {
            animation: ${rotate} 0.5s ease-in-out;
        }
    }
`;

export const TextWrapper = styled.div`
    text-align: center;
`;
