import React, { useState } from 'react';
import { connect } from 'react-redux';
import CaseOpenModal from '../CaseOpenModal/CaseOpenModal';
import {
    CaseBox,
    OpenButton,
    SellButton,
    CaseWrapper,
    CountHeader,
    Image,
} from './StyledComponents';
import SkinBox from '../SkinBox/SkinBox';
import {
    decrementCaseInfo,
    updateCasesInfo,
} from '../../store/userData/actions';

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
            temporaryCasesInfo[correctCaseIndex].cases--;

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

        const caseKeys = userCasesInfo.map((item) =>
            item.name === singleCase.name ? item.keys : null
        );

        const isCaseAvailable = userCasesInfo
            .map(
                (item) =>
                    item.name === singleCase.name &&
                    item.keys > 0 &&
                    item.cases > 0
            )
            .includes(true);

        return (
            <CaseBox exist={isGotten()} key={singleCase.name}>
                <CaseOpenModal isOpen={display} close={closeModal}>
                    <SkinBox
                        skinArray={singleCase.items}
                        isCaseAvailable={isCaseAvailable}
                        removeOpenedCase={removeOpenedCase}
                    />
                </CaseOpenModal>

                <CountHeader>
                    <p>Case: {caseCount}</p>
                    <p>Keys: {caseKeys}</p>
                </CountHeader>
                <Image src={singleCase.image} alt={singleCase.id} />
                <OpenButton exist={isGotten()} onClick={() => setDisplay(true)}>
                    Open Now!
                </OpenButton>
                <SellButton exist={isGotten()}>
                    {isGotten ? `Sell for: ${singleCase.price}$` : 'Buy Now!'}
                </SellButton>
            </CaseBox>
        );
    });

    return <CaseWrapper>{caseBoxes}</CaseWrapper>;
};

const mapDispatchToProps = (dispatch) => ({
    updateCasesInfoAction: (item) => dispatch(updateCasesInfo(item)),
    decrementCaseInfoAction: (item) => dispatch(decrementCaseInfo(item)),
});

export default connect(null, mapDispatchToProps)(CaseBoxes);
