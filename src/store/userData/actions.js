import {
    SET_MONEY,
    SET_USERNAME,
    UPDATE_USER_LEVEL,
    ADD_ITEM,
    REMOVE_ITEMS,
    DECREMENT_CASE_DATA,
    UPDATE_UPGRADE,
    BUY_ITEM,
} from './types';

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

export const removeItems = (item) => ({
    type: REMOVE_ITEMS,
    payload: item,
});

export const decrementCaseInfo = (item) => ({
    type: DECREMENT_CASE_DATA,
    payload: item,
});

export const updateUpgrade = (item) => ({
    type: UPDATE_UPGRADE,
    payload: item,
});

export const buyItem = (item) => ({
    type: BUY_ITEM,
    payload: item,
});
