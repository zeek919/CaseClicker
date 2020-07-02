import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {
    Wrapper,
    InsideWrapper,
    Header,
    ContentWrapper,
} from './StyledComponents';
import { useSelector } from 'react-redux';
import SingleUpgrade from '../../components/SingleUpgrade/SingleUpgrade';
import { generateKey } from '../../helpers';
import { useUpdate, useRedirect } from '../../hooks';

const Upgrades = () => {
    useUpdate();
    useRedirect();
    const userExperience = useSelector(
        (state) => state.userDataReducer.experience
    );
    const tapUpgradesData = useSelector((state) => state.upgradesReducer.tap);

    const tapUpgradesComponents = Object.values(tapUpgradesData).map((data) => {
        if (userExperience >= data.minExp) {
            return <SingleUpgrade upgrade={data} key={generateKey()} />;
        }
    });

    return (
        <>
            <Navbar />
            <Wrapper>
                <InsideWrapper>
                    <Header>Upgrades</Header>
                    <ContentWrapper>{tapUpgradesComponents}</ContentWrapper>
                </InsideWrapper>
            </Wrapper>
        </>
    );
};

export default Upgrades;
