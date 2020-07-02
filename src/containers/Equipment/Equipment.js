import React from 'react';
import {
    Wrapper,
    InsideWrapper,
    Header,
    ContentWrapper,
} from './StyledComponents';
import Navbar from '../../components/Navbar/Navbar';
import OwnedSkinBoxes from '../../components/OwnedSkinBoxes/OwnedSkinBoxes';
import { useUpdate, useRedirect } from '../../hooks';

const Equipment = () => {
    useUpdate();
    useRedirect();
    return (
        <>
            <Navbar />
            <Wrapper>
                <InsideWrapper>
                    <Header>Equipment</Header>
                    <ContentWrapper>
                        <OwnedSkinBoxes />
                    </ContentWrapper>
                </InsideWrapper>
            </Wrapper>
        </>
    );
};

export default Equipment;
