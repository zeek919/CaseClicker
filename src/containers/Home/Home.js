import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUserData } from '../../services/firebaseInit';
import Navbar from '../../components/Navbar/Navbar';
import navbarHeaders from '../../constants/navbarHeaders';
import MoneyClickBox from '../../components/MoneyClickBox/MoneyClickBox';
import style from './Home.scss';

class Home extends Component {
    async componentWillUnmount() {
        const { money, currentTap, experience, items } = this.props;
        await updateUserData(money, currentTap, experience, items);
    }

    render() {
        return (
            <div className={style.wrapper}>
                <Navbar navHeadersArray={navbarHeaders} />
                <div className={style.clickWrapper}>
                    <MoneyClickBox />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    money: state.userDataReducer.money,
    currentTap: state.userDataReducer.currentTap,
    experience: state.userDataReducer.experience,
    items: state.userDataReducer.items,
});

Home.propTypes = {
    money: PropTypes.number.isRequired,
    currentTap: PropTypes.number.isRequired,
    experience: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, {})(Home);
