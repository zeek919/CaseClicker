import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const TitleBar = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1em;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px 80px;
    border-radius: 0 0 15px 15px;
`;

export const ImageWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    height: 50vh;
    object-fit: contain;

    @media (max-width: 900px) {
        height: 30vh;
    }

    @media (max-width: 600px) {
        height: 20vh;
    }
`;

export const Button = styled.button`
    height: 3em;
    width: 100%;
    color: white;
    border: none;
    background-color: rgba(0, 0, 0, 0.7);
`;
