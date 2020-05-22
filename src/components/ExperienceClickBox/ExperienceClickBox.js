/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import PropTypes, { shape } from 'prop-types';
import { connect } from 'react-redux';
import { updateLevel } from '../../store/userData/actions';
import { Loader, LoaderWrapper } from './StyledComponents';
import style from './ExperienceClickBox.scss';

const ExperienceClickBox = ({ levels, experience, updateLevelAction }) => {
    const [name, getName] = useState();
    const [maxExp, getMaxExp] = useState();
    const [image, getImage] = useState();

    const calculateLoaderPercent = () => (experience * 100) / maxExp;

    const calculateCurrentLevel = () => {
        levels.forEach((item) => {
            if (experience >= item.minExp && experience <= item.maxExp) {
                getImage(item.image);
                getName(item.name);
                getMaxExp(item.maxExp);
            }
        });
    };

    useEffect(() => {
        calculateCurrentLevel();
    }, []);

    const onClickHandler = () => {
        calculateCurrentLevel();
        updateLevelAction();
    };

    return (
        <button
            type="button"
            className={style.wrapper}
            onClick={() => {
                onClickHandler();
            }}
        >
            <img src={image} alt="dolar" className={style.image} />
            <div className={style.dataWrapper}>
                <div>{name}</div>
                <div className={style.textWrapper}>
                    {experience} / {maxExp}
                </div>
                <LoaderWrapper>
                    <Loader length={calculateLoaderPercent()} />
                </LoaderWrapper>
            </div>
        </button>
    );
};

ExperienceClickBox.propTypes = {
    levels: PropTypes.arrayOf(
        shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            minExp: PropTypes.number.isRequired,
            maxExp: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    experience: PropTypes.number.isRequired,
    updateLevelAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    experience: state.userDataReducer.experience,
    levels: state.levelsReducer.levels,
});

const mapDispatchToProps = (dispatch) => ({
    updateLevelAction: () => dispatch(updateLevel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceClickBox);
