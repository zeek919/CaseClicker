import React, { Component } from 'react';
import {
    Wrapper,
    InsideWrapper,
    Header,
    ContentWrapper,
} from './StyledComponents';
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import navbarHeaders from '../../constants/navbarHeaders';
import OwnedSkinBoxes from '../../components/OwnedSkinBoxes/OwnedSkinBoxes';
import { updateUserData } from '../../store/userData/operations';

class Equipment extends Component {
    async componentWillUnmount() {
        const { updateUserDataAction } = this.props;
        await updateUserDataAction();
    }

    render() {
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
    }
}

export default connect(null, {
    updateUserDataAction: updateUserData,
})(Equipment);
