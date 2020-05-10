import types from './types';

const setUserData = (item) => ({
    type: types.SET_USER_DATA,
    item,
});

const updateMoney = (item) => ({
    type: types.SET_MONEY,
    item,
});

export default { setUserData, updateMoney };
