import styled from 'styled-components';

export const Box = styled.div`
    border: 1px solid ${(props) => props.color};
    border-bottom: 0px;
    border-radius: 10px 10px 0 0;
    margin: 10px;
`;

export const InfoBox = styled.div`
text-align: center;
    /* background-color: ${(props) => props.color}; */
    background: radial-gradient(
        circle,
        rgba(10, 10, 10, 1) 50%,
        ${(props) => (props.color ? props.color : '#000000')}
            100%
    );
    color: white;
`;

export const SkinContainer = styled.div`
    display: flex;
    flex: 0 0 100%;
    position: relative;

    transform: translateX(${(props) => (props.open ? '-82%' : '-10%')});
    transition: transform ${(props) => (props.open ? '1s ease-in-out' : '0s')};

    @media (min-width: 0px) {
        margin-left: -30%;
    }

    @media (min-width: 768px) {
        margin-left: 30%;
    }

    @media (min-width: 1100px) {
        margin-left: 40%;
    }
`;

export const ItemInRoll = styled.div`
    background-color: #24242b;
    margin: 10px;
    width: auto;
    border-left: 5px solid ${(props) => props.color};
    border-right: 5px solid ${(props) => props.color};
    border-radius: 15px;
`;

export const RollButton = styled.button`
    margin: 20px 0;
    width: 25vw;
    height: 3em;
    border-radius: 15px;
    border: 1px solid white;
    background: radial-gradient(
        circle,
        rgba(30, 0, 70, 1) 0%,
        rgba(10, 10, 10, 1) 100%
    );
    color: white;
`;
