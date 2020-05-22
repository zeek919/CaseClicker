import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import navbarHeaders from '../../constants/navbarHeaders';
import MoneyClickBox from '../../components/MoneyClickBox/MoneyClickBox';
import ExperienceClickBox from '../../components/ExperienceClickBox/ExperienceClickBox';
import setLevels from '../../store/levels/operations';
import { updateUserData } from '../../store/userData/operations';
import style from './Home.scss';

class Home extends Component {
    state = {
        isLoaded: false,
    };

    async componentDidMount() {
        const { setLevelsAction } = this.props;
        await setLevelsAction();
        await this.setState({ isLoaded: true });
    }

    async componentWillUnmount() {
        const { updateUserDataAction } = this.props;
        await updateUserDataAction();
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <div>
                    <p>Loading</p>
                </div>
            );
        } else
            return (
                <div className={style.wrapper}>
                    <Navbar navHeadersArray={navbarHeaders} />
                    <div className={style.clickWrapper}>
                        <MoneyClickBox />
                        <ExperienceClickBox />
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
    setLevelsAction: PropTypes.func.isRequired,
    updateUserDataAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
    setLevelsAction: setLevels,
    updateUserDataAction: updateUserData,
})(Home);
