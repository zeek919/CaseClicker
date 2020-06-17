import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import randomItemToShow from '../../../helpers/randomItemToShow';
import { SkinContainer, RollButton } from './StyledComponents';
import SkinInCollection from './SkinInCollection';
import SkinsInRollBoard from './SkinInRollBoard';
import style from './SkinBox.scss';
import arrow from '../../../assets/images/arrow.png';
import CaseOpenModal from '../../CaseOpenModal/CaseOpenModal';
import DrawnedSkinModalContent from '../../DrawnedSkinModalContent/DrawnedSkinModalContent';
import { addItem } from '../../../store/userData/actions';

const SkinBox = ({ skinArray, addItemAction, itemsFromReducer }) => {
    const [rolling, turnOnRolling] = useState(false);
    const [itemsToShow, setItemsToShow] = useState([]);
    const [display, setDisplay] = useState(false);
    const [drawnSkin, setDrawnSkin] = useState({});

    useEffect(() => {
        const skinsToShowContainer = randomItemToShow(skinArray);
        setItemsToShow(skinsToShowContainer);
    }, []);

    const closeModal = () => setDisplay(false);

    const rollHandler = () => {
        setDrawnSkin(itemsToShow[33]);
        const skinsToShowContainer = randomItemToShow(skinArray);
        turnOnRolling(true);
        setTimeout(() => {
            turnOnRolling(false);
            setDisplay(true);
            setItemsToShow(skinsToShowContainer);
            addItemAction(itemsToShow[33]);
        }, 1500);
    };

    return (
        <div className={style.wrapper}>
            <div className={style.roll}>
                <div className={style.rollBoard}>
                    <SkinContainer open={rolling}>
                        <SkinsInRollBoard itemsToShow={itemsToShow} />
                    </SkinContainer>
                </div>
                <img src={arrow} alt="arrow" />
                <RollButton
                    type="button"
                    className={style.button}
                    onClick={rollHandler}
                >
                    Get your skin!
                </RollButton>
            </div>
            <div className={style.itemWrapper}>
                <SkinInCollection skinArray={skinArray} />
            </div>
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
        </div>
    );
};

const mapStateToProps = (state) => ({
    itemsFromReducer: state.userDataReducer.items,
});

const mapDispatchToProps = (dispatch) => ({
    addItemAction: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkinBox);
