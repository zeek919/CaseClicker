import types from './types';

const initialState = {
    money: 0,
    currentTap: 0.001,
    experience: 0,
    items: [],
};

const userDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER_DATA: {
            return {
                ...state,
                money: action.item.money,
                currentTap: action.item.currentTap,
                experience: action.item.experience,
                items: action.item.items,
            };
        }
        case types.SET_MONEY: {
            return {
                ...state,
                money: action.item,
            };
        }
        default:
            return state;
    }
};

export default userDataReducer;
