import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Wrapper,
    InsideWrapper,
    Header,
    ContentWrapper,
    ShopWrapper,
} from './StyledComponents';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBar from '../../components/CategoryBar/CategoryBar';
import { SHOP_BAR } from '../../constants/shopBar';
import ShopItems from '../../components/ShopItems/ShopItems';
import { updateMoney } from '../../store/userData/actions';
import { useUpdate, useRedirect } from '../../hooks';

const Shop = () => {
    useUpdate();
    useRedirect();

    const [headersLength, setHeadersLength] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentHeader, setCurrentHeader] = useState(0);
    const [data, setData] = useState([]);

    const cases = useSelector((state) => state.shopReducer);
    const money = useSelector((state) => state.userDataReducer.money);

    useEffect(() => {
        setHeadersLength(SHOP_BAR.length);
        setCurrentHeader(SHOP_BAR[0]);
        setData(cases.cases);
    }, []);

    const changePageHandler = (reverse) => {
        let tempIndex = currentIndex;
        if (reverse) {
            tempIndex += 1;
            tempIndex >= headersLength ? (tempIndex = 0) : null;
        } else {
            tempIndex -= 1;
            tempIndex < 0 ? (tempIndex = headersLength - 1) : null;
        }

        setCurrentIndex(tempIndex);
        setCurrentHeader(SHOP_BAR[tempIndex]);
        setData(cases[SHOP_BAR[tempIndex]]);
    };

    return (
        <>
            <Navbar />
            <Wrapper>
                <InsideWrapper>
                    <Header>Shop</Header>
                    <ContentWrapper>
                        <CategoryBar
                            header={currentHeader}
                            changePageHandler={changePageHandler}
                        />
                        <ShopWrapper>
                            <ShopItems products={data} money={money} />
                        </ShopWrapper>
                    </ContentWrapper>
                </InsideWrapper>
            </Wrapper>
        </>
    );
};

export default Shop;
