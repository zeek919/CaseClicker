import { GET_CASES_DATA } from './types';

const getCasesData = () => async (dispatch, getState, middlewares) => {
    try {
        const { firestore } = middlewares.services;
        const getCases = await firestore.collection('cases').get();
        const casesData = getCases.docs
            .map((item) => item.data())
            .sort((a, b) => a.id < b.id);

        dispatch({
            type: GET_CASES_DATA,
            payload: casesData,
        });
    } catch (error) {
        throw new Error(error);
    }
};

export default getCasesData;
