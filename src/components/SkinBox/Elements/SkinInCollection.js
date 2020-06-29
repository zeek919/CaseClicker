import React from 'react';
import { Box, InfoBox } from '../StyledComponents';

const SkinInCollection = ({ skinArray }) => {
    const generateKey = () => {
        const randomNumber = Math.random();
        return randomNumber;
    };

    const skinContainer = skinArray.map((item) => (
        <Box color={item.color} key={generateKey()}>
            <img src={item.image} alt={item.name} />
            <InfoBox color={item.color}>
                <p>{item.name}</p>
                <p>{item.type}</p>
            </InfoBox>
        </Box>
    ));

    return skinContainer;
};

export default SkinInCollection;
