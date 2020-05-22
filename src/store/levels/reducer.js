import { GET_LEVELS } from './types';

const initialState = {
    levels: [],
};

const levelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LEVELS:
            return { ...state, levels: action.payload };
        default:
            return state;
    }
};

export default levelsReducer;
