import {
    SET_USERNAME,
    SET_MONEY,
    SET_USER_DATA,
    SET_USER_UID,
    UPDATE_USER_LEVEL,
    ADD_ITEM,
    UPDATE_ITEMS,
    REMOVE_ITEMS,
    UPDATE_CASES_INFO,
    DECREMENT_CASE_DATA,
} from './types';

const initialState = {
    uid: '',
    userName: '',
    money: 0,
    currentTap: 0.001,
    experience: 0,
    level: 1,
    cases: [],
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
        case SET_USERNAME: {
            return {
                ...state,
                userName: action.payload,
            };
        }
        case SET_USER_DATA: {
            return {
                ...state,
                money: action.payload.money,
                currentTap: action.payload.currentTap,
                experience: action.payload.experience,
                cases: action.payload.cases,
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
        case ADD_ITEM: {
            return {
                ...state,
                items: [...state.items, action.item],
            };
        }
        case UPDATE_ITEMS: {
            return {
                ...state,
                items: action.item,
            };
        }
        case REMOVE_ITEMS: {
            const { payload } = action;
            const { money, items } = state;
            const index = items.findIndex(
                (singleSkin) => singleSkin === payload
            );
            items.splice(index, 1);
            return {
                ...state,
                money: money + payload.price,
            };
        }
        case UPDATE_CASES_INFO: {
            return {
                ...state,
                cases: action.item,
            };
        }
        case DECREMENT_CASE_DATA: {
            const { payload } = action;

            state.cases.map((item) => {
                if (item.name === payload) {
                    item.cases -= 1;
                    item.keys -= 1;
                }
            });

            return state;
        }
        default:
            return state;
    }
};

export default userDataReducer;
