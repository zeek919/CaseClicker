import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
import { addItem, updateCasesInfo } from '../../store/userData/actions';

const SkinBox = ({
    skinArray,
    addItemAction,
    isCaseAvailable,
    removeOpenedCase,
}) => {
    const [rolling, turnOnRolling] = useState(false);
    const [itemsToShow, setItemsToShow] = useState([]);
    const [display, setDisplay] = useState(false);
    const [drawnSkin, setDrawnSkin] = useState({});
    const [isLocked, lock] = useState(false);

    useEffect(() => {
        const skinsToShowContainer = randomItemToShow(skinArray);
        setItemsToShow(skinsToShowContainer);
    }, []);

    const closeModal = () => setDisplay(false);

    const rollHandler = () => {
        setDrawnSkin(itemsToShow[33]);
        const skinsToShowContainer = randomItemToShow(skinArray);
        turnOnRolling(true);
        lock(true);
        setTimeout(() => {
            turnOnRolling(false);
            setDisplay(true);
            setItemsToShow(skinsToShowContainer);
            addItemAction(itemsToShow[33]);
            lock(false);
        }, 1500);
        removeOpenedCase();
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
                <SkinInCollection skinArray={skinArray} />
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

const mapStateToProps = (state) => ({
    itemsFromReducer: state.userDataReducer.items,
});

const mapDispatchToProps = (dispatch) => ({
    addItemAction: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkinBox);
