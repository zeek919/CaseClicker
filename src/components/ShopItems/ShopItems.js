import React from 'react';
import {
    Wrapper,
    InsideWrapper,
    BuyButton,
    ShopWrapper,
    Image,
} from './StyledComponents';

const ShopItems = ({ products, buyHandler, money }) => {
    const generateKey = () => Math.random();

    const isAvailable = (itemPrice) => itemPrice <= money;

    const productsList = Object.values(products).map((item) => (
        <Wrapper key={generateKey()}>
            <InsideWrapper isAvilable={isAvailable(item.price)}>
                <Image src={item.image} alt={item.name} />
                {item.name}
            </InsideWrapper>
            <BuyButton
                onClick={() => buyHandler(item.source, item.price)}
                isAvilable={isAvailable(item.price)}
            >
                Buy for: ${item.price}$
            </BuyButton>
        </Wrapper>
    ));

    return <ShopWrapper>{productsList}</ShopWrapper>;
};

export default ShopItems;
