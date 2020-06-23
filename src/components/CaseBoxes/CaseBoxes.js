/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import CaseOpenModal from '../CaseOpenModal/CaseOpenModal';
import { CaseBox, OpenButton, SellButton } from './StyledComponents';
import SkinBox from './SkinBox/SkinBox';
import { updateCasesInfo } from '../../store/userData/actions';
import style from './CaseBoxes.scss';

const CaseBoxes = ({ casesData, userCasesInfo, updateCasesInfoAction }) => {
    const caseBoxes = casesData.map((singleCase) => {
        const [display, setDisplay] = useState(false);
        const closeModal = () => setDisplay(false);

        const removeOpenedCase = () => {
            const temporaryCasesInfo = [...userCasesInfo];
            const correctCase = userCasesInfo.map(
                (item) => item.name === singleCase.name
            );

            const correctCaseIndex = correctCase.indexOf(true);
            temporaryCasesInfo[correctCaseIndex].keys--;
            temporaryCasesInfo[correctCaseIndex].count--;

            updateCasesInfoAction(temporaryCasesInfo);
        };

        const isGotten = () => {
            const correctCase = userCasesInfo.map(
                (item) =>
                    item.name === singleCase.name &&
                    item.cases > 0 &&
                    item.keys > 0
            );
            return correctCase.includes(true);
        };

        const caseCount = userCasesInfo.map((item) =>
            item.name === singleCase.name ? item.cases : null
        );

        return (
            <CaseBox exist={isGotten()} key={singleCase.name}>
                <CaseOpenModal isOpen={display} close={closeModal}>
                    <SkinBox
                        skinArray={singleCase.items}
                        removeOpenedCase={removeOpenedCase}
                    />
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

const mapDispatchToProps = (dispatch) => ({
    updateCasesInfoAction: (item) => dispatch(updateCasesInfo(item)),
});

export default connect(null, mapDispatchToProps)(CaseBoxes);
