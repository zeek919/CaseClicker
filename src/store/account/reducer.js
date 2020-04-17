import types from './types';

const initialState = {
    email: '',
    password: '',
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_EMAIL:
            return { ...state, email: action.payload };

        case types.SET_PASSWORD:
            return { ...state, password: action.payload };

        default:
            return state;
    }
};

export default accountReducer;
