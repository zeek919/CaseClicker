import { SET_SHOP_DATA } from './types';

const setShopData = () => async (dispatch, getState, middlewares) => {
    const { firestore } = middlewares.services;
    try {
        const shopConnect = await firestore.collection('shop').get();
        const shopData = shopConnect.docs.map((item) => item.data());

        dispatch({
            type: SET_SHOP_DATA,
            payload: shopData,
        });
    } catch (error) {
        throw new Error(error);
    }
};

export default setShopData;
