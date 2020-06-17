/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { useState } from 'react';
import CaseOpenModal from '../CaseOpenModal/CaseOpenModal';
import { CaseBox, OpenButton, SellButton } from './StyledComponents';
import SkinBox from './SkinBox/SkinBox';
import style from './CaseBoxes.scss';

const CaseBoxes = ({ casesData, userCasesInfo }) => {
    const caseBoxes = casesData.map((singleCase) => {
        const [display, setDisplay] = useState(false);
        const closeModal = () => setDisplay(false);

        const isGotten = () => {
            const a = userCasesInfo.map(
                (item) =>
                    item.name === singleCase.name &&
                    item.count > 0 &&
                    item.keys > 0
            );
            return a.includes(true);
        };

        const caseCount = userCasesInfo.map((item) =>
            item.name === singleCase.name ? item.count : null);

        return (
            <CaseBox exist={isGotten()} key={singleCase.name}>
                <CaseOpenModal isOpen={display} close={closeModal}>
                    <SkinBox skinArray={singleCase.items} />
                </CaseOpenModal>

                <h2 className={style.count}>{caseCount}</h2>
                <img
                    src={singleCase.image}
                    alt={singleCase.id}
                    className={style.image}
                />
                <OpenButton exist={isGotten()} onClick={() => setDisplay(true)}>
                    Open Now!
                </OpenButton>
                <SellButton exist={isGotten()}>
                    {isGotten ? `Sell for: ${singleCase.price}$` : 'Buy Now!'}
                </SellButton>
            </CaseBox>
        );
    });

    return caseBoxes;
};

export default CaseBoxes;
