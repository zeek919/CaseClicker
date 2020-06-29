import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Main, Backdrop } from './StyledComponents';

const CaseOpenModal = ({ isOpen, close, color, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <Wrapper>
            <Main color={color}>{children}</Main>
            <Backdrop onClick={close} />
        </Wrapper>,
        document.getElementById('modal-root')
    );
};
export default CaseOpenModal;
