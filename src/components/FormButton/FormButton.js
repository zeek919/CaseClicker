import React from 'react';
import PropTypes from 'prop-types';
import style from './FormButton.scss';

const FormButton = ({ content }) => (
    <button type="button" className={style.button}>
        {content}
    </button>
);

FormButton.propTypes = {
    content: PropTypes.string.isRequired,
};

export default FormButton;
