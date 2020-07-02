import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import randomItemToShow from '../../helpers/randomItemToShow';
import {
    SkinContainer,
    RollButton,
    Wrapper,
    RollWrapper,
    RollBoard,
    CollectionWrapper,
} from './StyledComponents';
import SkinInCollection from './Elements/SkinInCollection';
import SkinsInRollBoard from './Elements/SkinInRollBoard';
import arrow from '../../assets/images/arrow.png';
import CaseOpenModal from '../CaseOpenModal/CaseOpenModal';
import DrawnedSkinModalContent from '../DrawnedSkinModalContent/DrawnedSkinModalContent';
import { addItem } from '../../store/userData/actions';
import PropTypes from 'prop-types';

const SkinBox = ({
    skinInCollection,
    isCaseAvailable,
    removeOpenedCase,
    parentForceUpdate,
}) => {
    const dispatch = useDispatch();
    const [rolling, turnOnRolling] = useState(false);
    const [itemsToShow, setItemsToShow] = useState([]);
    const [display, setDisplay] = useState(false);
    const [drawnSkin, setDrawnSkin] = useState({});
    const [isLocked, lock] = useState(false);

    const closeModal = () => setDisplay(false);

    useEffect(() => {
        const skinsToShowContainer = randomItemToShow(skinInCollection);
        setItemsToShow(skinsToShowContainer);
    }, []);

    const rollHandler = () => {
        setDrawnSkin(itemsToShow[33]);
        const skinsToShowContainer = randomItemToShow(skinInCollection);
        turnOnRolling(true);
        lock(true);
        setTimeout(() => {
            turnOnRolling(false);
            setDisplay(true);
            setItemsToShow(skinsToShowContainer);
            dispatch(addItem(itemsToShow[33]));
            lock(false);
        }, 1500);
        removeOpenedCase();
        parentForceUpdate();
    };

    return (
        <Wrapper>
            <RollWrapper>
                <RollBoard>
                    <SkinContainer open={rolling}>
                        <SkinsInRollBoard itemsToShow={itemsToShow} />
                    </SkinContainer>
                </RollBoard>
                <img src={arrow} alt="arrow" />
                <RollButton
                    type="button"
                    onClick={rollHandler}
                    locked={isLocked}
                    avilable={isCaseAvailable}
                >
                    {isCaseAvailable
                        ? 'Get your skin!'
                        : 'Not enough keys or cases!'}
                </RollButton>
            </RollWrapper>
            <CollectionWrapper>
                <SkinInCollection skins={skinInCollection} />
            </CollectionWrapper>
            <CaseOpenModal
                isOpen={display}
                close={closeModal}
                color={drawnSkin.color}
            >
                <DrawnedSkinModalContent
                    drawnedSkin={drawnSkin}
                    close={closeModal}
                />
            </CaseOpenModal>
        </Wrapper>
    );
};

SkinBox.propTypes = {
    skinInCollection: PropTypes.arrayOf(PropTypes.shape(PropTypes.object))
        .isRequired,
    isCaseAvailable: PropTypes.bool.isRequired,
    removeOpenedCase: PropTypes.func.isRequired,
    parentForceUpdate: PropTypes.func.isRequired,
};
export default SkinBox;
