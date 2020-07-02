import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItems } from '../../store/userData/actions';
import {
    Container,
    Wrapper,
    InfoContainer,
    Image,
    SkinsWrapper,
    SellButton,
} from './StyledComponents';
import { generateKey } from '../../helpers';

const OwnedSkinBoxes = () => {
    const [state, forceUpdate] = useState(true);
    const dispatch = useDispatch();
    const skins = useSelector((state) => state.userDataReducer.items);

    const ownedSkinContainer = skins.map((item) => (
        <Container key={generateKey()}>
            <Wrapper borderColor={item.color}>
                <Image src={item.image} alt={item.name} />
                <InfoContainer backgroundColor={item.color}>
                    <p>{item.name}</p>
                    <p>{item.type}</p>
                </InfoContainer>
            </Wrapper>

            <SellButton
                onClick={() => {
                    dispatch(removeItems(item));
                    forceUpdate(!state);
                }}
            >
                Sell for: ${item.price}
            </SellButton>
        </Container>
    ));

    return <SkinsWrapper>{ownedSkinContainer}</SkinsWrapper>;
};

export default OwnedSkinBoxes;
