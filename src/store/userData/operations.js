import { SET_USER_UID, SET_USER_DATA } from './types';
import BASIC_USER_DATA from '../../constants/basicUserData';

const checkBasicData = (uid) => async (dispatch, getState, middlewares) => {
    const { firestore } = middlewares.services;
    try {
        const basicData = await firestore.collection('users').doc(uid);
        await basicData.get().then((doc) => {
            if (!doc.exists) {
                firestore.collection('users').doc(uid).set(BASIC_USER_DATA);
            }
        });

        const userData = await firestore.collection('users').doc(uid).get();
        dispatch({
            type: SET_USER_DATA,
            payload: userData.data(),
        });
    } catch (error) {
        throw new Error(error);
    }
};

export const updateUserData = (data) => async (
    dispatch,
    getState,
    middlewares,
) => {
    try {
        const { firestore } = middlewares.services;
        const {
            uid,
            money,
            currentTap,
            experience,
            level,
            items,
        } = getState().userDataReducer;
        await firestore.collection('users').doc(uid).update({
            currentTap,
            experience,
            items,
            level,
            money,
        });
    } catch (error) {
        throw new Error(error);
    }
};

export const login = (email, password) => async (
    dispatch,
    getState,
    middlewares,
) => {
    const { firebase } = middlewares.services;
    try {
        const signInYser = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);

        const userUid = await signInYser.user.uid;
        dispatch({
            type: SET_USER_UID,
            payload: userUid,
        });

        dispatch(checkBasicData(userUid));
    } catch (error) {
        throw new Error(error);
    }
};
