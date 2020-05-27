import { combineReducers } from 'redux';
import userDataReducer from './userData/reducer';
import levelsReducer from './levels/reducer';
import casesReducer from './cases/reducer';

const rootReducer = combineReducers({
    userDataReducer,
    levelsReducer,
    casesReducer,
});

export default rootReducer;
