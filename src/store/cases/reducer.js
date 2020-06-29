import { GET_CASES_DATA } from './types';

const initialState = {
    cases: [],
};

const casesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CASES_DATA: {
            return {
                ...state,
                cases: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default casesReducer;
