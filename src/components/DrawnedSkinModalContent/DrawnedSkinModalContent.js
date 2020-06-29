import React from 'react';
import {
    Wrapper,
    TitleBar,
    ImageWrapper,
    Button,
    Image,
} from './StyledComponents';

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

export default DrawnedSkinModalContent;
