import React from 'react';
import { ItemInRoll } from '../StyledComponents';

const SkinInRollBoard = ({ itemsToShow }) => {
    const generateKey = () => {
        const randomNumber = Math.random();
        return randomNumber;
    };

    const skinsRoll = itemsToShow.map((item) => (
        <ItemInRoll color={item.color} key={generateKey()}>
            <img src={item.image} alt={item.name} />
        </ItemInRoll>
    ));

    return skinsRoll;
};

export default SkinInRollBoard;
