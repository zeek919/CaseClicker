import { SET_SHOP_DATA } from './types';

const initialState = {
    cases: [],
    keys: [],
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOP_DATA:
            // const [cases, keys] = action.payload;
            return {
                ...state,
                cases: action.payload[0],
                keys: action.payload[1],
            };
        default:
            return state;
    }
};

export default shopReducer;
