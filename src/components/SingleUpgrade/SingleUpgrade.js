import React from 'react';
import { Wrapper, Image, Describe, Button, Title } from './StyledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { updateUpgrade } from '../../store/userData/actions';
import PropTypes from 'prop-types';

const SingleUpgrade = ({ upgrade }) => {
    const dispatch = useDispatch();
    const upgradesData = useSelector((state) => state.userDataReducer.upgrades);
    const { title, image, describe, price, name, value } = upgrade;

    const wasPurchased = Object.entries(upgradesData)
        .map((upgrade) => (upgrade[0] === name ? upgrade[1] : null))
        .filter((item) => item !== null)[0];

    console.log(upgrade);
    return (
        <Wrapper>
            <Image src={image} />
            <Describe>
                <Title>{title}</Title>
                {describe}
            </Describe>
            <Button
                disabled={wasPurchased}
                onClick={() => dispatch(updateUpgrade({ name, value }))}
            >
                {wasPurchased ? 'Purchased' : `Buy for: ${price}`}
            </Button>
        </Wrapper>
    );
};

SingleUpgrade.propTypes = {
    upgrade: PropTypes.shape({
        name: PropTypes.string.isRequired,
        describe: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        minExp: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    }).isRequired,
};

export default SingleUpgrade;
