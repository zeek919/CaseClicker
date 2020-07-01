import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import navbarHeaders from '../../constants/navbarHeaders';
import CaseBoxes from '../../components/CaseBoxes/CaseBoxes';
import {
    Wrapper,
    InsideWrapper,
    Header,
    ContentWrapper,
} from './StyledComponents';
import { updateUserData } from '../../store/userData/operations';

class Cases extends Component {
    async componentWillUnmount() {
        const { updateUserDataAction } = this.props;
        await updateUserDataAction();
    }

    render() {
        const { casesData } = this.props;

        const caseContainer = casesData.map((singleCaseData) => (
            <CaseBoxes casesData={singleCaseData} />
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
    }
}

const mapStateToProps = (state) => ({
    casesData: state.casesReducer.cases,
});

export default connect(mapStateToProps, {
    updateUserDataAction: updateUserData,
})(Cases);
