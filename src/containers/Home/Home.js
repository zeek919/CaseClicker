import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import navbarHeaders from '../../constants/navbarHeaders';
import MoneyClickBox from '../../components/MoneyClickBox/MoneyClickBox';
import ExperienceClickBox from '../../components/ExperienceClickBox/ExperienceClickBox';
import setLevels from '../../store/levels/operations';
import { updateUserData } from '../../store/userData/operations';
import setShopData from '../../store/shop/operation';
import { Wrapper, ButtonsWrapper } from './StyledComponents';

class Home extends PureComponent {
    state = {
        isLoaded: true,
    };

    async componentDidMount() {
        const { setLevelsAction, setShopDataAction } = this.props;
        await setLevelsAction();
        await setShopDataAction();
        await this.setState({ isLoaded: false });
    }

    async componentWillUnmount() {
        const { updateUserDataAction } = this.props;
        await updateUserDataAction();
    }

    render() {
        const { isLoaded } = this.state;

        if (isLoaded) {
            return (
                <div>
                    <p>loading</p>
                </div>
            );
        }

        return (
            <Wrapper>
                <Navbar navHeadersArray={navbarHeaders} />
                <ButtonsWrapper>
                    <MoneyClickBox />
                    <ExperienceClickBox />
                </ButtonsWrapper>
            </Wrapper>
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
    setShopDataAction: setShopData,
})(Home);
