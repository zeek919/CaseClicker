import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import MoneyClickBox from '../../components/MoneyClickBox/MoneyClickBox';
import ExperienceClickBox from '../../components/ExperienceClickBox/ExperienceClickBox';
import setLevels from '../../store/levels/operations';
import setShopData from '../../store/shop/operation';
import { Wrapper, ButtonsWrapper } from './StyledComponents';
import { useUpdate, useRedirect } from '../../hooks';

const Home = () => {
    useUpdate();
    useRedirect();

    const [isLoaded, load] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLevels());
        dispatch(setShopData());
        load(false);
    });

    if (isLoaded) {
        return (
            <div>
                <p>loading</p>
            </div>
        );
    }

    return (
        <Wrapper>
            <Navbar />
            <ButtonsWrapper>
                <MoneyClickBox />
                <ExperienceClickBox />
            </ButtonsWrapper>
        </Wrapper>
    );
};

export default Home;
