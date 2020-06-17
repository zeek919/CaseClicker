import {
    SET_MONEY,
    SET_USER_DATA,
    UPDATE_USER_LEVEL,
    ADD_ITEM,
    UPDATE_ITEMS,
} from './types';

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

export const addItem = (item) => ({
    type: ADD_ITEM,
    item,
});

export const updateItems = (item) => ({
    type: UPDATE_ITEMS,
    item,
});
