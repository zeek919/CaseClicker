import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Wrapper,
    InsideWrapper,
    Header,
    ContentWrapper,
    ShopWrapper,
} from './StyledComponents';
import Navbar from '../../components/Navbar/Navbar';
import navbarHeaders from '../../constants/navbarHeaders';
import CategoryBar from '../../components/CategoryBar/CategoryBar';
import { SHOP_BAR } from '../../constants/shopBar';
import ShopItems from '../../components/ShopItems/ShopItems';
import { updateCasesInfo, updateMoney } from '../../store/userData/actions';

class Shop extends Component {
    state = {
        headersLength: 0,
        currentIndex: 0,
        currentHeader: '',
        data: [],
    };

    componentDidMount() {
        this.setState({
            headersLength: SHOP_BAR.length,
            currentHeader: SHOP_BAR[0],
        });
        this.setState({
            data: this.props[SHOP_BAR[0]],
        });
    }

    changePageHandler = (reverse) => {
        let tempIndex = this.state.currentIndex;
        if (reverse) {
            tempIndex += 1;
            if (tempIndex >= this.state.headersLength) {
                tempIndex = 0;
            }
        } else {
            tempIndex -= 1;
            if (tempIndex < 0) {
                tempIndex = this.state.headersLength - 1;
            }
        }

        this.setState({
            currentIndex: tempIndex,
            currentHeader: SHOP_BAR[tempIndex],
            data: this.props[SHOP_BAR[tempIndex]],
        });
    };

    buyHandler = (itemName, itemPrice) => {
        const { caseUserData, money, updateMoneyAction } = this.props;
        const tempCaseUserData = [...caseUserData];
        let tempMoney = money;
        tempCaseUserData.map((item) => {
            if (item.name === itemName && money >= itemPrice) {
                item[this.state.currentHeader] += 1;
                tempMoney -= itemPrice;
                updateMoneyAction(tempMoney);
            }
        });
    };

    render() {
        return (
            <>
                <Navbar navHeadersArray={navbarHeaders} />
                <Wrapper>
                    <InsideWrapper>
                        <Header>Shop</Header>
                        <ContentWrapper>
                            <CategoryBar
                                header={this.state.currentHeader}
                                changePageHandler={this.changePageHandler}
                            />
                            <ShopWrapper>
                                <ShopItems
                                    products={this.state.data}
                                    buyHandler={this.buyHandler}
                                    money={this.props.money}
                                />
                            </ShopWrapper>
                        </ContentWrapper>
                    </InsideWrapper>
                </Wrapper>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    cases: state.shopReducer.cases,
    keys: state.shopReducer.keys,
    money: state.userDataReducer.money,
    caseUserData: state.userDataReducer.cases,
});

const mapDispatchToProps = (dispatch) => ({
    updateMoneyAction: (item) => dispatch(updateMoney(item)),
    updateCasesInfoAction: (item) => dispatch(updateCasesInfo(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Shop);
