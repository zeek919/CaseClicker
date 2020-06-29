import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`;

export const InputContainer = styled.input`
    width: 300px;
    height: 4vh;
    color: white;
    border: none;
    border-radius: 0 0 15px 15px;
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.7);

    &::placeholder {
        text-align: center;
    }
    &:focus {
        outline: none;
        border-left: 7px solid rgba(255, 255, 255, 0.5);
        border-right: 7px solid rgba(255, 255, 255, 0.5);
        transition: 0.3s ease-in-out;
    }
`;

export const Label = styled.label`
    font-size: 1.5em;
`;
