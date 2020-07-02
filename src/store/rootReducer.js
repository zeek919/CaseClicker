import { combineReducers } from 'redux';
import userDataReducer from './userData/reducer';
import levelsReducer from './levels/reducer';
import casesReducer from './cases/reducer';
import shopReducer from './shop/reducer';
import upgradesReducer from './upgrades/reducer';

const rootReducer = combineReducers({
    userDataReducer,
    levelsReducer,
    casesReducer,
    shopReducer,
    upgradesReducer,
});

export default rootReducer;
