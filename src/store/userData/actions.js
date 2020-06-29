import {
    SET_MONEY,
    SET_USERNAME,
    SET_USER_DATA,
    UPDATE_USER_LEVEL,
    ADD_ITEM,
    UPDATE_ITEMS,
    UPDATE_CASES_INFO,
    DECREMENT_CASE_DATA,
} from './types';

export const setUserData = (item) => ({
    type: SET_USER_DATA,
    item,
});

export const setUserName = (item) => ({
    type: SET_USERNAME,
    payload: item,
});

export const updateMoney = (item) => ({
    type: SET_MONEY,
    item,
});

export const updateLevel = () => ({
    type: UPDATE_USER_LEVEL,
});

export const addItem = (item) => ({
    type: ADD_ITEM,
    item,
});

export const updateItems = (item) => ({
    type: UPDATE_ITEMS,
    item,
});

export const updateCasesInfo = (item) => ({
    type: UPDATE_CASES_INFO,
    item,
});

export const decrementCaseInfo = (item) => ({
    type: DECREMENT_CASE_DATA,
    payload: item,
});
