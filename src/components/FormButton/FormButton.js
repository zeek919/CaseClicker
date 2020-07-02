import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './StyledComponents';

const FormButton = ({ content, onClick }) => (
    <Button type="button" onClick={onClick}>
        {content}
    </Button>
);

FormButton.propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default React.memo(FormButton);
