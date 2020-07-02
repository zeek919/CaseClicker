import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    background: #191820;
    color: white;
    margin: 10px;
    min-width: 270px;
    min-height: 300px;
`;

export const InsideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #21202b;
    box-shadow: inset 0px 0px 150px rgba(0, 0, 0, 0.5);
    padding: 10px;
    height: min-content;
    width: min-content;
    opacity: ${(props) => (props.isAvilable ? 1 : 0.5)};
`;

export const Image = styled.img`
    width: 256px;
    height: 256px;
`;
export const BuyButton = styled.button`
    width: 100%;
    height: 2em;
    color: white;
    border: 1px solid white;
    font-size: 18px;
    background: linear-gradient(180deg, #000000 0%, rgba(135, 127, 127, 0) 100%),
        #000000;
    bottom: 0;
    pointer-events: ${(props) => (props.isAvilable ? 'auto' : ' none')};
    opacity: ${(props) => (props.isAvilable ? 1 : 0.5)};

    &:active {
        background-color: ${(props) =>
            props.isAvilable ? '#381ed7' : '#000000'};

        transition: 0.2s;
    }
`;

export const ShopWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    display: flex;
`;
