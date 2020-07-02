import {
    SET_USERNAME,
    SET_MONEY,
    SET_USER_DATA,
    SET_USER_UID,
    UPDATE_USER_LEVEL,
    ADD_ITEM,
    REMOVE_ITEMS,
    DECREMENT_CASE_DATA,
    UPDATE_UPGRADE,
    BUY_ITEM,
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
    upgrades: [],
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
                upgrades: action.payload.upgrades,
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
        case DECREMENT_CASE_DATA: {
            const { payload } = action;
            const { cases } = state;

            cases.map((item) => {
                if (item.name === payload) {
                    item.cases -= 1;
                    item.keys -= 1;
                }
            });

            return state;
        }
        case UPDATE_UPGRADE: {
            const { name, value } = action.payload;
            const { upgrades, currentTap } = state;

            let tempCurrentTap = currentTap + value;
            return {
                ...state,
                currentTap: tempCurrentTap,
                upgrades: { ...upgrades, [name]: true },
            };
        }

        case BUY_ITEM: {
            const { source, price, type } = action.payload;
            const { cases, money } = state;
            let tempMoney = money;

            cases.map((item) => {
                if (item.name === source && money >= price) {
                    item[type] += 1;
                    tempMoney -= price;
                }
            });
            return { ...state, money: tempMoney };
        }
        default:
            return state;
    }
};

export default userDataReducer;
