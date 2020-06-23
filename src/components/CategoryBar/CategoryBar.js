import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button } from './StyledComponents';

const CategoryBar = ({ header, changePageHandler }) => (
    <Wrapper>
        <Button onClick={() => changePageHandler(true)} rotated />
        {header}
        <Button onClick={changePageHandler} />
    </Wrapper>
);

CategoryBar.propTypes = {
    header: PropTypes.string.isRequired,
    changePageHandler: PropTypes.func.isRequired,
};

export default CategoryBar;
