import React from 'react';
import PropTypes from 'prop-types';
import style from './Input.scss';

const Input = ({ placeholder, id, type, label, onChange }) => (
    <div className={style.wrapper}>
        <input
            className={style.input}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
        />
        <label htmlFor={id} className={style.label}>
            {label}
        </label>
    </div>
);

Input.propTypes = {
    placeholder: PropTypes.string,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

Input.defaultProps = {
    placeholder: '',
    type: 'text',
    onChange: () => {},
};

export default Input;
