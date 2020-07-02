import { SET_UPGRADES_DATA } from './types';

const initialState = {
    cases: [],
    tap: [],
};

const upgradesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UPGRADES_DATA: {
            const { payload } = action;
            return { ...state, cases: payload[0], tap: payload[1] };
        }
        default: {
            return state;
        }
    }
};

export default upgradesReducer;
