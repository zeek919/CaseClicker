import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InputContainer, Label } from './StyledComponents';

const Input = ({ placeholder, type, label, onChange }) => (
    <Wrapper>
        <InputContainer
            placeholder={placeholder}
            onChange={onChange}
            type={type}
        />
        <Label>{label}</Label>
    </Wrapper>
);

Input.propTypes = {
    placeholder: PropTypes.string,
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
