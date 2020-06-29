import styled from 'styled-components';

export const Box = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.35);
    font-family: 'Montserrat', sans-serif;
    box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
    width: 450px;
    height: 450px;
    transform: rotateZ(45deg);
`;

export const InsideWrapper = styled.div`
    transform: rotateZ(-45deg);
`;

export const ErrorWrapper = styled.div`
    margin: 0;
    padding: 0;
    font-size: 11px;
    text-align: center;
    color: red;
    font-weight: 700;
    margin-bottom: 1em;
`;

export const ContentForm = styled.form`
    & > * {
        margin: 20px;
    }
`;

export const ButtonWrapper = styled.div`
    margin: 0;
    padding: 0;
    font-size: 11px;
    text-align: center;
    color: red;
    font-weight: 700;
    margin-bottom: 1em;
`;
