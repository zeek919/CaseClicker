import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 10px;
`;

export const SkinsWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Wrapper = styled.div`
    height: min-content;
    border: 1px solid black;
    border-radius: 15px 15px 0 0;
    background: radial-gradient(
        circle,
        ${(props) => (props.borderColor ? props.borderColor : '#000000')} 0%,
        rgba(10, 10, 10, 1) 100%
    );
    margin-left: 15px;

    @media (max-width: 1200px) {
        margin-top: 15px;
    }
`;

export const Image = styled.img`
    margin: 15px;
`;

export const InfoContainer = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    background: radial-gradient(
        circle,
        rgba(10, 10, 10, 1) 90%,
        ${(props) => (props.backgroundColor ? props.backgroundColor : '#000000')}
            100%
    );
    color: white;
`;

export const SellButton = styled.button`
    background-color: black;
    color: white;
    margin-left: 15px;
    margin-top: 10px;
    width: 95%;
    height: 25px;
    border: none;
`;
