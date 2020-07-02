import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dolar from '../../assets/images/dolar.png';
import { updateMoney } from '../../store/userData/actions';
import { MoneyButton, Image, TextWrapper } from './StyledComponents';

const MoneyClickBox = () => {
    const dispatch = useDispatch();
    const money = useSelector((state) => state.userDataReducer.money);
    const currentTap = useSelector((state) => state.userDataReducer.currentTap);

    return (
        <MoneyButton
            type="button"
            onClick={() => dispatch(updateMoney(money + currentTap))}
        >
            <Image src={dolar} alt="dolar" />
            <TextWrapper>
                <h1>{money.toFixed(4)} $</h1>
                <h3>Current Tap: {currentTap.toFixed(4)}</h3>
            </TextWrapper>
        </MoneyButton>
    );
};

export default React.memo(MoneyClickBox);
