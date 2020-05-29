import React, { useState, forwardRef, useImperativeHandle } from 'react';
import ReactDOM from 'react-dom';
import style from './CaseOpenModal.scss';

const CaseOpenModal = forwardRef((porps, ref) => {
    const [display, setDisplay] = useState(false);

    const showModal = () => {
        setDisplay(true);
    };

    useImperativeHandle(ref, () => ({
        open: () => showModal(),
    }));

    if (display) {
        return ReactDOM.createPortal(
            <div className={style.background}>
                <div
                    className={style.backdrop}
                    onClick={() => setDisplay(false)}
                />
                <div className={style.mainWrapper} />
            </div>,
            document.getElementById('modal-root')
        );
    }
    return null;
});
export default CaseOpenModal;
