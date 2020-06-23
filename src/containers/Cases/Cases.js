import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import navbarHeaders from '../../constants/navbarHeaders';
import CaseBoxes from '../../components/CaseBoxes/CaseBoxes';
import style from './Cases.scss';
import {
    Wrapper,
    InsideWrapper,
    Header,
    ContentWrapper,
} from './StyledComponents';

const Cases = ({ casesData, userCasesInfo }) => (
    <>
        <Navbar navHeadersArray={navbarHeaders} />
        <Wrapper>
            <InsideWrapper>
                <Header>Cases</Header>
                <ContentWrapper>
                    <CaseBoxes
                        casesData={casesData}
                        userCasesInfo={userCasesInfo}
                    />
                </ContentWrapper>
            </InsideWrapper>
        </Wrapper>
    </>
);

const mapStateToProps = (state) => ({
    casesData: state.casesReducer.cases,
    userCasesInfo: state.userDataReducer.cases,
});

export default connect(mapStateToProps, {})(Cases);
