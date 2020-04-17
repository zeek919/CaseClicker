import types from './types';

const setEmail = (item) => ({
    type: types.SET_EMAIL,
    payload: item,
});

const setPassword = (item) => ({
    type: types.SET_PASSWORD,
    payload: item,
});

export default { setEmail, setPassword };
