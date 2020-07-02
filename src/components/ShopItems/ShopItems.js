import React from 'react';
import {
    Wrapper,
    InsideWrapper,
    BuyButton,
    ShopWrapper,
    Image,
} from './StyledComponents';
import { generateKey } from '../../helpers';
import { useDispatch } from 'react-redux';
import { buyItem } from '../../store/userData/actions';

const ShopItems = ({ products, money }) => {
    const dispatch = useDispatch();
    const isAvailable = (itemPrice) => itemPrice <= money;

    const productsList = Object.values(products).map((item) => (
        <Wrapper key={generateKey()}>
            <InsideWrapper isAvilable={isAvailable(item.price)}>
                <Image src={item.image} alt={item.name} />
                {item.name}
            </InsideWrapper>
            <BuyButton
                onClick={() => dispatch(buyItem(item))}
                isAvilable={isAvailable(item.price)}
            >
                Buy for: ${item.price}$
            </BuyButton>
        </Wrapper>
    ));
    return <ShopWrapper>{productsList}</ShopWrapper>;
};

export default ShopItems;
