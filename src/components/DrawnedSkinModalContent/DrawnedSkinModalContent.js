import React from 'react';
import {
    Wrapper,
    TitleBar,
    ImageWrapper,
    Button,
    Image,
} from './StyledComponents';
import PropTypes from 'prop-types';

const DrawnedSkinModalContent = ({ drawnedSkin, close }) => (
    <Wrapper>
        <TitleBar>
            <span>
                {drawnedSkin.name} {' | '}
                {drawnedSkin.type}
            </span>
            <span>{drawnedSkin.price}</span>
        </TitleBar>
        <ImageWrapper>
            <Image src={drawnedSkin.image} alt={drawnedSkin.name} />
        </ImageWrapper>
        <Button onClick={close}>OK</Button>
    </Wrapper>
);

DrawnedSkinModalContent.propTypes = {
    drawnedSkin: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
};

export default DrawnedSkinModalContent;
