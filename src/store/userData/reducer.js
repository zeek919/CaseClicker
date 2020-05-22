import {
    SET_MONEY,
    SET_USER_DATA,
    SET_USER_UID,
    UPDATE_USER_LEVEL,
} from './types';

const initialState = {
    uid: '',
    money: 0,
    currentTap: 0.001,
    experience: 0,
    level: 1,
    items: [],
};

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_UID: {
            return {
                ...state,
                uid: action.payload,
            };
        }
        case SET_USER_DATA: {
            return {
                ...state,
                money: action.payload.money,
                currentTap: action.payload.currentTap,
                experience: action.payload.experience,
                items: action.payload.items,
            };
        }
        case SET_MONEY: {
            return {
                ...state,
                money: action.item,
            };
        }
        case UPDATE_USER_LEVEL: {
            return {
                ...state,
                experience: 1 + state.experience,
            };
        }
        default:
            return state;
    }
};

export default userDataReducer;
