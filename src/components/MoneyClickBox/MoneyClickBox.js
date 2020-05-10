/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dolar from '../../assets/images/dolar.png';
import style from './MoneyClickBox.scss';
import actions from '../../store/userData/actions';

const MoneyClickBox = ({ money, currentTap, setMoney }) => {
    const onClickHandler = () => {
        const tappedMoney = money + currentTap;
        setMoney(tappedMoney);
    };

    return (
        <button
            type="button"
            className={style.wrapper}
            onClick={onClickHandler}
        >
            <img src={dolar} alt="dolar" className={style.image} />
            <div className={style.textWrapper}>
                <h1>{money.toFixed(4)} $</h1>
                <h3>Current Tap: {currentTap}</h3>
            </div>
        </button>
    );
};

const mapStateToProps = (state) => ({
    money: state.userDataReducer.money,
    currentTap: state.userDataReducer.currentTap,
});

const mapDispatchToProps = (dispatch) => ({
    setMoney: (item) => dispatch(actions.updateMoney(item)),
});

MoneyClickBox.propTypes = {
    money: PropTypes.number.isRequired,
    currentTap: PropTypes.number.isRequired,
    setMoney: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoneyClickBox);
