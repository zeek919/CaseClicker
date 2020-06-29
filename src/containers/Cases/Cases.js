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
        const { casesData, userCasesInfo } = this.props;

        return (
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
    }
}

const mapStateToProps = (state) => ({
    casesData: state.casesReducer.cases,
    userCasesInfo: state.userDataReducer.cases,
});

export default connect(mapStateToProps, {
    updateUserDataAction: updateUserData,
})(Cases);
