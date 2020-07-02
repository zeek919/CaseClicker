import { SET_UPGRADES_DATA } from './types';
const setUpgradesData = () => async (dispatch, getState, middlewares) => {
    const { firestore } = middlewares.services;
    try {
        const upgradesConnect = await firestore.collection('upgrades').get();
        const upgradesData = upgradesConnect.docs.map((item) => item.data());

        dispatch({
            type: SET_UPGRADES_DATA,
            payload: upgradesData,
        });
    } catch (error) {
        throw new Error(error);
    }
};

export default setUpgradesData;
