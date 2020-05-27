import styled from 'styled-components';

export const CaseBox = styled.div`
    background: #21202b;
    box-shadow: inset 0px 0px 150px rgba(0, 0, 0, 0.5);
    padding: 10px;
    width: min-content;
    opacity: ${(props) => (props.exist[0] ? 1 : 0.5)};
`;

export const OpenButton = styled.button`
    width: 100%;
    height: 2em;
    color: white;
    border: 1px solid white;
    font-size: 18px;
    background: linear-gradient(180deg, #000000 0%, rgba(135, 127, 127, 0) 100%),
        #000000;
    &:disabled {
        ${(props) => !props.exist[0]}
    }
`;

export const SellButton = styled.button`
    width: 100%;
    height: 1.5em;
    color: white;
    border: none;
    font-size: 18px;
    background: linear-gradient(180deg, #000000 0%, rgba(91, 91, 91, 0) 100%),
        #353535;
    &:disabled {
        ${(props) => !props.exist[0]}
    }
`;
