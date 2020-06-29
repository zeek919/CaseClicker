import React, { PureComponent } from 'react';
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

class Equipment extends PureComponent {
    async componentWillUnmount() {
        const { updateUserDataAction } = this.props;
        await updateUserDataAction();
    }

    render() {
        return (
            <>
                <Navbar navHeadersArray={navbarHeaders} />
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
