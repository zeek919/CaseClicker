import React from 'react';
import PropTypes from 'prop-types';
import style from './FormButton.scss';

const FormButton = ({ content, onClick }) => (
    <button type="button" className={style.button} onClick={onClick}>
        {content}
    </button>
);

FormButton.propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default FormButton;
