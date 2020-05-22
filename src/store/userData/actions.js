import { SET_MONEY, SET_USER_DATA, UPDATE_USER_LEVEL } from './types';

export const setUserData = (item) => ({
    type: SET_USER_DATA,
    item,
});

export const updateMoney = (item) => ({
    type: SET_MONEY,
    item,
});

export const updateLevel = () => ({
    type: UPDATE_USER_LEVEL,
});
