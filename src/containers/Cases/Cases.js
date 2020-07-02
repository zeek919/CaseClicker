import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import CaseBoxes from '../../components/CaseBoxes/CaseBoxes';
import {
    Wrapper,
    InsideWrapper,
    Header,
    ContentWrapper,
} from './StyledComponents';
import { generateKey } from '../../helpers';
import { useUpdate, useRedirect } from '../../hooks';

const Cases = () => {
    useUpdate();
    useRedirect();
    const casesData = useSelector((state) => state.casesReducer.cases);

    const caseContainer = casesData.map((singleCaseData) => (
        <CaseBoxes casesData={singleCaseData} key={generateKey()} />
    ));

    return (
        <>
            <Navbar />
            <Wrapper>
                <InsideWrapper>
                    <Header>Cases</Header>
                    <ContentWrapper>{caseContainer}</ContentWrapper>
                </InsideWrapper>
            </Wrapper>
        </>
    );
};

export default Cases;
