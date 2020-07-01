import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLevel } from '../../store/userData/actions';
import {
    Loader,
    LoaderWrapper,
    ExperienceButton,
    Image,
    TextWrapper,
    ContentWrapper,
    DataWrapper,
} from './StyledComponents';

const ExperienceClickBox = () => {
    const dispatch = useDispatch();
    const experience = useSelector((state) => state.userDataReducer.experience);
    const levels = useSelector((state) => state.levelsReducer.levels);

    const [name, getName] = useState('');
    const [maxExp, getMaxExp] = useState(0);
    const [image, getImage] = useState('');

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
        dispatch(updateLevel());
    };

    return (
        <ExperienceButton
            type="button"
            onClick={() => {
                onClickHandler();
            }}
        >
            <Image src={image} alt="dolar" />
            <DataWrapper>
                <h1>{name}</h1>
                <ContentWrapper>
                    <TextWrapper>
                        <h3>
                            {experience} / {maxExp}
                        </h3>
                    </TextWrapper>
                    <LoaderWrapper>
                        <Loader length={calculateLoaderPercent()} />
                    </LoaderWrapper>
                </ContentWrapper>
            </DataWrapper>
        </ExperienceButton>
    );
};

export default React.memo(ExperienceClickBox);
