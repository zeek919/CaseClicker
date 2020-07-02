import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import CaseOpenModal from '../CaseOpenModal/CaseOpenModal';
import SkinBox from '../SkinBox/SkinBox';
import {
    CaseBox,
    OpenButton,
    SellButton,
    CountHeader,
    Image,
} from './StyledComponents';
import { decrementCaseInfo } from '../../store/userData/actions';
import { caseCountAndKeys, isCaseAvailableToBuy } from '../../helpers';

const CaseBoxes = ({ casesData }) => {
    const dispatch = useDispatch();
    const userCasesInfo = useSelector((state) => state.userDataReducer.cases);

    const [display, setDisplay] = useState(false);
    const [state, forceUpdate] = useState(true);
    const closeModal = () => setDisplay(false);

    const caseCountKeys = caseCountAndKeys(casesData, userCasesInfo);
    const isCaseAvailable = isCaseAvailableToBuy(casesData, userCasesInfo);

    return (
        <CaseBox exist={isCaseAvailable} key={casesData.name}>
            <CaseOpenModal isOpen={display} close={closeModal}>
                <SkinBox
                    skinInCollection={casesData.items}
                    isCaseAvailable={isCaseAvailable}
                    parentForceUpdate={() => forceUpdate(!state)}
                    removeOpenedCase={() =>
                        dispatch(decrementCaseInfo(casesData.name))
                    }
                />
            </CaseOpenModal>

            <CountHeader>
                <p>Case: {caseCountKeys.cases}</p>
                <p>Keys: {caseCountKeys.keys}</p>
            </CountHeader>
            <Image src={casesData.image} alt={casesData.id} />
            <OpenButton
                exist={isCaseAvailable}
                onClick={() => setDisplay(true)}
            >
                Open Now!
            </OpenButton>
            <SellButton exist={isCaseAvailable}>
                {isCaseAvailable ? `Sell for: ${casesData.price}$` : 'Buy Now!'}
            </SellButton>
        </CaseBox>
    );
};

CaseBoxes.propTypes = {
    casesData: PropTypes.object.isRequired,
};
export default CaseBoxes;
