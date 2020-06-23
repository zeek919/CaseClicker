import {SET_SHOP_DATA} from './types';

export const setShop = (item) => ({
    type: SET_SHOP_DATA;
    payload: item
})