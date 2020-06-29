import styled from 'styled-components';

export const Wrapper = styled.div`
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.div`
    z-index: 1;
    overflow-y: auto;
    width: 70vw;
    height: 60vh;
    background: ${(props) => (props.color ? props.color : '#181927')};
    background: radial-gradient(
        circle,
        ${(props) => (props.color ? props.color : '#181927')} 35%,
        rgba(10, 10, 10, 1) 100%
    );
    border-radius: 15px;
    border: ${(props) => (props.color ? 'none' : 'none')};

    &::-webkit-scrollbar {
        box-shadow: inset 0 0 2px grey;
        border-radius: 10px;
        background-color: black;
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: white;
    }
`;

export const Backdrop = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
`;
