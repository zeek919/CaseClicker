import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InsideWrapper = styled.div`
    width: 90vw;
    height: 80vh;
    background-color: #302f3f;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 25px 25px 0 0;
    background: rgb(61, 3, 139);
    background: radial-gradient(
        circle,
        rgba(61, 3, 139, 1) 0%,
        rgba(10, 10, 10, 1) 100%
    );
    box-shadow: 0px 1px 19px 0px rgba(0, 0, 0, 0.75);
    border: 2px solid rgba(48, 0, 92, 1);
    border-bottom: none;
    border-top: none;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2em;
    font-size: 1.5em;
    background-color: #21202c;
    color: white;
    border-radius: 25px 25px 0 0;
    background: rgb(48, 0, 92);
    background: radial-gradient(
        circle,
        rgba(48, 0, 92, 1) 0%,
        rgba(0, 0, 0, 1) 100%
    );
    outline-style: 2px solid rgba(88, 82, 96, 1);
    text-transform: uppercase;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3em;
    box-shadow: inset 0px 1px 19px 0px rgba(0, 0, 0, 0.75);
    border-radius: 25px;
    border-left: 2px solid rgba(48, 0, 92, 1);
    border-right: 2px solid rgba(48, 0, 92, 1);
    width: 90%;
    height: 80%;
    background-color: #2b293a;
    overflow-y: auto;
    background: rgb(68, 25, 125);
    background: radial-gradient(
        circle,
        rgba(68, 25, 125, 1) 0%,
        rgba(10, 10, 10, 1) 100%
    );

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

export const ShopWrapper = styled.div``;
