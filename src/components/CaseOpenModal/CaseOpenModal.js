import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper, Main, Backdrop } from './StyledComponents';
import PropTypes from 'prop-types';

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

CaseOpenModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    color: PropTypes.string,
    children: PropTypes.element.isRequired,
};

CaseOpenModal.defaultProps = {
    color: '#181927',
};
export default CaseOpenModal;
