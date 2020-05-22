import types from './types';

export const setLevel = (item) => ({
    type: types.SET_LEVELS,
    payload: item,
});
