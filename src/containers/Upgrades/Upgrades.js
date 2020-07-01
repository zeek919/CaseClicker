import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import {
    Wrapper,
    InsideWrapper,
    Header,
    ContentWrapper,
} from './StyledComponents';

class Upgrades extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Wrapper>
                    <InsideWrapper>
                        <Header>Upgrades</Header>
                        <ContentWrapper>content</ContentWrapper>
                    </InsideWrapper>
                </Wrapper>
            </>
        );
    }
}

export default Upgrades;
