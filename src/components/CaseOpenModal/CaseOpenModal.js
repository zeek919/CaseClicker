import React from 'react';
import ReactDOM from 'react-dom';
import style from './CaseOpenModal.scss';
import { Wrapper, Main, Backdrop } from './StyledComponents';

const CaseOpenModal = ({ isOpen, close, color, children }) => {
    if (isOpen) {
        return ReactDOM.createPortal(
            <Wrapper className={style.background}>
                <Main color={color}>{children}</Main>
                <Backdrop className={style.backdrop}>
                    <button onClick={close} type="button">
                        Exit
                    </button>
                </Backdrop>
            </Wrapper>,
            document.getElementById('modal-root')
        );
    }
    return null;
};
export default CaseOpenModal;
