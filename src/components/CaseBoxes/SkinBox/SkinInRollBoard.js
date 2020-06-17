import React from 'react';
import { ItemInRoll } from './StyledComponents';
import style from './SkinBox.scss';

const SkinInRollBoard = ({ itemsToShow }) => {
    const generateKey = () => {
        const randomNumber = Math.random();
        return randomNumber;
    };

    const skinsRoll = itemsToShow.map((item) => (
        <ItemInRoll color={item.color} key={generateKey()}>
            <img src={item.image} alt={item.name} className={style.rollImage} />
        </ItemInRoll>
    ));

    return skinsRoll;
};

export default SkinInRollBoard;
