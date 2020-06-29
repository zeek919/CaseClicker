import { GET_LEVELS } from './types';

const setLevels = () => async (dispatch, getState, middlewares) => {
    const { firestore } = middlewares.services;
    try {
        const levelsConnect = await firestore.collection('levels').get();
        const levelsData = levelsConnect.docs.map((item) => item.data());

        dispatch({
            type: GET_LEVELS,
            payload: levelsData,
        });
    } catch (error) {
        throw new Error(error);
    }
};

export default setLevels;
