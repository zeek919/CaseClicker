/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect } from 'react-redux';
import { updateMoney, updateItems } from '../../store/userData/actions';
import {
    Container,
    Wrapper,
    InfoContainer,
    Image,
    SkinsWrapper,
    SellButton,
} from './StyledComponents';

const OwnedSkinBoxes = ({
    money,
    skins,
    updateMoneyAction,
    updateItemsAction,
}) => {
    const generateKey = () => {
        const randomNumber = Math.random();
        return randomNumber;
    };

    const clickHandler = (skin) => {
        const tempSkinArray = [...skins];
        const index = tempSkinArray.findIndex((a) => a === skin);
        tempSkinArray.splice(index, 1);
        updateMoneyAction(money + skin.price);
        updateItemsAction(tempSkinArray);
    };

    const ownedSkinContainer = skins.map((item) => (
        <Container key={generateKey()}>
            <Wrapper borderColor={item.color}>
                <Image src={item.image} alt={item.name} />
                <InfoContainer backgroundColor={item.color}>
                    <p>{item.name}</p>
                    <p>{item.type}</p>
                </InfoContainer>
            </Wrapper>

            <SellButton onClick={() => clickHandler(item)}>
                Sell for: ${item.price}
            </SellButton>
        </Container>
    ));

    return <SkinsWrapper>{ownedSkinContainer}</SkinsWrapper>;
};

const mapStateToProps = (state) => ({
    money: state.userDataReducer.money,
    skins: state.userDataReducer.items,
});

const mapDispatchToProps = (dispatch) => ({
    updateMoneyAction: (item) => dispatch(updateMoney(item)),
    updateItemsAction: (item) => dispatch(updateItems(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OwnedSkinBoxes);
