import styled from 'styled-components';

export const ExperienceButton = styled.button`
    width: 70vw;
    height: 30vh;
    display: flex;
    justify-content: center;
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
`;

export const LoaderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    height: 3em;
    background-color: rgb(18, 39, 95);
`;

export const Loader = styled.div`
    background-color: rgb(25, 63, 168);
    width: ${(props) => `${props.length}%`};
    height: 80%;
`;

export const Image = styled.img`
    margin-left: 20%;
    width: 30%;
    opacity: 0.2;

    @media (max-width: 500px) {
        display: none;
    }
`;

export const TextWrapper = styled.div`
    text-align: center;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
`;
