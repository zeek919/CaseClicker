import React from 'react';
import { Box, InfoBox } from '../StyledComponents';
import { generateKey } from '../../../helpers';
import PropTypes from 'prop-types';

const SkinInCollection = ({ skins }) => {
    console.log(skins);
    const skinContainer = skins.map((item) => (
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

SkinInCollection.propTypes = {
    skins: PropTypes.arrayOf(PropTypes.object.isRequired),
};
export default React.memo(SkinInCollection);
