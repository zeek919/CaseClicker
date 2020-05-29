/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { useRef } from 'react';
import CaseOpenModal from '../CaseOpenModal/CaseOpenModal';
import { CaseBox, OpenButton, SellButton } from './StyledComponents';
import style from './CaseBoxes.scss';

const CaseBoxes = ({ casesData, userCasesInfo }) => {
    const modal = useRef();
    const openModal = () => {
        modal.current.open();
    };

    const caseBoxes = casesData.map((singleCase) => {
        const isGotten = userCasesInfo.map(
            (item) => item.name === singleCase.name && item.count > 0
        );

        const caseCount = userCasesInfo.map((item) =>
            item.name === singleCase.name ? item.count : null
        );

        return (
            <CaseBox exist={isGotten} key={singleCase.name}>
                <CaseOpenModal ref={modal} />

                <h2 className={style.count}>{caseCount}</h2>
                <img
                    src={singleCase.image}
                    alt={singleCase.id}
                    className={style.image}
                />
                <OpenButton exist={isGotten} onClick={openModal}>
                    Open Now!
                </OpenButton>
                <SellButton exist={isGotten}>
                    {isGotten ? `Sell for: ${singleCase.price}$` : 'Buy Now!'}
                </SellButton>
            </CaseBox>
        );
    });

    return caseBoxes;
};

export default CaseBoxes;
