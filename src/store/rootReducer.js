import { combineReducers } from 'redux';
import userDataReducer from './userData/reducer';
import levelsReducer from './levels/reducer';

const rootReducer = combineReducers({ userDataReducer, levelsReducer });

export default rootReducer;
