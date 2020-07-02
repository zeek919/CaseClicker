import { SET_USER_UID, SET_USER_DATA } from './types';
import BASIC_USER_DATA from '../../constants/basicUserData';
import { setUserName } from './actions';

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

export const updateUserData = () => async (dispatch, getState, middlewares) => {
    try {
        const { firestore } = middlewares.services;
        const {
            uid,
            cases,
            money,
            currentTap,
            experience,
            level,
            items,
            upgrades,
        } = getState().userDataReducer;
        await firestore.collection('users').doc(uid).update({
            cases,
            currentTap,
            experience,
            items,
            level,
            money,
            upgrades,
        });
    } catch (error) {
        throw new Error(error);
    }
};

export const login = (email, password) => async (
    dispatch,
    getState,
    middlewares
) => {
    const { firebaseAuth } = middlewares.services;
    try {
        const signInUser = await firebaseAuth.signInWithEmailAndPassword(
            email,
            password
        );

        const userUid = signInUser.user.uid;
        const userName = firebaseAuth.currentUser.displayName;

        dispatch({
            type: SET_USER_UID,
            payload: userUid,
        });

        dispatch(checkBasicData(userUid));
        dispatch(setUserName(userName));
    } catch (error) {
        throw new Error(error);
    }
};

export const register = (nick, email, password) => async (
    dispatch,
    getState,
    middlewares
) => {
    const { firebaseAuth } = middlewares.services;
    try {
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
            email,
            password
        );
        await createUser.user.updateProfile({
            displayName: nick,
        });
    } catch (error) {
        throw new Error(error);
    }
};

export const logout = () => async (dispatch, getState, middlewares) => {
    try {
        const { firebaseAuth } = middlewares.services;
        await firebaseAuth.signOut();
    } catch (error) {
        throw new Error(error);
    }
};
