import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 10px 0;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const Image = styled.img`
    background: rgb(111, 111, 111);
    background: radial-gradient(
        circle,
        rgba(111, 111, 111, 0.6811099439775911) 70%,
        rgba(0, 0, 0, 0.8295693277310925) 100%
    );
    padding: 10px;
`;

export const Describe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: grey;
`;

export const Title = styled.p`
    font-size: 20px;
    color: white;
`;

export const Button = styled.button`
    pointer-event: ${(props) => !props.disabled};

    @media (max-width: 500px) {
        height: 2.5em;
    }
`;
