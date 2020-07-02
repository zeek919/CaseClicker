import React from 'react';
import { ItemInRoll } from '../StyledComponents';
import { generateKey } from '../../../helpers';
import PropTypes from 'prop-types';

const SkinInRollBoard = ({ itemsToShow }) => {
    const skinsRoll = itemsToShow.map((item) => (
        <ItemInRoll color={item.color} key={generateKey()}>
            <img src={item.image} alt={item.name} />
        </ItemInRoll>
    ));

    return skinsRoll;
};

SkinInRollBoard.propTypes = {
    itemToShow: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default SkinInRollBoard;
