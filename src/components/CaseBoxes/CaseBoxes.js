import React from 'react';
import { CaseBox, OpenButton, SellButton } from './StyledComponents';
import style from './CaseBoxes.scss';

const CaseBoxes = ({ casesData, userCasesInfo }) => {
    const caseBoxes = casesData.map((singleCase) => {
        const isGotten = userCasesInfo.map(
            (item) => item.name === singleCase.name && item.count > 0
        );

        const caseCount = userCasesInfo.map((item) =>
            item.name === singleCase.name ? item.count : null
        );

        return (
            <CaseBox exist={isGotten} key={singleCase.name}>
                <h2 className={style.count}>{caseCount}</h2>
                <img src={singleCase.image} alt={singleCase.id} />
                <OpenButton exist={isGotten}>Open Now!</OpenButton>
                <SellButton exist={isGotten}>
                    {isGotten ? `Sell for: ${singleCase.price}$` : 'Buy Now!'}
                </SellButton>
            </CaseBox>
        );
    });

    return caseBoxes;
};

export default CaseBoxes;
