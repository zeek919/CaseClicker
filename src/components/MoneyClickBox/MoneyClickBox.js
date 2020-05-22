/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dolar from '../../assets/images/dolar.png';
import style from './MoneyClickBox.scss';
import { updateMoney } from '../../store/userData/actions';

const MoneyClickBox = ({ money, currentTap, setMoney }) => {
    const [tappedCount, setTappedCount] = useState(0);
    const [tappedValue, setTappedValue] = useState(currentTap);

    const calculateTapPerClick = () => {
        setTappedValue(currentTap + parseInt(tappedCount / 10, 10) * 0.05);
    };

    const onClickHandler = () => {
        const tappedMoney = money + currentTap;
        setMoney(tappedMoney);
        setTappedCount(tappedCount + 1);
        setTappedValue(currentTap);
    };

    return (
        <button
            type="button"
            className={style.wrapper}
            onClick={() => {
                onClickHandler();
            }}
        >
            <img src={dolar} alt="dolar" className={style.image} />
            <div className={style.textWrapper}>
                <h1>{money.toFixed(4)} $</h1>
                <h3>Current Tap: {tappedValue.toFixed(4)}</h3>
            </div>
        </button>
    );
};

const mapStateToProps = (state) => ({
    money: state.userDataReducer.money,
    currentTap: state.userDataReducer.currentTap,
});

const mapDispatchToProps = (dispatch) => ({
    setMoney: (item) => dispatch(updateMoney(item)),
});

MoneyClickBox.propTypes = {
    money: PropTypes.number.isRequired,
    currentTap: PropTypes.number.isRequired,
    setMoney: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoneyClickBox);
